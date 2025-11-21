import LabPage from '@/components/pages/LabPage';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Lab — Technical Missions'
};

export default function Page() {
  return <LabPage projects={projects} />;
}
