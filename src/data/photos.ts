/**
 * Photography data powering the Street gallery.
 * Fill the `src` fields with your own images placed inside /public.
 */
export type Photo = {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  src: string;
  caption: string;
};

export const photos: Photo[] = [
  {
    id: 'p00',
    title: 'Sports Bash',
    category: 'Sports',
    location: 'Unknown',
    year: '2024',
    src: '/DSC01763.JPG',
    caption: 'Action frame from the Sports world — replace details as needed.'
  },
  {
    id: 'p01',
    title: 'Rain Delay',
    category: 'People',
    location: 'Tokyo',
    year: '2024',
    src: '',
    caption: 'Taxi driver waits for neon light change, rain slicing across glass.'
  },
  {
    id: 'p02',
    title: 'Glow Run',
    category: 'People',
    location: 'Seoul',
    year: '2023',
    src: '',
    caption: 'Night cyclists wearing LED jackets blur through the alley.'
  },
  {
    id: 'p03',
    title: 'Mirrored Dunes',
    category: 'Travel',
    location: 'Doha',
    year: '2022',
    src: '',
    caption: 'Glass pavilion slicing the desert horizon creating double suns.'
  },
  {
    id: 'p04',
    title: 'Court Lines',
    category: 'Sports',
    location: 'New York',
    year: '2021',
    src: '',
    caption: 'Hoop dreams meeting pastel apartment blocks, shot at noon.'
  },
  {
    id: 'p05',
    title: 'Night Bloom',
    category: 'Nature',
    location: 'Mexico City',
    year: '2024',
    src: '',
    caption: 'Cacti garden lit by portable holographic prism.'
  },
  {
    id: 'p06',
    title: 'Analog Choir',
    category: 'People',
    location: 'Lisbon',
    year: '2020',
    src: '',
    caption: 'Street musicians recorded into tape loops, layered in-camera.'
  }
];

// Continue expanding the gallery by editing this array.
