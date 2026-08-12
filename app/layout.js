import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Summer 2026 Service Provider Wiki",
  description: "Documentation and demos for the Service Provider Platform summer class project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-gray-300 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-lg font-semibold text-gray-900 tracking-tight">
                SERVICE PROVIDER
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/overview" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Overview
                </Link>
                <Link href="/users" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  User Roles
                </Link>
                <Link href="/demos" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Demos
                </Link>
                <Link
                  href="/ideas" className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Ideas
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}</body>
    </html>
  );
}
