import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="p-5">
      <h1>Overskrift</h1>
      <h2>Header</h2>
      <h3>Subheader</h3>

      <Image 
      src="/warhammer (3).png" 
      alt="warhammer" 
      width={250} 
      height={50}
      className="flex m-auto" />
    </section>
    </>
  );
}
