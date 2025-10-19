"use client";
import { useState } from 'react';

export default function VolunteerForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  function validate() {
    return name.trim() && email.includes('@');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setSuccess('Por favor, preencha pelo menos nome e email corretamente.');
      return;
    }
    setSubmitting(true);
    // Simular envio local (sem backend)
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSuccess('Obrigado! Seu interesse foi registrado. Entraremos em contato em breve.');
    setName('');
    setEmail('');
    setPhone('');
    setArea('');
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          id="vol-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 p-2"
          placeholder="Seu nome completo"
          required
        />
      </div>

      <div>
        <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="vol-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 p-2"
          placeholder="seu@email.com.br"
          type="email"
          required
        />
      </div>

      <div>
        <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700">Telefone</label>
        <input
          id="vol-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 p-2"
          placeholder="(00) 9 0000-0000"
        />
      </div>

      <div>
        <label htmlFor="vol-area" className="block text-sm font-medium text-gray-700">Área de interesse</label>
        <select
          id="vol-area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 p-2 bg-white"
        >
          <option value="">Selecione uma opção</option>
          <option>Atividades de campo</option>
          <option>Análises laboratoriais</option>
          <option>Comunicação e educação</option>
          <option>Dados e modelagem</option>
        </select>
      </div>

      <div>
        <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700">Mensagem (opcional)</label>
        <textarea
          id="vol-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-200 p-2"
          rows={4}
          placeholder="Conte-nos um pouco sobre suas habilidades ou disponibilidade"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          id="button-secondary"
          className="px-4 py-2 text-sm font-medium text-white transition hover:bg-lime-700"
          disabled={submitting}
        >
          {submitting ? 'Enviando...' : 'Enviar interesse'}
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 bg-white rounded-md"
          onClick={() => {
            setName('');
            setEmail('');
            setPhone('');
            setArea('');
            setMessage('');
            setSuccess(null);
          }}
        >
          Limpar
        </button>
      </div>

      {success && (
        <p className="text-sm text-green-800 mt-2">{success}</p>
      )}
    </form>
  );
}
