import Context from "./context/VerifiedContext.js";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import VerifiedContextProvider from "./context/VerifiedContext.tsx";
import KYCContextProvider from "./context/KYCContext.tsx";
import { PhoneContextProvider } from "./context/PhoneContext.tsx";
import IsVerificateContextProvider from "./context/IsVerificateContext.tsx";
import TransactionContextProvider from "./context/TransactionContext.tsx";
import BusinessContextProvider from "./context/BusinessContext.tsx";
import ComingContextProvider from "./context/ComingContext.tsx";
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <ComingContextProvider>
      <BusinessContextProvider>
        <TransactionContextProvider>
          <IsVerificateContextProvider>
            <PhoneContextProvider>
              <KYCContextProvider>
                <VerifiedContextProvider>
                  <Router>
                    <App />
                  </Router>
                </VerifiedContextProvider>
              </KYCContextProvider>
            </PhoneContextProvider>
          </IsVerificateContextProvider>
        </TransactionContextProvider>
      </BusinessContextProvider>
    </ComingContextProvider>
  );
}
