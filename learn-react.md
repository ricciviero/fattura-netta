
# Guida ai Concetti Avanzati di React Applicati al Progetto Fattura Netta

## 1. React Router: Gestione della Navigazione

**Teoria Recap**: React Router consente di gestire la navigazione in un'app a pagina singola (SPA) creando URL per visualizzare componenti o pagine specifiche senza ricaricare l'intera pagina.

**Applicazione al Progetto**:
- Attualmente stai usando uno stato (`currentPage`) per gestire la visualizzazione tra Home e Privacy Policy. React Router renderà il tutto più intuitivo.

**Passaggi**:
1. Installa React Router:
   ```bash
   npm install react-router-dom
   ```
2. Modifica `App.jsx` per utilizzare il router:
   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
   import { Header } from "./Header.jsx";
   import { Footer } from "./Footer.jsx";
   import { Privacy } from "../pages/Privacy.jsx";
   import { Invoice } from "./Invoice.jsx";
   import { HowTo } from "./HowTo.jsx";
   import { Analytics } from "@vercel/analytics/react";

   export const App = () => {
     return (
       <Router>
         <Header />
         <Switch>
           <Route path="/privacy" component={Privacy} />
           <Route path="/" exact>
             <>
               <Invoice
                 coefficientiReddito={coefficientiReddito}
                 imposteSostitutive={imposteSostitutive}
               />
               <HowTo />
               <Footer />
               <Analytics />
             </>
           </Route>
         </Switch>
       </Router>
     );
   };
   ```
3. Aggiorna `Header.jsx` e `Footer.jsx` per utilizzare `Link` di React Router:
   ```jsx
   import { Link } from 'react-router-dom';

   // Nel Footer.jsx
   <li>
     <Link to="/privacy" className="hover:underline me-4 md:me-6">
       Privacy Policy
     </Link>
   </li>
   ```

**Risultato**:
- La navigazione sarà gestita tramite URL (`/` e `/privacy`), rendendo l'app più intuitiva.

---

## 2. React Context API: Condivisione di Dati Globali

**Teoria Recap**: Context API consente di condividere dati tra componenti senza passare props manualmente.

**Applicazione al Progetto**:
- Condividi i dati dei calcoli (es. `importoLordo`, `netto`) tra componenti come `Invoice` e `HowTo`.

**Passaggi**:
1. Crea un `CalcoloContext.jsx`:
   ```jsx
   import React, { createContext, useState } from 'react';

   export const CalcoloContext = createContext();

   export const CalcoloProvider = ({ children }) => {
     const [importoLordo, setImportoLordo] = useState(0);
     const [netto, setNetto] = useState(0);

     const calcolaNetto = (valore, coeffRedd, impostaSostitutiva) => {
       // Logica per il calcolo
       const imponibile = valore * (coeffRedd / 100);
       const nettoCalcolato = imponibile - (imponibile * impostaSostitutiva / 100);
       setNetto(nettoCalcolato);
     };

     return (
       <CalcoloContext.Provider value={{ importoLordo, setImportoLordo, netto, calcolaNetto }}>
         {children}
       </CalcoloContext.Provider>
     );
   };
   ```
2. Avvolgi `App` con il `CalcoloProvider`:
   ```jsx
   import { CalcoloProvider } from './CalcoloContext';

   export const App = () => {
     return (
       <CalcoloProvider>
         <Router>
           {/* Contenuto dell'app */}
         </Router>
       </CalcoloProvider>
     );
   };
   ```
3. Usa `useContext` nei componenti:
   ```jsx
   import { useContext } from 'react';
   import { CalcoloContext } from '../CalcoloContext';

   const Invoice = () => {
     const { importoLordo, setImportoLordo, netto, calcolaNetto } = useContext(CalcoloContext);

     return (
       <div>
         <input
           type="number"
           value={importoLordo}
           onChange={(e) => setImportoLordo(e.target.value)}
         />
         <button onClick={() => calcolaNetto(importoLordo, 78, 15)}>Calcola Netto</button>
         <p>Netto: {netto}</p>
       </div>
     );
   };
   ```

---

## 3. `useReducer` Hook: Gestione dello Stato Complesso

**Teoria Recap**: `useReducer` gestisce stati complessi e logiche di aggiornamento tramite una funzione reducer.

**Applicazione al Progetto**:
- Usa `useReducer` per gestire i campi dei calcoli in `Invoice`.

**Passaggi**:
1. Sostituisci `useState` con `useReducer` in `Invoice`:
   ```jsx
   import { useReducer } from 'react';

   const initialState = {
     importoLordo: 0,
     coeffRedd: 78,
     impostaSostitutiva: 15,
     netto: 0,
     imponibile: 0
   };

   function reducer(state, action) {
     switch (action.type) {
       case 'SET_IMPORTO':
         return { ...state, importoLordo: action.value };
       case 'CALCOLA_NETTO':
         const imponibile = state.importoLordo * (state.coeffRedd / 100);
         const netto = imponibile - (imponibile * state.impostaSostitutiva / 100);
         return { ...state, netto, imponibile };
       default:
         return state;
     }
   }

   export const Invoice = () => {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
       <div>
         <input
           type="number"
           value={state.importoLordo}
           onChange={(e) => dispatch({ type: 'SET_IMPORTO', value: parseFloat(e.target.value) })}
         />
         <button onClick={() => dispatch({ type: 'CALCOLA_NETTO' })}>Calcola Netto</button>
         <p>Netto: {state.netto}</p>
       </div>
     );
   };
   ```

---

## 4. `useMemo` e `useCallback`: Ottimizzazione delle Performance

**Teoria Recap**: `useMemo` memorizza valori calcolati, `useCallback` memorizza funzioni.

**Applicazione al Progetto**:
- Usa `useMemo` per ottimizzare il calcolo del netto.

**Esempio Applicato**:
```jsx
import { useState, useMemo } from 'react';

const Invoice = () => {
  const [importoLordo, setImportoLordo] = useState(1000);
  const [coeffRedd, setCoeffRedd] = useState(78);
  const [impostaSostitutiva, setImpostaSostitutiva] = useState(15);

  const nettoCalcolato = useMemo(() => {
    const imponibile = importoLordo * (coeffRedd / 100);
    return imponibile - (imponibile * impostaSostitutiva / 100);
  }, [importoLordo, coeffRedd, impostaSostitutiva]);

  return (
    <div>
      <input
        type="number"
        value={importoLordo}
        onChange={(e) => setImportoLordo(parseFloat(e.target.value))}
      />
      <p>Netto: {nettoCalcolato}</p>
    </div>
  );
};
```

---

## 5. Lazy Loading con `React.lazy`

**Teoria Recap**: `React.lazy` carica i componenti solo quando necessario.

**Applicazione al Progetto**:
- Usa il lazy loading per caricare la pagina Privacy solo quando necessario.

**Esempio Applicato**:
```jsx
import React, { Suspense } from 'react';

const Privacy = React.lazy(() => import('../pages/Privacy'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/privacy" component={Privacy} />
        {/* Altri Route */}
      </Switch>
    </Suspense>
  </Router>
);
```

---

Questa guida applica ogni concetto al tuo progetto **Fattura Netta**, migliorando la navigazione, la gestione dello stato e le performance!
