import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SettingsScreenProps {
  onBack: () => void;
  fontSize: 'normal' | 'large' | 'extra-large';
  setFontSize: (size: 'normal' | 'large' | 'extra-large') => void;
  voiceType: string;
  setVoiceType: (voice: string) => void;
}

export function SettingsScreen({ 
  onBack, 
  fontSize, 
  setFontSize, 
  voiceType, 
  setVoiceType 
}: SettingsScreenProps) {
  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={onBack}
          className="p-3 rounded-full bg-[#edca77] hover:bg-[#d4b565] transition-colors mr-4"
          aria-label="Voltar"
        >
          <ArrowLeft className="w-6 h-6 text-[#1b2734]" />
        </button>
        <h1 className="text-[#edca77]" style={{ fontSize: fontSize === 'normal' ? '28px' : fontSize === 'large' ? '32px' : '36px' }}>
          Configurações
        </h1>
      </div>

      {/* Configurações */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Tipo de Voz */}
        <div className="space-y-4">
          <label 
            htmlFor="voice-select"
            className="block text-white"
            style={{ fontSize: fontSize === 'normal' ? '20px' : fontSize === 'large' ? '24px' : '28px' }}
          >
            Tipo de Voz
          </label>
          <Select value={voiceType} onValueChange={setVoiceType}>
            <SelectTrigger 
              id="voice-select"
              className="w-full h-16 bg-white/10 border-2 border-[#edca77] text-white rounded-xl"
              style={{ fontSize: fontSize === 'normal' ? '18px' : fontSize === 'large' ? '22px' : '26px' }}
            >
              <SelectValue placeholder="Selecione o tipo de voz" />
            </SelectTrigger>
            <SelectContent className="bg-[#1b2734] border-[#edca77] text-white">
              <SelectItem 
                value="feminina" 
                className="text-white focus:bg-[#edca77] focus:text-[#1b2734] cursor-pointer"
                style={{ fontSize: fontSize === 'normal' ? '18px' : fontSize === 'large' ? '22px' : '26px' }}
              >
                Voz Feminina
              </SelectItem>
              <SelectItem 
                value="masculina"
                className="text-white focus:bg-[#edca77] focus:text-[#1b2734] cursor-pointer"
                style={{ fontSize: fontSize === 'normal' ? '18px' : fontSize === 'large' ? '22px' : '26px' }}
              >
                Voz Masculina
              </SelectItem>
              <SelectItem 
                value="neutra"
                className="text-white focus:bg-[#edca77] focus:text-[#1b2734] cursor-pointer"
                style={{ fontSize: fontSize === 'normal' ? '18px' : fontSize === 'large' ? '22px' : '26px' }}
              >
                Voz Neutra
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-white/70 text-sm mt-2">
            Voz selecionada: {voiceType === 'feminina' ? 'Feminina' : voiceType === 'masculina' ? 'Masculina' : 'Neutra'}
          </p>
        </div>

        {/* Tamanho da Letra */}
        <div className="space-y-4">
          <label className="block text-white" style={{ fontSize: fontSize === 'normal' ? '20px' : fontSize === 'large' ? '24px' : '28px' }}>
            Tamanho da Letra
          </label>
          <div className="space-y-3">
            <Button
              onClick={() => setFontSize('normal')}
              className={`w-full h-16 rounded-xl transition-colors ${
                fontSize === 'normal' 
                  ? 'bg-[#edca77] text-[#1b2734]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              style={{ fontSize: '18px' }}
            >
              Normal
            </Button>
            <Button
              onClick={() => setFontSize('large')}
              className={`w-full h-16 rounded-xl transition-colors ${
                fontSize === 'large' 
                  ? 'bg-[#edca77] text-[#1b2734]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              style={{ fontSize: '22px' }}
            >
              Grande
            </Button>
            <Button
              onClick={() => setFontSize('extra-large')}
              className={`w-full h-16 rounded-xl transition-colors ${
                fontSize === 'extra-large' 
                  ? 'bg-[#edca77] text-[#1b2734]' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              style={{ fontSize: '26px' }}
            >
              Extra Grande
            </Button>
          </div>
        </div>

        {/* Informações de Acessibilidade */}
        <div className="mt-auto p-6 bg-white/5 rounded-xl">
          <h3 className="text-[#edca77] mb-3" style={{ fontSize: fontSize === 'normal' ? '18px' : fontSize === 'large' ? '22px' : '26px' }}>
            Sobre Acessibilidade
          </h3>
          <p className="text-white/70">
            Este aplicativo foi desenvolvido com foco em acessibilidade para pessoas com deficiência visual. 
            Use comandos de voz para navegar e obter informações sobre rotas.
          </p>
        </div>
      </div>
    </div>
  );
}
