export type StudioWork = {
  id: string;
  title: string;
  image: string;
  link: string;
  video?: string;
};

export const studioWorks: StudioWork[] = [
  {
    id: 'w1',
    title: 'Sports Highlights',
    image: '/UIUX/Sportify/Sportify%20main.jpg',
    link: '/studio/sports-highlights'
  },
  {
    id: 'w2',
    title: 'Academy Management',
    image: '',
    link: '/studio/academy-management',
    video: '/Academymanagement.mov'
  },
  {
    id: 'w3',
    title: 'Book App',
    image: '',
    link: '/studio/book-app',
    video: '/bookapp.mov'
  }
];

// Swap these placeholders with your best-of visuals and add image paths after uploading to /public.
