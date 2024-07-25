import Head from 'next/head';
import Gallery from '@/app/components/Gallery';

export default function Home() {
  console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('Supabase ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
        <Gallery />
      </main>
    </div>
  );
}
