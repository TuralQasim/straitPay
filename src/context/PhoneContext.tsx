import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

// Определяем типы для контекста
export interface PhoneContextType {
  phone: boolean;
  setPhone: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const PhoneContext = createContext({} as PhoneContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface PhoneContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const PhoneContextProvider: React.FC<PhoneContextProviderProps> = ({
  children,
}) => {
  const [phone, setPhone] = useState<boolean | null>(false);

  return (
    <PhoneContext.Provider value={{ phone, setPhone }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
