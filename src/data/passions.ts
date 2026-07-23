export type PassionIcon = 'cup' | 'record' | 'car' | 'art' | 'people';

export interface Passion {
  /** Catalog tag shown in the index gutter, e.g. "P·01". */
  tag: string;
  title: string;
  note: string;
  icon: PassionIcon;
}

export const passions: Passion[] = [
  {
    tag: 'P·01',
    title: 'The perfect cup',
    note: 'Dialing in espresso until the shot pulls just right, then doing it all again the next morning.',
    icon: 'cup',
  },
  {
    tag: 'P·02',
    title: 'Records, spinning',
    note: 'There’s a ritual to dropping the needle that streaming has never once matched.',
    icon: 'record',
  },
  {
    tag: 'P·03',
    title: 'The ’04 WRX STi',
    note: 'A 2004 Subaru WRX STi and an ever-growing list of mods. The garage is where I do some of my best work.',
    icon: 'car',
  },
  {
    tag: 'P·04',
    title: 'Multi-media pieces',
    note: 'Layering photography, type, and found textures into work that refuses to sit in a single medium.',
    icon: 'art',
  },
  {
    tag: 'P·05',
    title: 'Showing up',
    note: 'The work I’m proudest of will never ship: being there, on purpose, for the people who matter.',
    icon: 'people',
  },
];

/** The four-slot "Currently" snapshot in the masthead. */
export const currently: { label: string; value: string }[] = [
  { label: 'In the cup', value: 'Espresso, chasing the shot' },
  { label: 'On the platter', value: 'Side A, needle down' },
  { label: 'In the garage', value: 'The STi, one more mod' },
  { label: 'On the bench', value: 'A new multimedia piece' },
];
