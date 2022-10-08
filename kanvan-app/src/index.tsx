import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";  

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Faliled to find the root element");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <>
    <RecoilRoot> 
          <App />  
    </RecoilRoot>
  </>
);
