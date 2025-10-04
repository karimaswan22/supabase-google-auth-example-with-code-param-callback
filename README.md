Supabase PKCE Auth Example (Express + EJS)
example of supabase with google auth

Unlike the default "implicit flow", which returns an **`#access_token` in the URL fragment** (not accessible to the server), the PKCE flow redirects back with a **`?code=...`** parameter.  
That code is then securely exchanged on the server for an access token and session.


🚀 Features

Login with Google (OAuth 2.0 + PKCE flow)

Session stored in HTTP-only cookies

Simple UI using EJS templates

Logout support

Minimal setup, no database logic

📂 Project Structure
.
├── index.js        # Main server
├── views
│   └── index.ejs   # Homepage view
├── public          # Static assets (optional)
├── .env            # Environment variables
└── README.md

⚙️ Requirements

Node.js v16+

Supabase project with Google OAuth enabled

🔑 Environment Variables (.env)

Create a .env file in the root folder:

SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_ANON_KEY=your-anon-key
REDIRECT_URL=http://localhost:3000/auth/callback
PORT=3000


SUPABASE_URL → Found in your Supabase dashboard.

SUPABASE_ANON_KEY → Your project’s public anon key.

REDIRECT_URL → Must match the OAuth redirect URL configured in Supabase Auth settings.

PORT → Local server port (default: 3000).

▶️ Run Locally

Install dependencies

npm install express ejs cookie-parser @supabase/supabase-js dotenv


Start the server

node index.js


Open in browser

http://localhost:3000


