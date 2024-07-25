import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

  if (error) {
    console.error('Error fetching image paths: ', error);
    return { paths: [], fallback: true };
  }

  const paths = data.map((image) => ({
    params: { id: encodeURIComponent(image.name) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data, error } = await supabase.storage.from('CGC-Wargaming').getPublicUrl(params.id);

  if (error) {
    console.error('Error fetching image data: ', error);
    return {
      notFound: true,
    };
  }

  const image = {
    name: params.id,
    url: data.publicURL,
  };

  return {
    props: {
      image,
    },
    revalidate: 10, // Enable ISR (Incremental Static Regeneration)
  };
}

export default function ImagePage({ image }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{image.name}</h1>
      <div className="flex justify-center">
        <img src={image.url} alt={image.name} className="max-w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
