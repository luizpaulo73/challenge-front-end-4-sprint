import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className="bg-white flex items-center justify-between h-32 w-full p-4">
      <div>
        <a href="/">
            <Image src="/img/porto-logo-header.png" alt="Logo da Porto" height={100} width={100}/>
        </a>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="/participantes">Participantes</a>
          </li>
          <li>
            <a href="/sobre/nos">Sobre nós</a>
          </li>
          <li>
            <a href="/sobre/projeto">Sobre o Projeto</a>
          </li>
          <li>
            <a href="/login">
              <Image src="/img/perfil.png" alt="Minha Conta" height={30} width={30}/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
