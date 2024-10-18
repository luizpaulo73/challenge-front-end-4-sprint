import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>    
    <main>
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex justify-center">
      <Image src="/img/logo-porto.png" alt="Logo da Porto" width={100} height={100} style={{objectFit: 'cover', borderRadius : '50%'}}/>
      </div>
      <div>
        <h2 className="text-white">Para poder sair com o seu carro sem dores de cabeça,</h2>
        <h2 className="text-white">Deixa a gente fazer um check up nele! Fale conosco!</h2>
      </div>
      <nav>
        <Link href={"/"} className="bg-slate-400">Começar já</Link>
      </nav>
    </div>
  </main>
    </>
  );
}
