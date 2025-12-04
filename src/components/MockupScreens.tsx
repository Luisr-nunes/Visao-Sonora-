import { HomeScreen } from './HomeScreen';
import { SettingsScreen } from './SettingsScreen';

export function MockupScreens() {
  const fontSize = 'normal';
  const voiceType = 'feminina';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      <div className="flex flex-wrap gap-12 items-start justify-center max-w-7xl">
        {/* Tela Principal */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-gray-800 mb-4 font-semibold">Tela Principal</h2>
          <div className="relative">
            {/* Moldura do Celular */}
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-[#1b2734] rounded-[2.5rem] overflow-hidden w-[375px] h-[812px] relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-40 h-7 rounded-b-3xl z-10"></div>
                
                {/* Conteúdo da Tela */}
                <div className="w-full h-full overflow-hidden">
                  <HomeScreen 
                    onOpenSettings={() => {}}
                    fontSize={fontSize}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tela de Configurações */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-gray-800 mb-4 font-semibold">Tela de Configurações</h2>
          <div className="relative">
            {/* Moldura do Celular */}
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
              <div className="bg-[#1b2734] rounded-[2.5rem] overflow-hidden w-[375px] h-[812px] relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-40 h-7 rounded-b-3xl z-10"></div>
                
                {/* Conteúdo da Tela */}
                <div className="w-full h-full overflow-hidden">
                  <SettingsScreen 
                    onBack={() => {}}
                    fontSize={fontSize}
                    setFontSize={() => {}}
                    voiceType={voiceType}
                    setVoiceType={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
