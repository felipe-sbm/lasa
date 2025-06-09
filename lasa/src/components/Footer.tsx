import Link from "next/link";
import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-whit">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <h1 className="text-xl font-bold text-gray-900 sm:text-lg">
              Laboratório de Soluções Ambientais
            </h1>
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <Link
                className="text-gray-700 transition hover:text-lime-700/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <Instagram className="size-6" />
              </Link>
            </div>
          </div>

            <div className="w-full flex justify-center">
            <div className="w-full max-w-md px-4">
              <strong className="block text-right text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
              Quer ser informado das últimas novidades da LASA?
              </strong>

              <form className="mt-6">
              <div className="relative">
                <label className="sr-only" htmlFor="email">
                Email
                </label>
                <input
                className="w-full rounded-full border border-gray-200 bg-gray-100 p-4 pr-32 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-600"
                id="email"
                type="email"
                placeholder="seu@email.com.br"
                />
                <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-lime-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-lime-700"
                >
                Inscrever-se
                </button>
              </div>
              </form>
            </div>
            </div>
        </div>

        <div className="mt-4 border-t border-gray-100 pt-">
          <p className="text-center text-xs/relaxed text-gray-500">
            ©LASA 2025. Todos os direitos reservados.
            <br />
            Criado pela{" "}
            <Link
              href="https://github.com/otsuki-dev"
              className="text-gray-700 underline transition hover:text-fuchsia-700/75"
            >
              Otsuki
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
