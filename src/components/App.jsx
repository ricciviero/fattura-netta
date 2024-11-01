import { Header } from "./Header.jsx";

import { tasseRegimeForfettario } from "../back-end/formule.js"

export const App = () => {

  const calcoloNettoFattura = (fatturaLorda) => {
    const tasse = tasseRegimeForfettario[0];
    const redditoImponibile = fatturaLorda * (tasse.coeffRedd / 100);
    const impostaSostitutiva = redditoImponibile * (tasse.impostaSostitutiva / 100);
    const contributiInps = redditoImponibile * (tasse.contributiInps / 100);
    const nettoFattura = fatturaLorda - impostaSostitutiva - contributiInps;
    return nettoFattura;
  }

  // Esempio di utilizzo
  const fatturaLorda = 1000;
  const netto = calcoloNettoFattura(fatturaLorda);
  console.log(`Il netto della fattura di €${fatturaLorda} è €${netto.toFixed(2)}`);




  return (
    <>
      <Header />

    </>
  )
}

