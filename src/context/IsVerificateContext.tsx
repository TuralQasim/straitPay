import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Определяем типы для контекста
export interface IsVerificateContextType {
  isVerified: boolean;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const IsVerificateContext = createContext({} as IsVerificateContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface IsVerificateContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const IsVerificateContextProvider: React.FC<
  IsVerificateContextProviderProps
> = ({ children }) => {
  const [isVerified, setIsVerified] = useState<boolean | null>(false);

  return (
    <IsVerificateContext.Provider value={{ isVerified, setIsVerified }}>
      {children}
    </IsVerificateContext.Provider>
  );
};

export default IsVerificateContextProvider;
