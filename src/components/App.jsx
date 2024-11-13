// React essentials
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Header } from "./Header.jsx";
import { Invoice } from "./Invoice.jsx";
import { HowTo } from "./HowTo.jsx";
import { Footer } from "./Footer.jsx";

// Pages
import { Privacy } from "../pages/Privacy.jsx";

// Analytics
import { Analytics } from "@vercel/analytics/react";

// Variables
import { coefficientiReddito, imposteSostitutive } from "../back-end/formule.js";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/privacy"
          element={<Privacy />}
        />
        <Route
          path="/"
          element={

            <>
              <Invoice
                coefficientiReddito={coefficientiReddito}
                imposteSostitutive={imposteSostitutive}
              />
              <HowTo />
              <Footer />
              <Analytics />
            </>
          }
        />
      </Routes>
    </Router >
  );
}