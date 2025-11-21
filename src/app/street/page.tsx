import StreetPage from '@/components/pages/StreetPage';
import { photos } from '@/data/photos';

export const metadata = {
  title: 'Street — Photography Gallery'
};

export default function Page() {
  return <StreetPage photos={photos} />;
}
