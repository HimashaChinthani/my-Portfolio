// Simple test script to POST to /api/send on local Next dev server
// Usage: node scripts/test-send.js

const url = process.env.URL || 'http://localhost:3000/api/send';

const payload = {
  email: process.env.TO_EMAIL || 'test@example.com',
  subject: 'Test email from local script',
  message: 'Hello — this is a test message.'
};

async function run() {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log('HTTP', res.status, res.statusText);
    try {
      const json = JSON.parse(text);
      console.log('Response JSON:', JSON.stringify(json, null, 2));
    } catch (e) {
      console.log('Response text:', text);
    }
  } catch (err) {
    console.error('Request failed:', err);
  }
}

run();
