import { Header } from "./Header.jsx";
import { UserInput } from "./UserInput.jsx";
import { coefficientiReddito, imposteSostitutive } from "../back-end/formule.js";

export const App = () => {



  return (
    <>
      <Header />
      <UserInput
        coefficientiReddito={coefficientiReddito}
        imposteSostitutive={imposteSostitutive}
      />

    </>
  )
}

