import { NextResponse } from 'next/server';
import pool from './dbConnection.js';

// Load ideas from database
async function loadIdeas() {
  try {
    const result = await pool.query('SELECT * FROM ideas ORDER BY id');
    return result.rows;
  } catch (error) {
    console.error('Failed to load ideas from database:', error);
    throw error;
  }
}

// Update idea in database
async function updateIdea(id, status, teamName) {
  try {
    const result = await pool.query(
      'UPDATE ideas SET status = $1, team_name = $2 WHERE id = $3 RETURNING *',
      [status, teamName || null, id]
    );
    return result.rows[0];
  } catch (error) {
    if (error.code === '23505' && error.constraint && error.constraint.includes('team_name')) {
      const duplicateError = new Error('Duplicate team name');
      duplicateError.status = 409;
      duplicateError.code = 'DUPLICATE_TEAM_NAME';
      throw duplicateError;
    }

    console.error('Failed to update idea in database:', error);
    throw error;
  }
}

export async function GET() {
  try {
    const ideas = await loadIdeas();
    return Response.json(ideas);
  } catch (error) {
    console.error('Failed to load ideas:', error);
    return Response.json({ error: 'Failed to load ideas' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, status, teamName } = body;

    const ideas = await loadIdeas();
    const idea = ideas.map((i) => i.id === id);

    if (!idea) {
      return Response.json({ error: 'Idea not found' }, { status: 404 });
    }

    idea.status = status;
    idea.teamName = teamName || null;

    const updatedIdea = await updateIdea(id, status, teamName);
    //saveIdeas(ideas);

    return Response.json(updatedIdea);
  } catch (error) {
    if (error.code === 'DUPLICATE_TEAM_NAME') {
      return NextResponse.json({ error: 'Team name already exists' }, { status: 409 });
    }

    console.error('Failed to update idea:', error);
    return NextResponse.json({ error: 'Failed to update idea' }, { status: 500 });
  }
}
