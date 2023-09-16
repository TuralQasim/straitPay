import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Определяем типы для контекста
export interface TransactionContextType {
  transaction: boolean;
  setTransaction: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const TransactionContext = createContext({} as TransactionContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface TransactionContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const TransactionContextProvider: React.FC<TransactionContextProviderProps> = ({
  children,
}) => {
  const [transaction, setTransaction] = useState<boolean | null>(false);

  return (
    <TransactionContext.Provider value={{ transaction, setTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
