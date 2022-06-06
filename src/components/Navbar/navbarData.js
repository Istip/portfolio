// Array of icons to render
export const icons = [
  { name: 'facebook', route: 'https://facebook.com/pasztor.isti/' },
  { name: 'instagram', route: 'https://instagram.com/pasztor.isti/' },
  { name: 'github', route: 'https://github.com/Istip/' },
];

// Array of buttons to render
export const buttons = [
  {
    text: 'about',
    margin: '0 10px',
    onClick: () => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    },
  },
  {
    text: 'work',
    margin: '0 10px 0 0',
    onClick: () => {
      document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
    },
  },
  {
    text: 'contact',
    variant: 'secondary',
    onClick: () => {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    },
  },
];
