import EventDetailClient from './EventDetailClient';

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];
}

interface PageProps {
    params: {
        id: string;
    };
}

export default function EventDetailPage({ params }: PageProps) {
    return <EventDetailClient eventId={params.id} />;
}