type AppState = {
  verified: boolean;
  phone: boolean;
  kyc: boolean;
  transaction: boolean;
  isVerified: boolean;
  business: boolean;
  coming: boolean;
};

const initalState: AppState = {
  verified: false,
  phone: false,
  kyc: false,
  transaction: false,
  isVerified: false,
  business: false,
  coming: false,
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "VERIFIED":
      return { ...state, verified: action.payload };
    case "ISVERIFIED":
      return { ...state, isVerified: action.payload };
    case "COMING":
      return { ...state, coming: action.payload };
    case "BUSINESS":
      return { ...state, business: action.payload };
    case "VERIFIEDID":
      return { ...state, kyc: action.payload };
    case "TRANSACT":
      return { ...state, transaction: action.payload };
    case "VERIFIEDPHONE":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}
