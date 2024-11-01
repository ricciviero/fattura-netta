// Components
import { Header } from "./Header.jsx";
import { UserInput, Recap } from "./UserInput.jsx";

// Variables
import { coefficientiReddito, imposteSostitutive } from "../back-end/formule.js";

export const App = () => {



  return (
    <>
      <Header />
      <UserInput
        coefficientiReddito={coefficientiReddito}
        imposteSostitutive={imposteSostitutive}
      />
      <Recap />
    </>
  )
}

