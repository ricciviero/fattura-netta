import { useState } from "react";


export const UserInput = ({ coefficientiReddito, imposteSostitutive }) => {

    const [importoLordo, setImportoLordo] = useState(null);
    const [coeffRedd, setCoeffRedd] = useState(0);
    const [impostaSostitutiva, setImpostaSostitutiva] = useState(5);
    const [contributiInps, setContributiInps] = useState(26.07);
    const [netto, setNetto] = useState(null);

    const calcolaNetto = () => {
        // Conversione dei valori in numeri
        const importoLordoNum = parseFloat(importoLordo);

        const coeffReddNum = parseFloat(coeffRedd);
        const impostaSostitutivaNum = parseFloat(impostaSostitutiva);
        const contributiInpsNum = 26.07; // Fisso al 26.07%



        // Calcolo imponibile
        const imponibile = importoLordoNum * (coeffReddNum / 100);

        // Calcolo imposta sostitutiva sull'imponibile
        const impostoSostitutiva = imponibile * (impostaSostitutivaNum / 100);

        // Calcolo contributi INPS sull'imponibile (sempre applicati)
        const contributiCalcolati = imponibile * (contributiInpsNum / 100);

        // Calcolo netto: Lordo - imposta sostitutiva - contributi INPS
        const nettoCalcolato = importoLordoNum - impostoSostitutiva - contributiCalcolati;

        // Arrotondiamo a 2 decimali
        const nettoFinale = Math.round(nettoCalcolato * 100) / 100;

        setNetto(nettoFinale);
        console.log({
            lordo: importoLordoNum,
            coefficiente: coeffReddNum,
            imponibile: imponibile,
            impostoSostitutiva: impostoSostitutiva,
            contributiInps: contributiCalcolati,
            netto: nettoFinale
        });
    };

    // Funzione per pulire i campi dopo l'invio
    // const clearFields = () => {
    //     setImportoLordo(0);
    //     setCoeffRedd(40);
    //     setImpostaSostitutiva(5);
    //     setRivalsaInps(false);
    //     setContributiInps(26.07);
    // }

    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault();
        calcolaNetto();
        console.log(netto);

    }


    return (
        <div className="max-w-md ml-10 mt-10 p-6 bg-white rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Inserisci i dati della fattura</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Importo Lordo, compresa rivalsa INPS</label>
                <input
                    type="number"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Esempio: € 1000"
                    value={importoLordo}
                    onChange={(e) => setImportoLordo(e.target.value)}
                />
            </div>

            <div className="mb-4">

                <label className="block text-gray-700">Coefficiente di Redditività</label>
                <select
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    value={coeffRedd}
                    onChange={(e) => setCoeffRedd(e.target.value)}
                >

                    {coefficientiReddito.map((coeff) => {
                        return <option
                            key={coeff}
                            value={coeff}

                        >
                            {coeff}%
                        </option>
                    })}
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Contributi INPS</label>
                <input
                    type="number"
                    placeholder="Esempio: 5%"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    disabled
                    value={contributiInps}
                    onChange={(e) => setContributiInps(e.target.value)}

                >
                </input>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Imposta Sostitutiva</label>
                <select
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    value={impostaSostitutiva}
                    onChange={(e) => setImpostaSostitutiva(e.target.value)}
                >

                    {imposteSostitutive.map((imposta) => {
                        return <option
                            key={imposta}
                            value={imposta}
                        >
                            {imposta}%
                        </option>
                    })}
                </select>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        Totale lordo
                    </h2>

                    <h2 className="text-3xl font-bold mb-1">
                        € {importoLordo}
                    </h2>
                </div>

                <button
                    className="bg-gray-200 font-bold py-2 px-4 rounded shadow-sm"
                    onClick={handleSubmit}
                >
                    Calcola il netto
                </button>


            </div>
        </div >
    );
};
