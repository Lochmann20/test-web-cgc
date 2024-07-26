// Med 3D
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import Link from 'next/link';
import ModelViewer from '@/app/components/ModelViewer';

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

      if (error) {
        console.error('Error fetching images: ', error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {images.map((image) => (
        <Link href={`/Gallery/${encodeURIComponent(image.name)}`} key={image.name}>
          <div className="cursor-pointer border-2 border-solid rounded-xl p-2">
            <ModelViewer  url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`} />
          </div>
        </Link>
      ))}
    </div>
  );
}

// Uden 3D

// import Head from 'next/head';
// import Gallery from '@/app/components/Gallery';
// // import Footer from '@/app/components/Footer';

// export default function Home() {
//   console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
//   console.log('Supabase ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

//   return (
//     <div>
//       <main className="container mx-auto p-4">
//         {/* <h1 className="p-5">Gallery</h1> */}
//         <Gallery />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   );
// }
