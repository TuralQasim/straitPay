import { createContext, useState, Dispatch, SetStateAction } from "react";

// Определяем типы для контекста
export interface BusinessContextType {
  business: boolean;
  setBusiness: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const BusinessContext = createContext({} as BusinessContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface BusinessContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const BusinessContextProvider: React.FC<
  BusinessContextProviderProps
> = ({ children }) => {
  const [business, setBusiness] = useState<boolean | null>(false);

  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
  );
};

export default BusinessContextProvider;
