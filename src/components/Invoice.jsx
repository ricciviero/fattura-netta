import { useState } from "react";

export const Invoice = ({ coefficientiReddito, imposteSostitutive }) => {

    const [importoLordo, setImportoLordo] = useState(null);
    const [coeffRedd, setCoeffRedd] = useState(0);
    const [impostaSostitutiva, setImpostaSostitutiva] = useState(5);
    const [contributiInps, setContributiInps] = useState(26.07);
    const [netto, setNetto] = useState(null);

    // Nuovi stati per visualizzare i calcoli intermedi
    const [imponibile, setImponibile] = useState(null);
    const [impostoSostitutiva, setImpostoSostitutiva] = useState(null);
    const [contributiCalcolati, setContributiCalcolati] = useState(null);

    const calcolaNetto = () => {
        // Conversione dei valori in numeri
        const importoLordoNum = parseFloat(importoLordo);
        const coeffReddNum = parseFloat(coeffRedd);
        const impostaSostitutivaNum = parseFloat(impostaSostitutiva);
        const contributiInpsNum = parseFloat(contributiInps);

        // Calcolo imponibile
        const imponibileCalcolato = importoLordoNum * (coeffReddNum / 100);
        setImponibile(imponibileCalcolato);

        // Calcolo imposta sostitutiva sull'imponibile
        const impostoSostitutivaCalcolata = imponibileCalcolato * (impostaSostitutivaNum / 100);
        setImpostoSostitutiva(impostoSostitutivaCalcolata);

        // Calcolo contributi INPS sull'imponibile
        const contributiInpsCalcolati = imponibileCalcolato * (contributiInpsNum / 100);
        setContributiCalcolati(contributiInpsCalcolati);

        // Calcolo netto: Lordo - imposta sostitutiva - contributi INPS
        const nettoCalcolato = importoLordoNum - impostoSostitutivaCalcolata - contributiInpsCalcolati;

        // Arrotondiamo a 2 decimali
        const nettoFinale = Math.round(nettoCalcolato * 100) / 100;

        // Aggiornamento dello stato del netto
        setNetto(nettoFinale);

        console.log({
            lordo: importoLordoNum,
            coefficiente: coeffReddNum,
            imponibile: imponibileCalcolato,
            impostoSostitutiva: impostoSostitutivaCalcolata,
            contributiInps: contributiInpsCalcolati,
            netto: nettoFinale
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calcolaNetto();
    }

    return (
        <>
            <container className="flex justify-between items-start max-w-6xl mx-auto p-6">
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
                            {coefficientiReddito.map((coeff) => (
                                <option key={coeff} value={coeff}>
                                    {coeff}%
                                </option>
                            ))}
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
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Imposta Sostitutiva</label>
                        <select
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            value={impostaSostitutiva}
                            onChange={(e) => setImpostaSostitutiva(e.target.value)}
                        >
                            {imposteSostitutive.map((imposta) => (
                                <option key={imposta} value={imposta}>
                                    {imposta}%
                                </option>
                            ))}
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
                </div>

                <div className="max-w-md ml-10 mt-10 p-6 bg-white rounded-3xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Riepilogo della tua fattura</h2>

                    {/* Mostra il netto calcolato e i dettagli intermedi */}
                    {netto !== null && (
                        <div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Importo Lordo:</h3>
                                <p className="text-lg">€ {importoLordo}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Imponibile:</h3>
                                <p className="text-lg">€ {imponibile}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Imposta Sostitutiva:</h3>
                                <p className="text-lg">€ {impostoSostitutiva}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold">Contributi INPS:</h3>
                                <p className="text-lg">€ {contributiCalcolati}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold">Totale Netto</h2>
                                <p className="text-3xl font-bold">€ {netto}</p>
                            </div>
                        </div>
                    )}
                </div>
            </container>
        </>
    );
};