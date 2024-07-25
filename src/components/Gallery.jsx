'use client'

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';


export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .storage
        .from('CGC-Wargaming')
        .list('');

      if (error) {
        console.error('Error fetching images: ', error);
      } else {
        setImages(data);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Link href={`/images/${image.name}`} key={image.name}>
            <img src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`} alt={image.name} />
        </Link>
      ))}
    </div>
  );
}



