import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header
        setCurrentPage={setCurrentPage}
      />
      {currentPage === "Privacy" ? (
        <Privacy />
      ) : (
        <>

          <Invoice
            coefficientiReddito={coefficientiReddito}
            imposteSostitutive={imposteSostitutive}
          />
          <HowTo />
          <Footer
            setCurrentPage={setCurrentPage}
          />
          <Analytics />
        </>
      )}
    </>
  );
};