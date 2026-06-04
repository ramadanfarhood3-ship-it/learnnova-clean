import { createContext, useState, useContext, ReactNode } from 'react';

const GameContext = createContext<any>(null);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(1);
  const [lang, setLang] = useState<'en' | 'ar' | 'de'>('en');

  const addXP = (amount: number) => {
    setXP(prev => {
      const newXP = prev + amount;
      setLevel(Math.floor(newXP / 200) + 1);
      return newXP;
    });
  };

  return (
    <GameContext.Provider value={{ xp, level, addXP, lang, setLang }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
