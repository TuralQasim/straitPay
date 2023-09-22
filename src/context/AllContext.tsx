import { createContext, useState, Dispatch, SetStateAction } from "react";

// Определяем типы для контекста
export interface AllContextType {
  business?: boolean;
  setBusiness?: Dispatch<SetStateAction<boolean>>;
  coming?: boolean;
  setComing?: Dispatch<SetStateAction<boolean>>;
  isVerified?: boolean;
  setIsVerified?: Dispatch<SetStateAction<boolean>>;
  phone?: boolean;
  setPhone?: Dispatch<SetStateAction<boolean>>;
  kyc?: boolean;
  setKyc?: Dispatch<SetStateAction<boolean>>;
  transaction?: boolean;
  setTransaction?: Dispatch<SetStateAction<boolean>>;
  verified?: boolean;
  setVerified?: Dispatch<SetStateAction<boolean>>;
}

// Создаем и экспортируем контекст
export const AllContext = createContext({} as AllContextType);

// Определяем тип для компонента VerifiedContextProvider
export interface AllContextProviderProps {
  children: React.ReactNode;
}

// Создаем компонент VerifiedContextProvider
export const AllContextProvider: React.FC<AllContextProviderProps> = ({
  children,
}) => {
  const [business, setBusiness] = useState<boolean | null>(false);
  const [coming, setComing] = useState<boolean | null>(false);
  const [isVerified, setIsVerified] = useState<boolean | null>(false);
  const [phone, setPhone] = useState<boolean | null>(false);
  const [kyc, setKyc] = useState<boolean | null>(false);
  const [transaction, setTransaction] = useState<boolean | null>(false);
  const [verified, setVerified] = useState<boolean | null>(false);

  return (
    <AllContext.Provider
      value={{
        verified,
        setVerified,
        transaction,
        setTransaction,
        kyc,
        setKyc,
        business,
        isVerified,
        setIsVerified,
        setBusiness,
        coming,
        setComing,
        phone,
        setPhone,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default AllContextProvider;
