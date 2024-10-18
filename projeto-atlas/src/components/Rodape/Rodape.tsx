import Image from "next/image";
import { listaRedes } from "./redes";

export default function Rodape() {
  return (
    <footer className="bg-black h-24">
      <div className="flex justify-between p-5 items-center">
    <nav className="w-1/2">
      <a href="/contato">
        <div className="flex gap-5 items-center">
          <Image src="/img/contato.png" alt="Fale Conosco" width={50} height={50}/>
          <h1 className="text-white">Fale conosco</h1>
        </div>
      </a>
    </nav>
    <nav>
      <ul className="flex justify-around items-center gap-6">
        {listaRedes.map((rede) => (
          <li key={rede.id}>
            <a href={rede.url}>
              <Image src={rede.imagem} alt={rede.nome} width={30} height={30}/>
            </a>
          </li>
        ))}
        <li>
          <Image src="/img/logo-porto-preta.png" alt="Logo Porto Preta" width={100} height={100} />
        </li>
      </ul>
    </nav>
    </div>
  </footer>
  )
}
