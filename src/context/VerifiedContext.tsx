import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Определяем типы для контекста
export interface VerifiedContextType {
  verified: boolean;
  setVerified: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const VerifiedContext = createContext({} as VerifiedContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface VerifiedContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const VerifiedContextProvider: React.FC<
  VerifiedContextProviderProps
> = ({ children }) => {
  const [verified, setVerified] = useState<boolean | null>(false);

  return (
    <VerifiedContext.Provider value={{ verified, setVerified }}>
      {children}
    </VerifiedContext.Provider>
  );
};

export default VerifiedContextProvider;
