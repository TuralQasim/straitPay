import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Определяем типы для контекста
export interface KYCContextType {
  kyc: boolean;
  setKyc: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const KYCContext = createContext({} as KYCContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface KYCContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const KYCContextProvider: React.FC<KYCContextProviderProps> = ({
  children,
}) => {
  const [kyc, setKyc] = useState<boolean | null>(false);

  return (
    <KYCContext.Provider value={{ kyc, setKyc }}>
      {children}
    </KYCContext.Provider>
  );
};

export default KYCContextProvider;
