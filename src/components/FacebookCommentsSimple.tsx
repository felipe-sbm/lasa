"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

type FacebookCommentsProps = {
  postId: string;
};

const FacebookCommentsSimple = ({ postId }: FacebookCommentsProps) => {
  const commentsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebug = (message: string) => {
    console.log(`FB Debug: ${message}`);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  useEffect(() => {
    // Limpar estado anterior
    setIsLoaded(false);
    setError(null);
    setDebugInfo([]);

    const loadFacebookSDK = () => {
      addDebug('Iniciando carregamento do SDK do Facebook');

      // Verificar se já existe
      if (window.FB) {
        addDebug('SDK já carregado, fazendo parse...');
        window.FB.XFBML.parse();
        setIsLoaded(true);
        return;
      }

      // Verificar se script já existe
      const existingScript = document.getElementById('facebook-jssdk');
      if (existingScript) {
        addDebug('Script já existe, removendo...');
        existingScript.remove();
      }

      // Criar fb-root
      let fbRoot = document.getElementById('fb-root');
      if (!fbRoot) {
        addDebug('Criando div fb-root...');
        fbRoot = document.createElement('div');
        fbRoot.id = 'fb-root';
        document.body.insertBefore(fbRoot, document.body.firstChild);
      }

      // Carregar SDK
      addDebug('Carregando script do Facebook...');
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v18.0&appId=1417721672739686";
      
      script.onload = () => {
        addDebug('Script carregado com sucesso');
        // Aguardar um pouco para o FB estar disponível
        setTimeout(() => {
          if (window.FB) {
            addDebug('Facebook SDK disponível, fazendo parse...');
            window.FB.XFBML.parse();
            setIsLoaded(true);
          } else {
            addDebug('ERRO: Script carregado mas FB não está disponível');
            setError('Facebook SDK não inicializou corretamente');
          }
        }, 1000);
      };

      script.onerror = (err) => {
        addDebug('ERRO ao carregar script: ' + err);
        setError('Falha ao carregar script do Facebook');
      };

      document.head.appendChild(script);
    };

    // Aguardar um pouco antes de carregar
    const timer = setTimeout(loadFacebookSDK, 500);

    // Timer para verificar status
    const checkInterval = setInterval(() => {
      if (window.FB && !isLoaded) {
        addDebug('Facebook SDK detectado pelo timer, fazendo parse...');
        window.FB.XFBML.parse();
        setIsLoaded(true);
        clearInterval(checkInterval);
      }
    }, 2000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(checkInterval);
    };
  }, [postId, isLoaded]); // Adicionei isLoaded como dependência

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `http://localhost:3000/posts/${postId}`;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comentários</h3>
      
      {/* Debug info em desenvolvimento */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-4 p-2 bg-gray-100 text-xs rounded">
          <details>
            <summary className="cursor-pointer">Debug Info (clique para expandir)</summary>
            <div className="mt-2">
              <p><strong>URL:</strong> {currentUrl}</p>
              <p><strong>Post ID:</strong> {postId}</p>
              <p><strong>SDK Carregado:</strong> {isLoaded ? 'Sim' : 'Não'}</p>
              <p><strong>Erro:</strong> {error || 'Nenhum'}</p>
              <div className="mt-2">
                <strong>Log:</strong>
                {debugInfo.map((info, i) => (
                  <div key={i} className="text-xs">{info}</div>
                ))}
              </div>
            </div>
          </details>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded">
          <p className="text-red-800">Erro: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm"
          >
            Recarregar Página
          </button>
        </div>
      )}

      {!isLoaded && !error && (
        <div className="mb-4 p-4 bg-blue-100 border border-blue-400 rounded">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <p className="text-blue-800">Carregando comentários do Facebook...</p>
          </div>
        </div>
      )}

      <div className="bg-white border rounded-lg p-4">
        <div
          ref={commentsRef}
          className="fb-comments"
          data-href={currentUrl}
          data-width="100%"
          data-numposts="5"
          data-colorscheme="light"
          data-order-by="social"
        />
        
        {isLoaded && (
          <div className="mt-4 text-sm text-gray-500">
            <p>💡 Para comentar, você precisa estar logado no Facebook</p>
            <p className="text-xs mt-1">Se os comentários não aparecem, pode ser devido a bloqueadores de ads ou configurações de privacidade do navegador.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacebookCommentsSimple;
