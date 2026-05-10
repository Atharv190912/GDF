import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'applications.json');

function ensureFile() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify([]));
  }
}

export async function GET(request: Request) {
  try {
    ensureFile();
    const { searchParams } = new URL(request.url);
    const user = searchParams.get('user');
    const pass = searchParams.get('pass');
    const allottedOnly = searchParams.get('allotted') === 'true';

    const data = fs.readFileSync(DATA_PATH, 'utf8');
    const apps = JSON.parse(data);

    if (allottedOnly) {
      return NextResponse.json(apps);
    }

    if (user !== 'GDF@Atharv' || pass !== 'NASA@412919') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json(apps);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    ensureFile();
    const newApp = await request.json();
    newApp.id = Date.now().toString();
    newApp.status = 'pending';
    newApp.timestamp = new Date().toISOString();

    const data = fs.readFileSync(DATA_PATH, 'utf8');
    const apps = JSON.parse(data);
    apps.push(newApp);

    fs.writeFileSync(DATA_PATH, JSON.stringify(apps, null, 2));
    return NextResponse.json({ success: true, id: newApp.id });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    ensureFile();
    const { id, status, user, pass } = await request.json();

    if (user !== 'GDF@Atharv' || pass !== 'NASA@412919') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = fs.readFileSync(DATA_PATH, 'utf8');
    let apps = JSON.parse(data);
    
    apps = apps.map((app: any) => {
      if (app.id === id) return { ...app, status };
      return app;
    });

    fs.writeFileSync(DATA_PATH, JSON.stringify(apps, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
