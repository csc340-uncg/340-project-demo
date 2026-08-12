#!/usr/bin/env node
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

function loadEnv() {
  const envPath = path.resolve(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  const contents = fs.readFileSync(envPath, 'utf8');
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

loadEnv();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const ideas = [
  {
    name: 'SeniorConnect',
    description: 'Match seniors with vetted companions and non-medical helpers for visits and light assistance.',
    category: 'Home & Care',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Seniors & families',
    provider: 'Companions, non-medical caregivers',
    features: 'Scheduling, background checks, recurring care plans, medication reminders, reviews'
  },
  {
    name: 'SkillSwap',
    description: 'Peer-to-peer skill exchange and barter platform for local communities.',
    category: 'Community',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Hobbyists & learners',
    provider: 'Individuals offering skills',
    features: 'Listings, trade proposals, reputation system, calendar booking, micro-payments/credits'
  },
  {
    name: 'GreenThumbs',
    description: 'Local gardening services and plant-sitting for home gardeners.',
    category: 'Gardening',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Home gardeners & renters',
    provider: 'Gardeners, landscapers, plant sitters',
    features: 'Plant profiles, seasonal care plans, on-site visits, plant-sitting scheduling, tips library'
  },
  {
    name: 'ToolPool',
    description: 'Neighborhood tool and equipment sharing marketplace.',
    category: 'Equipment Rental',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'DIYers and small projects',
    provider: 'Neighbors, local rental shops',
    features: 'Availability calendar, damage deposits, pickup/dropoff logistics, ratings'
  },
  {
    name: 'EventCrew',
    description: 'On-demand event staff, setup, and volunteer matching for events.',
    category: 'Events & Staffing',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Event organizers',
    provider: 'Freelance staff, volunteers, temp agencies',
    features: 'Shift scheduling, role checklists, time-tracking, team messaging, reviews'
  },
  {
    name: 'MealShare',
    description: 'Local home cooks offering meal plans and hot meal drop-offs.',
    category: 'Food Services',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Busy families and professionals',
    provider: 'Home cooks, small caterers',
    features: 'Menus, dietary filters, weekly subscriptions, delivery scheduling, ratings'
  },
  {
    name: 'MicroCourse',
    description: 'Short, local micro-courses and workshops (1–4 sessions).',
    category: 'Education',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Lifelong learners and professionals',
    provider: 'Instructors, subject-matter experts',
    features: 'Cohort signups, bite-sized lessons, certificates, resource uploads, reviews'
  },
  {
    name: 'PetTaxi',
    description: 'Safe pet transport to vets, groomers, or day care.',
    category: 'Pet Services',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Pet owners without transport',
    provider: 'Insured pet drivers & professional sitters',
    features: 'GPS tracking, pet profiles & medical notes, secure handoff, scheduling, ratings'
  },
  {
    name: 'StudioShare',
    description: 'Hourly booking for studios, maker spaces, and rehearsal rooms.',
    category: 'Creative Spaces',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Artists, makers, bands',
    provider: 'Studios, community centers, private owners',
    features: 'Slot booking, equipment lists, insurance add-ons, image galleries, reviews'
  },
  {
    name: 'WellnessLocal',
    description: 'Connects users with local wellness coaches: nutritionists, therapists, fitness coaches.',
    category: 'Health & Wellness',
    status: 'AVAILABLE',
    team_name: null,
    customer: 'Individuals seeking holistic care',
    provider: 'Certified coaches & practitioners',
    features: 'Intake forms, session scheduling, tele-sessions, progress tracking, secure messaging'
  }
];

async function main() {
  const client = await pool.connect();
  try {
    for (const idea of ideas) {
      const res = await client.query(
        `INSERT INTO ideas (name, description, category, status, team_name, customer, provider, features)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
         ON CONFLICT (name) DO NOTHING RETURNING id`,
        [
          idea.name,
          idea.description,
          idea.category,
          idea.status,
          idea.team_name,
          idea.customer,
          idea.provider,
          idea.features,
        ]
      );

      if (res.rows && res.rows.length) {
        console.log(`Inserted idea: ${idea.name} (id=${res.rows[0].id})`);
      } else {
        console.log(`Skipped (already exists): ${idea.name}`);
      }
    }
  } catch (err) {
    console.error('Error inserting ideas:', err);
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
