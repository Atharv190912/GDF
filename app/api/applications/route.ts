import { NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const allotted = searchParams.get('allotted');

    await initDb();

    if (allotted === 'true') {
      const rows = await query("SELECT * FROM applications WHERE status = 'accepted' AND type = 'delegate'") as any[];
      const apps = rows.map(r => ({ ...JSON.parse(r.data), id: r.app_id, status: r.status, type: r.type }));
      return NextResponse.json(apps);
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  } catch (err) {
    console.error('Database Error:', err);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await initDb();
    
    const appId = (body.type === 'delegate' ? 'DEL' : body.type === 'chair' ? 'CHA' : 'TEM') + Date.now().toString().slice(-6);
    
    // We store the whole body as JSON in the 'data' column, but extract some for easy sorting/filtering
    const sql = "INSERT INTO applications (app_id, type, name, email, data) VALUES (?, ?, ?, ?, ?)";
    await query(sql, [appId, body.type, body.name, body.email, JSON.stringify(body)]);

    return NextResponse.json({ success: true, id: appId });
  } catch (err) {
    console.error('Database Error:', err);
    return NextResponse.json({ error: 'Failed to save application' }, { status: 500 });
  }
}

