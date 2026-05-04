export async function verifyTurnstileToken(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Not configured — skip verification
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error("[turnstile] Verification error:", err);
    // On network error, let the request through to avoid blocking legit users
    return true;
  }
}
