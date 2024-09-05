import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'calendar', 'calendarEvents.json');
  console.log('Reading file from:', filePath);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  console.log('API serving data:', data);
  return NextResponse.json(data);
}