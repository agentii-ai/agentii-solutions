import { put } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, jobTitle, company, email, country, interests } = req.body;

    if (!firstName || !lastName || !jobTitle || !company || !email || !country) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const id = Date.now().toString();
    const submission = {
      id,
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      jobTitle,
      company,
      email,
      country,
      interests: interests || '',
    };

    // Each submission is its own blob — no read-modify-write, no race conditions
    await put(`demo-requests/${id}.json`, JSON.stringify(submission, null, 2), {
      access: 'public', // Required by Vercel Blob — the URL is unguessable (contains random token)
      addRandomSuffix: false,
    });

    return res.status(200).json({
      success: true,
      message: 'Demo request submitted successfully',
      id,
    });
  } catch (error) {
    console.error('Error saving demo request:', error);
    return res.status(500).json({ success: false, message: 'Failed to save demo request' });
  }
}
