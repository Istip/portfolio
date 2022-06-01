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
    text: 'facebook',
    route: 'https://facebook.com/pasztor.isti/',
  },
  {
    text: 'instagram',
    route: 'https://instagram.com/pasztor.isti/',
  },
  {
    text: 'github',
    route: 'https://github.com/Istip/',
  },
];
