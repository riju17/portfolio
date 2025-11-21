import { notFound } from 'next/navigation';
import ClientDetailPage from '@/components/pages/ClientDetailPage';
import { clients } from '@/data/clients';

type Props = {
  params: { clientSlug: string };
};

export async function generateStaticParams() {
  return clients.map((client) => ({ clientSlug: client.slug }));
}

export function generateMetadata({ params }: Props) {
  const client = clients.find((c) => c.slug === params.clientSlug);
  return {
    title: client ? `${client.name} — Studio Case` : 'Studio Case'
  };
}

export default function Page({ params }: Props) {
  const client = clients.find((item) => item.slug === params.clientSlug);
  if (!client) return notFound();
  return <ClientDetailPage client={client} />;
}
