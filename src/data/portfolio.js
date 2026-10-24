// All of your personal content lives here.
// Components read from this file, so you can change the site without touching JSX.

export const profile = {
  name: 'Neeraj Kulkarni',
  role: 'Fullstack Engineer',
  tagline: 'Blah blah blah blah, blah blah blah blah blah blah blah.',
  location: 'Hierroshield',
  email: 'blah@example.com',
  avatar: '/avatar.svg',
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  ],
}

export const about = [
  'Blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah.',
  'Blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah.',
  'Blah blah blah blah blah blah blah blah blah blah blah.',
]

export const skills = [
  { category: 'category 1 ', items: ['Blah', 'Blah blah', 'Blah', 'Blah blah'] },
  { category: 'Blah', items: ['Blah', 'Blah blah', 'Blah', 'Blah blah'] },
  { category: 'Blah blah', items: ['Blah blah', 'Blah', 'Blah blah blah'] },
  { category: 'Blah blah blah', items: ['Blah', 'Blah blah'] },
]

// `wire` is the colour of the jumper wire down the side of each project card:
// 'red', 'blue', 'green' or 'yellow' (see `wireClasses` in ProjectCard.jsx).
export const projects = [
  {
    id: 1,
    title: 'Blah blah',
    description: 'Blah blah blah blah blah blah blah blah blah blah blah.',
    image: '/projects/blah-1.svg',
    tags: ['Blah', 'Blah blah'],
    wire: 'red',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 2,
    title: 'Blah blah blah',
    description: 'Blah blah blah blah blah, blah blah blah blah blah blah blah blah.',
    image: '/projects/blah-2.svg',
    tags: ['Blah'],
    wire: 'blue',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 3,
    title: 'Blah',
    description: 'Blah blah blah blah blah blah blah blah blah blah blah blah.',
    image: '/projects/blah-3.svg',
    tags: ['Blah blah', 'Blah blah blah'],
    wire: 'green',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/',
  },
  {
    id: 4,
    title: 'Blah blah',
    description: 'Blah blah blah blah blah blah blah.',
    image: '/projects/blah-4.svg',
    tags: ['Blah'],
    wire: 'yellow',
    liveUrl: '',
    codeUrl: 'https://github.com/',
  },
]
