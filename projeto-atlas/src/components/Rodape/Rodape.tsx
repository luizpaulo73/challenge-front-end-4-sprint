import Image from "next/image";
import { listaRedes } from "./redes";

export default function Rodape() {
  return (
    <footer className="bg-black h-24">
      <div className="flex justify-between p-5">
    <nav>
      <a href="/contato">
        <div className="flex">
          <Image src="/img/contato.png" alt="Fale Conosco" width={100} height={100}/>
          <h1 className="text-white">Fale conosco</h1>
        </div>
      </a>
    </nav>
    <nav>
      <ul className="flex">
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
