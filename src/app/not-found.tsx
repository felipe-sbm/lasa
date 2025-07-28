import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center mt-20 bg-white">
            <div className="text-center">
                <Image
                    src="/undraw.svg"
                    alt="Rua arborizada"
                    className="mx-auto mb-6"
                    width={500}
                    height={508}
                />
                <h1 className="text-4xl font-bold text-gray-900">404</h1>
                <p className="mt-4 text-lg text-gray-600">Oops! Essa página que você está procurando não existe.</p>
                <Link href="/" className="mt-6 inline-block px-4 py-2 text-white bg-lasa hover:underline">
                    Voltar para o Início
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;