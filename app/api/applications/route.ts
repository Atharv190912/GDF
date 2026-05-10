import { NextResponse } from 'next/server';
import { query, initDb } from '@/lib/db';

const ADM_USER = 'GDF@Atharv';
const ADM_PASS = 'NASA@412919';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user = searchParams.get('user');
  const pass = searchParams.get('pass');
  const allotted = searchParams.get('allotted');

  await initDb();

  if (allotted === 'true') {
    const rows = await query("SELECT * FROM applications WHERE status = 'accepted' AND type = 'delegate'") as any[];
    const apps = rows.map(r => ({ ...JSON.parse(r.data), id: r.app_id, status: r.status, type: r.type }));
    return NextResponse.json(apps);
  }

  if (user !== ADM_USER || pass !== ADM_PASS) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rows = await query("SELECT * FROM applications ORDER BY created_at DESC") as any[];
  const apps = rows.map(r => ({ ...JSON.parse(r.data), id: r.app_id, status: r.status, type: r.type, timestamp: r.created_at }));
  return NextResponse.json(apps);
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

export async function PATCH(request: Request) {
  const body = await request.json();
  const { id, status, user, pass } = body;

  if (user !== ADM_USER || pass !== ADM_PASS) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await initDb();
  await query("UPDATE applications SET status = ? WHERE app_id = ?", [status, id]);
  
  return NextResponse.json({ success: true });
}
