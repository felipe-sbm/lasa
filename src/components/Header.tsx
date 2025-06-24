import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

function Header() {
  return (
    <div className="header">
      <nav
        className="w-full text-xs px-6 flex items-center justify-between"
        id="top-bar"
      >
        <Link
          href="https://www.gov.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline link"
        >
          <Image
            src="https://flagsapi.com/BR/flat/24.png"
            alt="Bandeira do Brasil"
            width={24}
            height={16}
          />
          Brasil
        </Link>

        <div className="flex gap-5">
          <Link
            href="https://www.gov.br/fazenda/pt-br/canais_atendimento/ouvidoria/simplifique"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Simplifique - Canal de Ouvidoria do Governo Federal"
          >
            Simplifique!
          </Link>
          <Link
            href="https://www.gov.br/secom/pt-br/acesso-a-informacao/comunicabr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Comunica BR - Portal de Comunicação do Governo Federal"
          >
            Comunica BR
          </Link>
          <Link
            href="https://www.gov.br/pt-br/participacao-social"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Participação Social - Portal de Participação do Governo Federal"
          >
            Participe
          </Link>
          <Link
            href="https://www.gov.br/acessoainformacao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Acesso à Informação - Portal de Acesso à Informação do Governo Federal"
          >
            Acesso à informação
          </Link>
          <Link
            href="https://www4.planalto.gov.br/legislacao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Legislação - Portal de Legislação do Governo Federal"
          >
            Legislação
          </Link>
          <Link
            href="https://www.gov.br/pt-br/canais-do-executivo-federal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline link"
            title="Canais do Executivo Federal - Portal de Canais do Governo Federal"
          >
            Canais
          </Link>
        </div>
      </nav>

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-lime-600" href="/">
                <Image
                  src="/logo.svg"
                  alt="Logotipo do laboratório de Soluções Ambientais"
                  width={48}
                  height={48}
                />
                <span className="sr-only">Início</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-md">
                  <li>
                    <Link href="/">Início</Link>
                  </li>
                  <li>
                    <Link href="/sobre">Sobre nós</Link>
                  </li>
                  <li>
                    <Link href="/voluntarios">Seja voluntário</Link>
                  </li>
                  <li>
                    <Link href="/servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link href="/projetos">Projetos</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  type="button"
                  aria-label="Menu"
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-lime-600/75"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
