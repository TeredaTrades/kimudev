// Single source of truth for internal links and site-wide contact details.
// Every href in this project should go through withBase() rather than
// being written as a raw string — that's what makes the eventual domain
// swap (see DOMAIN_SWAP.md) a config-only change instead of a find/replace
// across every page.

/**
 * Prefixes an internal path with the configured base (see astro.config.mjs).
 * Absolute URLs (other domains, e.g. our other GitHub Pages sites or
 * custom domains) pass through unchanged — only same-site paths need the
 * base prefix.
 */
export function withBase(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL; // e.g. "/kimudev/" or "/"
  const clean = path.replace(/^\/+/, '');
  return clean ? `${base}${clean}` : base;
}

// No confirmed domain yet (kimudev.io is a target, not a lock), so there's
// no real inbox to point to. Telegram is the one channel the team behind
// this already actually uses and checks — swap this for a real KimuDev
// email once a domain is settled and an inbox exists.
export const CONTACT_LINK = 'https://t.me/TeredaTrades';
export const CONTACT_LABEL = 'Message us on Telegram';

export const NAV_LINKS = [
  { label: 'Work', href: 'work/' },
  { label: 'Services', href: 'services/' },
  { label: 'About', href: 'about/' },
  { label: 'Contact', href: 'contact/' },
];
