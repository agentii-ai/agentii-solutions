# Demo Request System

This project includes a simple local API server to capture demo request form submissions.

## How It Works

1. **Frontend Form**: The `/request-demo` page contains a validated form built with React Hook Form and Zod
2. **Local API Server**: A Node.js Express server running on port 3001 receives form submissions
3. **File Storage**: Submissions are saved to `private-data/demo-requests.json` (gitignored)

## Running the System

### Development Mode

You need to run **two** processes:

**Terminal 1 - Frontend (Vite dev server):**
```bash
npm run dev
```
This starts the React app on http://localhost:8080

**Terminal 2 - Backend (API server):**
```bash
npm run server
```
This starts the API server on http://localhost:3001

### Testing the Form

1. Navigate to http://localhost:8080/request-demo
2. Fill out the form with valid data
3. Click "Request a Demo"
4. Check `private-data/demo-requests.json` to see the saved submission

## API Endpoints

### POST `/api/demo-request`
Saves a demo request submission.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "jobTitle": "VP of Engineering",
  "company": "Acme Corp",
  "email": "john.doe@acme.com",
  "country": "United States",
  "interests": "Document processing for financial statements"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully",
  "id": "1709612224901"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-03-05T04:37:04.901Z"
}
```

## Data Storage

Submissions are stored in `private-data/demo-requests.json`:

```json
[
  {
    "id": "1709612224901",
    "timestamp": "2026-03-05T04:37:04.901Z",
    "firstName": "John",
    "lastName": "Doe",
    "jobTitle": "VP of Engineering",
    "company": "Acme Corp",
    "email": "john.doe@acme.com",
    "country": "United States",
    "interests": "Document processing for financial statements"
  }
]
```

## Security Notes

- The `private-data/` directory is gitignored and will never be committed
- This is a **local development solution** only
- For production, replace with a proper backend (database, authentication, etc.)
- CORS is enabled for localhost:8080 only

## Production Deployment

This local file-based solution is **not suitable for production**. For production deployment:

1. Replace the Express server with a proper backend (Supabase, Firebase, custom API)
2. Use a database instead of JSON file storage
3. Add authentication and rate limiting
4. Implement email notifications
5. Add CAPTCHA to prevent spam
6. Use environment variables for configuration
