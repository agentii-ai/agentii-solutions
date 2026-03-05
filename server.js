import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'private-data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'demo-requests.json');

async function ensureDataDirectory() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function loadSubmissions() {
  try {
    const data = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubmissions(submissions) {
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');
}

// API endpoint to save demo request
app.post('/api/demo-request', async (req, res) => {
  try {
    const { firstName, lastName, jobTitle, company, email, country, interests } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !jobTitle || !company || !email || !country) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Load existing submissions
    const submissions = await loadSubmissions();

    // Create new submission with timestamp
    const newSubmission = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      jobTitle,
      company,
      email,
      country,
      interests: interests || '',
    };

    // Add to submissions array
    submissions.push(newSubmission);

    // Save to file
    await saveSubmissions(submissions);

    console.log(`✅ New demo request saved: ${firstName} ${lastName} (${company})`);

    res.json({
      success: true,
      message: 'Demo request submitted successfully',
      id: newSubmission.id
    });
  } catch (error) {
    console.error('Error saving demo request:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save demo request'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
async function startServer() {
  await ensureDataDirectory();
  app.listen(PORT, () => {
    console.log(`🚀 API server running on http://localhost:${PORT}`);
    console.log(`📁 Submissions saved to: ${SUBMISSIONS_FILE}`);
  });
}

startServer();
