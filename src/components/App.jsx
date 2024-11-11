// Components
import { Header } from "./Header.jsx";
import { Invoice } from "./Invoice.jsx";
import { HowTo } from "./HowTo.jsx";
import { Footer } from "./Footer.jsx";
import { Analytics } from "@vercel/analytics/react"

// Variables
import { coefficientiReddito, imposteSostitutive } from "../back-end/formule.js";

export const App = () => {



  return (
    <>
      <Analytics />
      <Header />
      <Invoice
        coefficientiReddito={coefficientiReddito}
        imposteSostitutive={imposteSostitutive}
      />
      <HowTo />
      <Footer />

    </>
  )
}

