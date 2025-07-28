"use client";
import { useEffect, useState } from "react";
import { Lightbulb } from "lucide-react";

// Declaração de tipos para o Facebook SDK
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

const FacebookComments = ({ postId }: FacebookCommentsProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadFacebookSDK = () => {
      // Limpa qualquer SDK anterior
      const existingScript = document.getElementById('facebook-jssdk');
      if (existingScript) {
        existingScript.remove();
      }

      // Cria o div fb-root se não existir
      const existingFbRoot = document.getElementById('fb-root');
      if (existingFbRoot) {
        existingFbRoot.remove();
      }
      
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.prepend(fbRoot);

      // Carrega o SDK usando o método padrão do Facebook
      (function(d, s, id) {
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        
        const js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.async = true;
        js.crossOrigin = "anonymous";
        js.src = "https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v18.0&appId=1417721672739686";
        
        js.onload = () => {
          console.log('Facebook SDK carregado com sucesso');
          setTimeout(() => {
            if (window.FB) {
              setIsLoaded(true);
              window.FB.XFBML.parse();
            } else {
              console.error('Facebook SDK carregado mas FB não está disponível');
              setHasError(true);
            }
          }, 500);
        };

        js.onerror = () => {
          console.error('Erro ao carregar Facebook SDK');
          setHasError(true);
        };

        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        } else {
          document.head.appendChild(js);
        }
      }(document, 'script', 'facebook-jssdk'));
    };

    // Aguarda um pouco antes de carregar para evitar conflitos
    const timer = setTimeout(loadFacebookSDK, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `http://localhost:3000/posts/${postId}`;

  if (hasError) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Comentários</h3>
        <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
          <p className="text-yellow-800">
            Não foi possível carregar os comentários do Facebook. 
            <button 
              onClick={() => {
                setHasError(false);
                setIsLoaded(false);
                window.location.reload();
              }}
              className="ml-2 text-blue-600 underline"
            >
              Tentar novamente
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Comentários</h3>
      {!isLoaded && (
        <div className="flex items-center justify-center p-4 bg-gray-200">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <p className="text-gray-600">Carregando comentários do Facebook...</p>
          </div>
        </div>
      )}
      <div className="bg-white border p-1">
        <div
          className="fb-comments"
          data-href={currentUrl}
          data-width="100%"
          data-numposts="10"
          data-colorscheme="light"
          data-order-by="social"
        />
      </div>
      {isLoaded && (
        <div className="mt-4 text-sm text-gray-500">
          <Lightbulb className="inline-block mr-1" /> Os comentários são fornecidos pelo Facebook. Para comentar, faça login no Facebook.
        </div>
      )}
    </div>
  );
};

export default FacebookComments;
