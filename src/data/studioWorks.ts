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
    image: '/UIUX/academy%20management/academy.png',
    link: '/studio/academy-management'
  },
  {
    id: 'w3',
    title: 'Book App',
    image: '/UIUX/book%20app/bookapp.png',
    link: '/studio/book-app'
  },
  {
    id: 'w4',
    title: 'Jobbiz',
    image: '/UIUX/jobbiz/jobbiz.png',
    link: '/UIUX/jobbiz/jobbiz.png'
  },
  {
    id: 'w5',
    title: 'Move On',
    image: '/UIUX/move%20on/Moveon.png',
    link: '/UIUX/move%20on/Moveon.png'
  },
  {
    id: 'w6',
    title: 'Plan My Trip',
    image: '/UIUX/plan%20my%20trip/planmytrip.png',
    link: '/UIUX/plan%20my%20trip/planmytrip.png'
  }
];

// Swap these placeholders with your best-of visuals and add image paths after uploading to /public.
