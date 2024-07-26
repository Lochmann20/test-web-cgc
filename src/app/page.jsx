
import ModelViewer from '@/app/components/ModelViewer';

export default function Home() {
  return (
    <>
      <section className="p-5">
        <h1>Overskrift</h1>
        <h2>Header</h2>
        <h3>Subheader</h3>

        <div className="mt-5">
          <ModelViewer url={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/CGC-Wargaming/lord_inquisitor_servo_skull.glb`} />
        </div>
      </section>
    </>
  );
}



// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//     <section className="p-5">
//       <h1>Overskrift</h1>
//       <h2>Header</h2>
//       <h3>Subheader</h3>

//       <Image 
//       src="/warhammer (3).png" 
//       alt="warhammer" 
//       width={250} 
//       height={50}
//       className="flex m-auto" />
//     </section>
//     </>
//   );
// }
