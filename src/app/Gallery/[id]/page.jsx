import { supabase } from '@/app/lib/supabaseClient';
import { notFound } from 'next/navigation'; // For handling 404s
import { use } from 'react';
import Footer from '@/app/components/footer'

// Fetch data function
async function fetchImageData(id) {
  const decodedId = decodeURIComponent(id);
  const { data, error } = await supabase.storage.from('CGC-Wargaming').getPublicUrl(decodedId);

  if (error) {
    console.error('Error fetching image data: ', error);
    return null;
  }

  return {
    name: decodedId,
    url: data.publicUrl,
  };
}

// Server Component
export default async function ImagePage({ params }) {
  const image = await fetchImageData(params.id);

  if (!image) {
    // Handle the case where the image data could not be found
    notFound(); // This will render the 404 page
  }

  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{image.name}</h1>
      <div className="flex justify-center">
        <img src={image.url} alt={image.name} className="max-w-full rounded-lg shadow-lg" />
      </div>

      
    </div>
    <Footer />
    </>
  );
}


  