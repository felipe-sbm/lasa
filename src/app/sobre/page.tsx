import Image from "next/image";
import { Users, Target, Award, Heart } from "lucide-react";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Sobre o LASA
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Laboratório de Soluções Ambientais (LASA) é um laboratório de excelência 
                dedicado ao estudo e propostas de mitigação. Nossa missão é 
                desenvolver pesquisas de alta qualidade que contribuam para a sustentabilidade 
                da vida urbana e rural.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Através de tecnologias avançadas e metodologias inovadoras, buscamos 
                compreender melhor os processos que regem os ambientes aquáticos e 
                fornecer soluções práticas para sua conservação.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Laboratório de Soluções Ambientais"
                className="shadow-lg object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lasa py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excelência</h3>
              <p className="text-gray-600">
                Buscamos sempre a mais alta qualidade em nossas pesquisas e análises.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Comprometidos com a preservação dos recursos naturais para futuras gerações.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inovação</h3>
              <p className="text-gray-600">
                Utilizamos tecnologias de ponta para desenvolver soluções inovadoras.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Colaboração</h3>
              <p className="text-gray-600">
                Trabalhamos em parceria com instituições nacionais e internacionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Pesquisa em laboratório"
                className="rounded-lg shadow-lg object-cover"
                width={600}
                height={400}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-lasa rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Desenvolver pesquisas científicas de excelência
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-lasa rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Formar profissionais qualificados e comprometidos com a sustentabilidade
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-lasa rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Contribuir para políticas públicas baseadas em evidências científicas
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-lasa rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Promover a consciência ambiental na sociedade e nas escolas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="flex max-w-7xl mx-auto px-4 text-center">
          <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Contamos com uma equipe multidisciplinar de pesquisadores, 
            estudantes e técnicos especializados, unidos pelo compromisso 
            com a excelência científica e a preservação ambiental.
          </p>
          </div>
            <div className="bg-white p-8 shadow-sm border border-gray-200 flex flex-col items-center justify-center">
            <Users className="w-10 h-10 text-lasa mb-4" />
            <p className="text-gray-600 text-center">Pesquisadores:</p>
            <p className="text-2xl font-bold text-gray-900 text-center">10+</p>
            </div>
        </div>
      </section>
    </main>
  );
}