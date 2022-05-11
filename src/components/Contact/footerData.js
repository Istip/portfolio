export const buttons = [
  {
    text: 'about me section',
    onClick: () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    },
  },
  {
    text: 'check out my work',
    onClick: () => {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    },
  },
];

export const links = [
  {
    text: 'instagram',
    route: 'https://www.google.com/',
  },
  {
    text: 'facebook',
    route: 'https://www.google.com/',
  },
  {
    text: 'github',
    route: 'https://www.google.com/',
  },
];
