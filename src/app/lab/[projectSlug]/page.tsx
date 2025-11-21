import { notFound } from 'next/navigation';
import ProjectDetailPage from '@/components/pages/ProjectDetailPage';
import { projects } from '@/data/projects';

type Props = {
  params: { projectSlug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ projectSlug: project.slug }));
}

export function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.projectSlug);
  return {
    title: project ? `${project.title} — Lab Mission` : 'Lab Mission'
  };
}

export default function Page({ params }: Props) {
  const project = projects.find((item) => item.slug === params.projectSlug);
  if (!project) return notFound();
  return <ProjectDetailPage project={project} />;
}
