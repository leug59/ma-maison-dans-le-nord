const SPAM_KEYWORDS = [
  "casino",
  "viagra",
  "cialis",
  "bitcoin",
  "cryptocurrency",
  " nft ",
  "seo service",
  "seo services",
  "backlink",
  "forex trading",
  "investment opportunity",
  "make money fast",
  "earn money online",
  "weight loss pill",
  "diet pill",
  "payday loan",
  "xxx",
  " porn",
  "escort service",
  "adult content",
  "whatsapp +",
  "telegram +",
  "click here now",
  "buy followers",
  "buy traffic",
];

const URL_RE = /https?:\/\/\S+/gi;

export function isSpam(text: string): boolean {
  const lower = text.toLowerCase();
  if (SPAM_KEYWORDS.some((kw) => lower.includes(kw))) return true;
  const urlMatches = text.match(URL_RE) ?? [];
  if (urlMatches.length > 3) return true;
  return false;
}
