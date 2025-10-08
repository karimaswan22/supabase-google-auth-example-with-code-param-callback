# Supabase Google Auth Example with PKCE Flow

**PKCE Flow with Express.js, EJS templates, and Google OAuth 2.0**

This project is available on GitHub: [supabase-google-auth-example-with-code-param-callback](https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback). It demonstrates how to implement Google OAuth 2.0 securely in a Node.js application using **Supabase** and the PKCE (Proof Key for Code Exchange) flow. Unlike the default implicit flow, this approach allows your server to handle access tokens securely.

---

## Project Overview

The [supabase-google-auth-example-with-code-param-callback](https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback) project is designed to:

- Enable users to **log in with Google**.
- Use the **PKCE flow** for secure code exchange on the server.
- Store session data in **HTTP-only cookies** for security.
- Provide a simple UI built with **EJS templates**.
- Support logout functionality.
- Require minimal setup without database logic.

This makes it ideal for developers who want a simple, secure Google OAuth implementation with Supabase.

---

## Project Structure

The repository structure is straightforward:

supabase-google-auth-example-with-code-param-callback/
├── index.js # Main server file
├── views/
│ └── index.ejs # Homepage view
├── public/ # Optional static assets
├── .env # Environment variables
└── README.md # Project documentation

yaml
Copy code

You can view the full repository here: [supabase-google-auth-example-with-code-param-callback](https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback).

---

## Requirements

Before running this project, ensure you have:

- **Node.js v16 or higher**
- A **Supabase project** with Google OAuth enabled
- Basic knowledge of **running a Node.js server locally**

All of these steps are explained in the [supabase-google-auth-example-with-code-param-callback](https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback) repository.

---

## Environment Variables

Create a `.env` file in the root folder of [supabase-google-auth-example-with-code-param-callback](https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback) with the following content:

SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_ANON_KEY=your-anon-key
REDIRECT_URL=http://localhost:3000/auth/callback
PORT=3000

yaml
Copy code

**Explanation:**

- **SUPABASE_URL:** Your Supabase project URL (found in the dashboard)
- **SUPABASE_ANON_KEY:** Your project’s public anonymous key
- **REDIRECT_URL:** Must match the OAuth redirect URL configured in Supabase Auth
- **PORT:** Local server port (default 3000)

---

## Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/karimaswan22/supabase-google-auth-example-with-code-param-callback.git
Install dependencies:

bash
Copy code
npm install express ejs cookie-parser @supabase/supabase-js dotenv
Start the server:

bash
Copy code
node index.js
Open your browser:

arduino
Copy code
http://localhost:3000
You can find all setup instructions in supabase-google-auth-example-with-code-param-callback.

How It Works
User clicks "Login with Google".

Browser is redirected to Google’s OAuth login page.

After login, Google redirects back to REDIRECT_URL with a ?code=... parameter.

The server exchanges this code for an access token using Supabase.

Session information is stored in HTTP-only cookies for secure access.

This flow is fully implemented in supabase-google-auth-example-with-code-param-callback.

Key Features
Secure authentication using Google OAuth with PKCE flow

Sessions stored in HTTP-only cookies

Simple, clean UI using EJS templates

Supports logging out users

Quick local setup with no database configuration needed

For a full demo and source code, visit supabase-google-auth-example-with-code-param-callback.

Links
GitHub Repository: supabase-google-auth-example-with-code-param-callback

This documentation provides complete guidance for setting up and using Supabase Google Auth PKCE flow in Node.js.

yaml
Copy code

---

This version:  

- Is **all in one Markdown file**.  
- Mentions your GitHub repo **multiple times naturally**.  
- Fully detailed for **setup, usage, environment, and features**.  
- Perfect for **GitHub Pages, SEO, or documentation websites**.  

---

If you want, I can **also add badges, table of contents, and optional images/screenshots** so it looks like a professional README ready for Google indexing.  

Do you want me to do that next?
