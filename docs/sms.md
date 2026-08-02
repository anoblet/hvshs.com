# SMS — Hudson Valley Smart Home Services

**Status:** Draft ready for review
**Send channel:** SMS (text message)
**Audience:** Homeowners in the Hudson Valley (Poughkeepsie, Kingston, New Paltz, Rhinebeck, Tarrytown)
**Character limit:** 160 characters per segment — messages below keep to one segment (or near it)

---

## Message Options

### Option 1 — Short intro (1 segment, 137 chars)

> Your Hudson Valley home, working smarter. We design, install & manage smart
> home systems locally. Free consultation: https://calendar.app.google/JjnLtVR6mnM11FcS9

### Option 2 — Local + service focus (1 segment, ~152 chars)

> From Poughkeepsie to Rhinebeck — local smart home design, install & support.
> Lighting, security, climate, entertainment. Book a free consult:
> https://calendar.app.google/JjnLtVR6mnM11FcS9

### Option 3 — Curiosity hook (1 segment, ~146 chars)

> What if your home handled the little things? Lights, locks & climate that just
> work — designed, installed & supported by a local team. Free consult:
> https://calendar.app.google/JjnLtVR6mnM11FcS9

### Option 4 — Opt-in confirmation (for consent flows, 1 segment, ~120 chars)

> You're subscribed to Hudson Valley Smart Home Services texts. Free consult:
> https://calendar.app.google/JjnLtVR6mnM11FcS9. Reply STOP to opt out.

---

## Recommended Sender Setup

- **Sending number:** Use the business line **(914) 417-9070** for a local,
  trustworthy sender identity.
- **Consent:** SMS requires prior opt-in (10DLC / TCPA compliance). Include an
  opt-in message (Option 4) and honor **STOP** replies immediately.
- **Timing:** Weekday late mornings (10:00 AM–12:00 PM) or early evenings
  (5:30–7:30 PM) — SMS is more interruptive than email, so avoid early mornings.
- **Frequency:** 1–2 messages per month maximum to keep unsubscribe rates low.
- **Short links:** The calendar link is already short; if custom links are
  needed, use a branded shortener with UTM tracking
  (e.g., `?utm_source=sms&utm_medium=sms&utm_campaign=launch`).
- **Fallback:** Always have a reply-to route — "Text us back" lets interested
  homeowners respond directly for a real conversation.

---

## Sending Notes

- **Plain text only:** No HTML, no emoji in critical positions (some carriers
  mangle them) — keep emoji optional and at the end.
- **Link placement:** Put the booking link last so it survives any carrier
  link-wrapping or preview truncation.
- **Character math:** 160 chars = 1 segment; over that splits into 2+ segments
  and can cost more per recipient. Options above stay within limits.
- **A/B test:** Test Option 1 (brand) vs Option 3 (curiosity) on a small split
  to see which drives more consultation bookings.
- **Compliance:** Include an opt-out path (STOP) and honor it, per TCPA/10DLC
  rules — promotional texts without prior consent can carry significant fines.
