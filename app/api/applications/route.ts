import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const allotted = searchParams.get('allotted');

    // Email-only mode: No database, no local files, so no portfolios are pre-allotted.
    if (allotted === 'true') {
      return NextResponse.json([]);
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  } catch (err) {
    console.error('Applications GET Error:', err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Generate a temporary unique Application ID so the frontend can display it in the success screen.
    const prefix = body.type === 'delegate' ? 'DEL' : body.type === 'chair' ? 'CHA' : 'TEM';
    const appId = prefix + Date.now().toString().slice(-6);

    // In Email-only mode, applications are not saved to any database/file on the server.
    // They are processed and sent directly via EmailJS on the client side.
    return NextResponse.json({ success: true, id: appId });
  } catch (err) {
    console.error('Applications POST Error:', err);
    return NextResponse.json({ error: 'Failed to process application' }, { status: 500 });
  }
}
