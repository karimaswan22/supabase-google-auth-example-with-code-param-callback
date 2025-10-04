// index.js
const express = require('express');
const cookieParser = require('cookie-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// ---------------- Supabase ----------------
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
  auth: {
    flowType: 'pkce',
    detectSessionInUrl: true,
  },
});

// ---------------- Helpers ----------------
async function getUserFromCookie(req) {
  const token = req.cookies.session_token;
  if (!token) return null;

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return null;

  return data.user;
}

// ---------------- Routes ----------------

// Home (always available, shows login if not authenticated)
app.get('/', async (req, res) => {
  const user = await getUserFromCookie(req);
  res.render('index', { user });
});

// Login
app.get('/login', async (req, res) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: process.env.REDIRECT_URL },
  });

  if (error) return res.send('Error starting login: ' + error.message);
  res.redirect(data.url);
});

// OAuth Callback
app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  if (!code) return res.send('No code received');

  const { data: session, error } = await supabase.auth.exchangeCodeForSession(code);
  if (error || !session?.session) return res.send('Failed to exchange code: ' + (error?.message || 'Unknown'));

  // Save token in HTTP-only cookie
  res.cookie('session_token', session.session.access_token, {
    httpOnly: true,
    secure: false,  // ⚠️ true in production
    maxAge: session.session.expires_in * 1000,
    sameSite: 'lax',
  });

  res.redirect('/');
});

// Logout
app.get('/logout', (req, res) => {
  res.clearCookie('session_token');
  res.redirect('/');
});

// ---------------- Start Server ----------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
