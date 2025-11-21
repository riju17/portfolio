import StudioPage from '@/components/pages/StudioPage';
import { clients } from '@/data/clients';
import { studioWorks } from '@/data/studioWorks';

export const metadata = {
  title: 'Studio — Branding & UI'
};

export default function Page() {
  return <StudioPage clients={clients} works={studioWorks} />;
}
