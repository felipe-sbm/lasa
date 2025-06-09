import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

function Header() {
  return (
    <>
      <div className="w-full bg-lime-700 text-white text-xs py-1 px-4 flex gap-4 justify-end">
        <Link href="https://www.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">Portal Gov.br</Link>
        <Link href="https://www.ufrn.br/" target="_blank" rel="noopener noreferrer" className="hover:underline">UFRN</Link>
      </div>
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
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/">Início</Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/sobre">Sobre nós</Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/voluntarios">Seja voluntário</Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/servicos">Serviços</Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/projetos">Projetos</Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 transition hover:text-lime-500/75" href="/blog">Blog</Link>
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
    </>
  );
}

export default Header;