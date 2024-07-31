'use client'

import { supabase } from '@/app/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Footer from '@/app/components/Footer';
import { useState, useEffect } from 'react';

// Function to fetch related images by matching the base name
async function fetchRelatedImages(baseName) {
  const { data, error } = await supabase.storage.from('CGC-Wargaming').list('');

  if (error) {
    console.error('Error fetching related images: ', error);
    return [];
  }

  // Filter images based on a naming convention (e.g., image1_angle1.jpg)
  return data.filter((item) => item.name.startsWith(baseName));
}

export default function ImagePage({ params }) {
  const [relatedImages, setRelatedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImageData = async () => {
      const imageBaseName = params.id.split('.')[0]; // Get the base name without extension
      const imageData = await fetchRelatedImages(imageBaseName);

      if (imageData.length === 0) {
        notFound();
        return;
      }

      // Set the first image as the selected image initially
      const firstImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${imageData[0].name}`;
      setSelectedImage(firstImageUrl);
      setRelatedImages(imageData);
    };

    loadImageData();
  }, [params.id]);

  if (relatedImages.length === 0) {
    return null; // Handle loading state or error here
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-White">{params.id}</h1>
        <div className="flex justify-center mb-4 mt-20">
          <img src={selectedImage} alt={params.id} className="max-w-full rounded-lg shadow-lg w-1/3 h-1/3" />
        </div>
        <div className="flex justify-center gap-4">
          {relatedImages.map((image) => (
            <img
              key={image.name}
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`}
              alt={image.name}
              className="cursor-pointer w-24 h-24 object-cover border-2 border-solid rounded-lg"
              onClick={() => setSelectedImage(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/${image.name}`)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}









// 'use client';
// import { supabase } from '@/app/lib/supabaseClient';
// import { notFound } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import Footer from '@/app/components/footer';

// export default function ImagePage({ params }) {
//   const [imageData, setImageData] = useState(null);
//   const [currentImage, setCurrentImage] = useState(null);

//   useEffect(() => {
//     async function getImageData() {
//       const data = await fetchImageData(params.id);
//       if (data) {
//         setImageData(data);
//         setCurrentImage(data.images.find(img => img.type === 'main').url); // Set main image initially
//       } else {
//         notFound(); // Handle not found
//       }
//     }
//     getImageData();
//   }, [params.id]);

//   if (!imageData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">{imageData.id}</h1>
//         <div className="flex justify-center">
//           <img src={currentImage} alt={imageData.id} className="max-w-full rounded-lg shadow-lg" />
//         </div>

//         <div className="mt-4 flex justify-center space-x-2">
//           {imageData.images.map((img, index) => (
//             <img
//               key={index}
//               src={img.url}
//               alt={`View ${index + 1}`}
//               className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500"
//               onClick={() => setCurrentImage(img.url)}
//             />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }




// Uden 3D

// import { supabase } from '@/app/lib/supabaseClient';
// import { notFound } from 'next/navigation'; // For handling 404s
// import { use } from 'react';
// import Footer from '@/app/components/footer'

// // Fetch data function
// async function fetchImageData(id) {
//   const decodedId = decodeURIComponent(id);
//   const { data, error } = await supabase.storage.from('CGC-Wargaming').getPublicUrl(decodedId);

//   if (error) {
//     console.error('Error fetching image data: ', error);
//     return null;
//   }

//   return {
//     name: decodedId,
//     url: data.publicUrl,
//   };
// }

// // Server Component
// export default async function ImagePage({ params }) {
//   const image = await fetchImageData(params.id);

//   if (!image) {
//     // Handle the case where the image data could not be found
//     notFound(); // This will render the 404 page
//   }

//   return (
//     <>
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">{image.name}</h1>
//       <div className="flex justify-center">
//         <img src={image.url} alt={image.name} className="max-w-full rounded-lg shadow-lg" />
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// }


// import { supabase } from '@/app/lib/supabaseClient';
// import { notFound } from 'next/navigation'; // For handling 404s
// import Footer from '@/app/components/footer';
// import ModelViewer from '@/app/components/ModelViewer';

// // Fetch data function
// async function fetchImageData(id) {
//   const decodedId = decodeURIComponent(id);
//   const { data, error } = await supabase.storage.from('CGC-Wargaming').getPublicUrl(decodedId);

//   if (error) {
//     console.error('Error fetching image data: ', error);
//     return null;
//   }

//   return {
//     name: decodedId,
//     url: data.publicUrl,
//   };
// }

// // Server Component
// export default async function ImagePage({ params }) {
//   const image = await fetchImageData(params.id);

//   if (!image) {
//     // Handle the case where the image data could not be found
//     notFound(); // This will render the 404 page
//   }

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">{image.name}</h1>
//         <div className="flex justify-center">
//           <ModelViewer url={image.url} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }










  