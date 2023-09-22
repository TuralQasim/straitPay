import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AllContextProvider from "./context/AllContext.tsx";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <AllContextProvider>
      <Router>
        <App />
      </Router>
    </AllContextProvider>
  );
}
