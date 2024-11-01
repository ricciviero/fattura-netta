// Components
import { Header } from "./Header.jsx";
import { Invoice } from "./Invoice.jsx";

// Variables
import { coefficientiReddito, imposteSostitutive } from "../back-end/formule.js";

export const App = () => {



  return (
    <>
      <Header />
      <Invoice
        coefficientiReddito={coefficientiReddito}
        imposteSostitutive={imposteSostitutive}
      />

    </>
  )
}

