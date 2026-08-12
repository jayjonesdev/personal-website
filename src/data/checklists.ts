/**
 * Field-card checklists that can be attached to a Field Note via the post's
 * `checklist:` frontmatter key (see src/content.config.ts).
 *
 * Inline markup in `check` / `sub` / `note` / caution text:
 *   *emphasis*  → bold, full-ink
 *   {HOT}       → red HOT pill        (hot water line)
 *   {COLD}      → blue COLD pill      (cold water line)
 *   {anything}  → neutral pill        (e.g. {EXT}, {H + C})
 *
 * A `tree` row is rendered as monospace ASCII art. Bracketed tokens like
 * [Menu] are tinted, lines containing ◄ read as "selected", and lines
 * containing "(skip)" are dimmed.
 */

export interface CheckRow {
  check: string;
  sub?: string;
}
export interface TreeRow {
  tree: string;
}
export interface NoteRow {
  note: string;
}
export type Row = CheckRow | TreeRow | NoteRow;

export interface Phase {
  num: string;
  title: string;
  /** Small right-aligned locator, e.g. "water heater". */
  where?: string;
  rows: Row[];
}

export interface Checklist {
  eyebrow: string;
  title: string;
  /** Second half of the title, set in muted type. */
  titleMuted?: string;
  chips?: { label: string; value: string }[];
  caution?: { title: string; items: string[] };
  phases: Phase[];
  refs?: string[];
  footnote?: string;
}

const recirculation: Checklist = {
  eyebrow: 'Field card · Recirculation setup',
  title: 'NaviCirc +',
  titleMuted: 'NPE-240A2',
  chips: [
    { label: 'Pump', value: 'internal' },
    { label: 'Mode', value: 'External recirc' },
    { label: 'Schedule', value: 'Intelligent' },
    { label: 'Valve kit', value: '30022965A' },
  ],
  caution: {
    title: 'Read first',
    items: [
      '*Power off* the unit before you remove the front cover.',
      '*Don’t touch the two front-panel DIP switches* — on the A2 they’re only gas type and temp-lock. Recirc is set in the menu, not there.',
      'Don’t run the pump until the loop is *fully purged* — trapped air can damage it.',
    ],
  },
  phases: [
    {
      num: '01',
      title: 'At the unit',
      where: 'water heater',
      rows: [
        {
          check: 'Power the unit off',
          sub: 'Use the power switch on the front panel.',
        },
        { check: 'Remove the front cover' },
        {
          check: 'Set internal 2-way valve → {EXT}',
          sub: 'On the waterway assembly inside. Exact location + position: manual *p.35*, the “External Recirc with NaviCirc — NPE-A2” figure.',
        },
        {
          check: 'Reinstall cover — leave power off for now',
          sub: 'You’ll power back on in Phase 04, after the purge.',
        },
      ],
    },
    {
      num: '02',
      title: 'Mount the NaviCirc',
      where: 'far bath sink',
      rows: [
        { check: 'Close both shutoff stops {HOT} {COLD}' },
        {
          check: 'Open both faucets to release pressure',
          sub: 'Required before disconnecting — trapped pressure can injure.',
        },
        {
          check: 'Mount NaviCirc *horizontally*, 3 anchor bolts',
          sub: 'Snug, not forced — over-tightening can crack the body.',
        },
        {
          check: 'Connect hoses: {HOT} → hot ports, {COLD} → cold ports',
          sub: '*No Teflon tape or sealant* on the NaviCirc’s male orifices — use hoses with rubber gaskets.',
        },
      ],
    },
    {
      num: '03',
      title: 'Air purge',
      where: 'protects the pump',
      rows: [
        { check: 'Close both faucets {H + C}' },
        { check: 'Open both shutoff valves {H + C}' },
        {
          check: 'Open both faucets {H + C}',
          sub: 'Water and air will rush out.',
        },
        {
          check: 'Leak-check every NaviCirc connection',
          sub: 'Any leak → close shutoffs, fix, then restart this phase.',
        },
        {
          check: 'Keep faucets open until the air is fully out',
          sub: 'Run until flow is smooth and steady — no spitting or sputtering. Give it a few minutes, longer than feels necessary.',
        },
        { check: 'Close both faucets' },
      ],
    },
    {
      num: '04',
      title: 'Program Intelligent',
      where: 'front panel',
      rows: [
        { check: 'Power the unit back on' },
        {
          tree: `[Menu] ─► Recirculation Setting ─► [OK]
   │
   ├─ No Recirculation
   ├─ External Recirculation ◄ SELECT
   │      └─► Mode:
   │            ├─ Always On
   │            ├─ Intelligent ◄ SELECT
   │            └─ Weekly (1 / 3 / 7 Day)
   ├─ Internal Recirculation
   └─ HotButton  (skip)`,
        },
        {
          check: 'Select *External Recirculation*',
          sub: 'Matches your NaviCirc plus the EXT valve position.',
        },
        { check: 'Set operating mode → *Intelligent*' },
        {
          check: 'Set the clock: *Menu → Configuration → Time*',
          sub: 'Intelligent learns by time of day, so an accurate clock matters. Confirm the exact sub-label on your screen — it lives under Configuration.',
        },
        {
          note: '*How Intelligent works:* it watches your hot-water demand over a 7-day cycle, then recirculates the next week to match. Give it a full week to dial in — the first few days it’s still learning. Prefer to set it yourself? Choose *Weekly* and program 1 / 3 / 7-day windows instead.',
        },
      ],
    },
    {
      num: '05',
      title: 'Verify',
      where: 'far bath',
      rows: [
        { check: 'Draw hot at the far bathroom — confirm it arrives fast' },
        {
          check: 'Confirm the NaviCirc closes at temp (~95°F)',
          sub: 'A small click or tick at cutoff is normal — that’s the thermostatic shutoff working.',
        },
        {
          check: 'Check that nearby fixtures (shower, kitchen) prime too',
          sub: 'Everything on the hot run before the valve should now come up fast.',
        },
      ],
    },
  ],
  refs: [
    '2-way valve location → 240A2 manual p.35 (Ext Recirc w/ NaviCirc)',
    'Purge → NaviCirc install manual §2.2.2',
  ],
  footnote:
    'Expect lukewarm water at the far cold tap right after recirc runs — normal for a crossover loop. Clears once you run the tap.',
};

export const checklists: Record<string, Checklist> = { recirculation };
