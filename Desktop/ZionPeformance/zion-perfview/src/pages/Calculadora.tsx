import { useEffect, useRef } from 'react';

export const Calculadora = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Garantir que o iframe carregue corretamente
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      
      const handleLoad = () => {
        console.log('Calculadora carregada com sucesso');
      };

      const handleError = () => {
        console.error('Erro ao carregar calculadora');
      };

      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', handleError);

      return () => {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
      <iframe
        ref={iframeRef}
        src="/calculadora/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        title="Calculadora de vendas de Imóveis"
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
};
