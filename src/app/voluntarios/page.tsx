import VolunteerForm from '../../components/VolunteerForm';

export default function VoluntariosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Seja um voluntário</h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O LASA conta com o trabalho de voluntários para apoiar pesquisas,
                atividades de campo, oficinas e ações de educação ambiental. Preencha o
                formulário ao lado para manifestar seu interesse. Entraremos em contato
                assim que possível.
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Atividades de campo e monitoramento</li>
                <li>Suporte em análises de dados e laboratório</li>
                <li>Produção de material educativo e oficinas</li>
                <li>Engajamento comunitário e comunicação</li>
              </ul>
            </div>

            <div className="bg-white p-8 shadow-sm border border-gray-200">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-lasa">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Por que se voluntariar?</h2>
          <p className="max-w-3xl mx-auto">
            Voluntariar-se no LASA é uma oportunidade de aprendizado prático,
            networking com pesquisadores e contribuição direta para a conservação
            e gestão dos recursos hídricos. Seja parte da mudança.
          </p>
        </div>
      </section>
    </main>
  );
}
