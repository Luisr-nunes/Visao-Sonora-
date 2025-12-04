import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { MockupScreens } from './components/MockupScreens';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'settings'>('home');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('large');
  const [voiceType, setVoiceType] = useState<string>('feminina');
  const [showMockup, setShowMockup] = useState(true);

  // Alternar entre modo normal e modo mockup com a tecla M
  useState(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'm' || e.key === 'M') {
        setShowMockup(prev => !prev);
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  });

  if (showMockup) {
    return <MockupScreens />;
  }

  return (
    <div className="min-h-screen bg-[#1b2734] text-white" style={{ fontSize: fontSize === 'normal' ? '16px' : fontSize === 'large' ? '20px' : '24px' }}>
      {currentScreen === 'home' ? (
        <HomeScreen 
          onOpenSettings={() => setCurrentScreen('settings')}
          fontSize={fontSize}
        />
      ) : (
        <SettingsScreen 
          onBack={() => setCurrentScreen('home')}
          fontSize={fontSize}
          setFontSize={setFontSize}
          voiceType={voiceType}
          setVoiceType={setVoiceType}
        />
      )}
    </div>
  );
}
