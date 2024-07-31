// uden 3D

import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="p-5 md:mt-10">
    <h2 className='text-cgc-logo text-9xl font-serif'>W<span className='uppercase text-8xl'>argaming</span></h2>
    <h3 className='text-cgc-tekst text-xl'>Har du brug for hjælp med at få samlet og malet en hel hær, <br />
      commaner eller primarch der skal lidt mere iøjenfaldende.
    </h3>

      <Image 
      src="/warhammer (3).png" 
      alt="warhammer" 
      width={900} 
      height={900}
      className="ml-auto -mt-96" />
    </section>
    </>
  );
}



// import ModelViewer from '@/app/components/ModelViewer';
// import Footer from '@/app/components/Footer'

// export default function Home() {
//   return (
//     <>
//       <section className="p-5 md:mt-10">
//         <div>
//         <h2 className='text-cgc-logo text-5xl font-serif'>W<span className='uppercase text-4xl'>argaming</span></h2>
//         <h3 className='text-cgc-tekst'>Lille beskrivelse her</h3>
//         </div>

//         <div className="-mt-20">
//           <ModelViewer url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/lord_inquisitor_servo_skull.glb`} />
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }


