import { createContext, useState, Dispatch, SetStateAction } from "react";

// Определяем типы для контекста
export interface ComingContextType {
  coming: boolean;
  setComing: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const ComingContext = createContext({} as ComingContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface ComingContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const ComingContextProvider: React.FC<ComingContextProviderProps> = ({
  children,
}) => {
  const [coming, setComing] = useState<boolean | null>(false);

  return (
    <ComingContext.Provider value={{ coming, setComing }}>
      {children}
    </ComingContext.Provider>
  );
};

export default ComingContextProvider;
