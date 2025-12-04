import image_5dfeef439a91919ebbf5d586e19d71ec38dc7bae from 'figma:asset/5dfeef439a91919ebbf5d586e19d71ec38dc7bae.png';
import { useState } from 'react';
import { MapPin, Navigation, Settings, Mic, Shield } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/d9cef034da492435e1893af9be514adc25207893.png';

interface HomeScreenProps {
  onOpenSettings: () => void;
  fontSize: 'normal' | 'large' | 'extra-large';
}

export function HomeScreen({ onOpenSettings, fontSize }: HomeScreenProps) {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [isListeningLocation, setIsListeningLocation] = useState(false);
  const [isListeningDestination, setIsListeningDestination] = useState(false);
  const [activeRoute, setActiveRoute] = useState<boolean>(false);

  const handleCurrentLocationVoice = () => {
    setIsListeningLocation(!isListeningLocation);
    // Simulação de reconhecimento de voz
    setTimeout(() => {
      setCurrentLocation('Rua das Flores, 123');
      setIsListeningLocation(false);
    }, 2000);
  };

  const handleDestinationVoice = () => {
    setIsListeningDestination(!isListeningDestination);
    // Simulação de reconhecimento de voz
    setTimeout(() => {
      setDestination('Avenida Paulista, 1000');
      setIsListeningDestination(false);
      setActiveRoute(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto px-6 py-8 relative">
      {/* Header - Logo e Nome */}
      <div className="flex flex-col items-center mb-8 mt-4">
        <img 
          src={image_5dfeef439a91919ebbf5d586e19d71ec38dc7bae} 
          alt="Logo Visão Sonora - Bússola com ondas sonoras" 
          className="w-full max-w-[346px] h-auto mb-4 object-contain"
          style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(45%) saturate(446%) hue-rotate(359deg) brightness(98%) contrast(91%)' }}
        />
        <h1 className="text-center text-white mb-2" style={{ fontSize: fontSize === 'normal' ? '45px' : fontSize === 'large' ? '45px' : '45px' }}>
          Visão Sonora
        </h1>
        <p className="text-[#edca77] text-center uppercase tracking-wider" style={{ fontSize: fontSize === 'normal' ? '14px' : fontSize === 'large' ? '16px' : '18px' }}>
          Navegação Assistida
        </p>
      </div>

      {/* Botões Principais */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Botão - Onde Estou */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleCurrentLocationVoice}
            className="w-full h-auto py-6 bg-[#edca77] hover:bg-[#d4b565] text-[#1b2734] rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
            style={{ fontSize: fontSize === 'normal' ? '16px' : fontSize === 'large' ? '18px' : '20px' }}
          >
            {isListeningLocation ? (
              <>
                <Mic className="w-6 h-6 animate-pulse" />
                <span className="uppercase tracking-wide">Ouvindo...</span>
              </>
            ) : (
              <span className="uppercase tracking-wide text-[32px]">Onde estou?</span>
            )}
          </Button>
          {currentLocation && (
            <div className="px-4 py-3 bg-white/10 rounded-lg">
              <p className="text-white">{currentLocation}</p>
            </div>
          )}
        </div>

        {/* Botão - Para Onde Ir */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={handleDestinationVoice}
            className="w-full h-auto py-6 bg-white hover:bg-white/90 text-[#1b2734] rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg"
            style={{ fontSize: fontSize === 'normal' ? '16px' : fontSize === 'large' ? '18px' : '20px' }}
          >
            {isListeningDestination ? (
              <>
                <Mic className="w-6 h-6 animate-pulse" />
                <span className="uppercase tracking-wide">Ouvindo...</span>
              </>
            ) : (
              <>
                <span className="uppercase tracking-wide text-[28px] font-bold text-center">Navegar para ...</span>
                <Mic className="w-6 h-6" />
              </>
            )}
          </Button>
          {destination && (
            <div className="px-4 py-3 bg-white/10 rounded-lg">
              <p className="text-white">{destination}</p>
            </div>
          )}
        </div>

        {/* Rota em Andamento */}
        {activeRoute && (
          <div className="mt-4 p-5 bg-white/5 rounded-xl border border-[#edca77]/30">
            <h2 className="text-[#edca77] mb-4 uppercase tracking-wide" style={{ fontSize: fontSize === 'normal' ? '16px' : fontSize === 'large' ? '18px' : '20px' }}>
              Rota em Andamento
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#edca77] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/60" style={{ fontSize: fontSize === 'normal' ? '12px' : fontSize === 'large' ? '14px' : '16px' }}>Origem</p>
                  <p className="text-white" style={{ fontSize: fontSize === 'normal' ? '14px' : fontSize === 'large' ? '16px' : '18px' }}>{currentLocation}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-[#edca77] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/60" style={{ fontSize: fontSize === 'normal' ? '12px' : fontSize === 'large' ? '14px' : '16px' }}>Destino</p>
                  <p className="text-white" style={{ fontSize: fontSize === 'normal' ? '14px' : fontSize === 'large' ? '16px' : '18px' }}>{destination}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-[#edca77]" style={{ fontSize: fontSize === 'normal' ? '13px' : fontSize === 'large' ? '15px' : '17px' }}>
                  Distância estimada: 2.5 km
                </p>
                <p className="text-[#edca77]" style={{ fontSize: fontSize === 'normal' ? '13px' : fontSize === 'large' ? '15px' : '17px' }}>
                  Tempo estimado: 8 minutos
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Botão de Configurações no Rodapé */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onOpenSettings}
          className="p-4 rounded-full bg-white hover:bg-white/90 transition-colors shadow-lg"
          aria-label="Configurações"
        >
          <Settings className="w-10 h-10 text-[#1b2734]" />
        </button>
      </div>
    </div>
  );
}
