#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting agentii.Solutions development environment...${NC}"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo -e "${BLUE}Shutting down servers...${NC}"
    kill $API_PID $VITE_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Start API server in background
echo -e "${GREEN}[1/2] Starting API server on port 3001...${NC}"
node server.js &
API_PID=$!

# Wait a moment for API server to start
sleep 2

# Start Vite dev server in background
echo -e "${GREEN}[2/2] Starting Vite dev server on port 8080...${NC}"
npm run dev &
VITE_PID=$!

echo ""
echo -e "${GREEN}✓ Development environment ready!${NC}"
echo ""
echo "  Frontend: http://localhost:8080"
echo "  API:      http://localhost:3001"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Wait for both processes
wait
