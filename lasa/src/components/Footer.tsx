import { Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
            Quer ser informar das últimas novidades da LASA?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                id="email"
                type="email"
                placeholder="seu@email.com.br"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-lime-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-lime-700">
                Inscrever-se
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <Instagram className="size-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {" "}
                Nossos serviços{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Lorem
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Lorem
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Lorem
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Lorem
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
            © LASA 2025. Todos os direitos reservados.
            <br />
            Criado pela{" "}
            <a
              href="https://github.com/otsuki-dev"
              className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            >
              Otsuki
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
