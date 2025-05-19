# AssayBridge: ddPCR Data Management and Analysis Platform

AssayBridge is a full-stack web application designed to streamline the process of uploading, managing, viewing, and summarizing ddPCR (Droplet Digital PCR) data. It features a React frontend, a Fastify/Node.js backend, a PostgreSQL database managed with Prisma, and integrates with OpenAI for automated data summarization.

## Features

*   **CSV Data Upload:** Easily upload ddPCR raw data via a user-friendly interface.
*   **Batch Management:** Organizes ddPCR runs into batches for better tracking.
*   **Data Visualization:** View ddPCR run details in tabular format and a bar chart for copies/µl.
*   **AI-Powered Summarization:** Generate concise summaries of batch data using OpenAI's GPT models.
*   **GraphQL API:** Robust API for querying batch and ddPCR run data.
*   **Modern Tech Stack:** Built with React, TypeScript, Fastify, Prisma, PostgreSQL, and Tailwind CSS.

## Tech Stack

**Frontend:**
*   React 19
*   TypeScript
*   Vite (Assumed, common for modern React projects)
*   Apollo Client (for GraphQL)
*   React Router DOM (for navigation)
*   Tailwind CSS (for styling)
*   Recharts (for charts)

**Backend:**
*   Node.js
*   Fastify (Web framework)
*   TypeScript
*   Prisma (ORM for PostgreSQL)
*   PostgreSQL (Database)
*   Apollo Server (for GraphQL API)
*   OpenAI API (for summarization)
*   `@fastify/cors`, `@fastify/multipart`

## Prerequisites

*   Node.js (v18.x or v20.x recommended)
*   npm or yarn
*   PostgreSQL server running and accessible
*   An OpenAI API Key

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd AssayBridge
    ```

2.  **Backend Setup:**
    *   Navigate to the backend directory:
        ```bash
        cd backend
        ```
    *   Install dependencies:
        ```bash
        npm install
        # or
        # yarn install
        ```
    *   Create a `.env` file in the `backend` directory by copying `.env.example` (if you create one) or by adding the following variables:
        ```env
        DATABASE_URL="postgresql://YOUR_DB_USER:YOUR_DB_PASSWORD@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME?schema=public"
        OPENAI_API_KEY="sk-YourOpenAISecretKey"
        ```
        Replace the placeholders with your actual PostgreSQL connection string and OpenAI API key.
    *   Apply database migrations:
        ```bash
        npx prisma migrate dev
        ```
    *   Generate Prisma Client:
        ```bash
        npx prisma generate
        ```

3.  **Frontend Setup:**
    *   Navigate to the frontend directory (from the project root):
        ```bash
        cd ../frontend 
        # or if you are in backend, cd ../frontend
        ```
    *   Install dependencies:
        ```bash
        npm install
        # or
        # yarn install
        ```
        *(Note: You might encounter peer dependency conflicts with React 19. If so, you may need to use `npm install --force` or `npm install --legacy-peer-deps` for some packages as we discussed.)*

## Running the Application

1.  **Start the Backend Server:**
    *   In the `backend` directory:
        ```bash
        npm run build
        npm run start
        # Or for development with auto-reload (if you set up nodemon/ts-node-dev for build):
        # npm run dev 
        ```
        The backend server will typically run on `http://localhost:3000`.

2.  **Start the Frontend Development Server:**
    *   In the `frontend` directory:
        ```bash
        npm run dev
        # or
        # yarn dev
        ```
        The frontend application will typically be accessible at `http://localhost:5173` (Vite's default) or another port specified by your frontend setup.

## Key Environment Variables

**Backend (`backend/.env`):**

*   `DATABASE_URL`: Your PostgreSQL connection string.
    *   Example: `postgresql://user:password@localhost:5432/assaybridge?schema=public`
*   `OPENAI_API_KEY`: Your secret API key from OpenAI for using their models.

## API Endpoints

*   **REST API (for ddPCR uploads):**
    *   `POST /upload/ddpcr?batch=<batchLabel>`: Uploads a ddPCR CSV file for the specified batch label. Expects multipart/form-data with a field named "file".
*   **GraphQL API:**
    *   Accessible at `http://localhost:3000/graphql`.
    *   Supports queries for `batch`, `batches` and mutations like `summariseBatch`.
    *   Refer to `backend/src/graphQL/schema.ts` for the full schema details.

## Using the Application

1.  Ensure both backend and frontend servers are running.
2.  Open your browser and navigate to the frontend URL (e.g., `http://localhost:5173`).
3.  Use the "Upload Data" link to upload your ddPCR CSV files, specifying a batch label.
4.  Navigate to "All Batches" to see a list of uploaded batches.
5.  Click on a batch to view its details, ddPCR runs, and generate an AI summary.

---

This README provides a good starting point. You can expand it with more details, screenshots, contribution guidelines, or deployment instructions as your project grows.