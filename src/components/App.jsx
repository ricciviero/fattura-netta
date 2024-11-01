// Components
import { Header } from "./Header.jsx";
import { Invoice } from "./Invoice.jsx";
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

    </>
  )
}

