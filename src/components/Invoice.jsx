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
            <container className="flex flex-col lg:flex-row justify-center items-center max-w-6xl mx-auto p-6 space-y-6 lg:space-y-0 lg:space-x-10">
                <div className="w-full lg:max-w-md p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Inserisci i dati della fattura</h2>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Importo Lordo, compresa rivalsa INPS</label>
                        <input
                            type="number"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            placeholder="Esempio: € 1000"
                            value={importoLordo}
                            onChange={(e) => setImportoLordo(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Coefficiente di Redditività</label>
                        <select
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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
                        <label className="block text-gray-600 font-medium">Contributi INPS</label>
                        <input
                            type="number"
                            placeholder="Esempio: 5%"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none"
                            disabled
                            value={contributiInps}
                            onChange={(e) => setContributiInps(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium">Imposta Sostitutiva</label>
                        <select
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
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

                    <div className="flex items-center justify-between mt-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-700">Totale lordo</h2>
                            <h2 className="text-3xl font-bold text-blue-500">€ {importoLordo}</h2>
                        </div>
                        <button
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
                            onClick={handleSubmit}
                        >
                            Calcola il netto
                        </button>
                    </div>
                </div>

                <div className="w-full lg:max-w-md p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Riepilogo della tua fattura</h2>

                    {netto !== null && (
                        <div className="space-y-4">
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Importo Lordo:</h3>
                                <p className="text-lg text-gray-600">€ {importoLordo}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Imponibile:</h3>
                                <p className="text-lg text-gray-600">€ {imponibile}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Imposta Sostitutiva:</h3>
                                <p className="text-lg text-gray-600">€ {impostoSostitutiva}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Contributi INPS:</h3>
                                <p className="text-lg text-gray-600">€ {contributiCalcolati}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-gray-700">Totale Netto</h2>
                                <p className="text-3xl font-bold text-green-500 transition-transform duration-300 hover:scale-105">
                                    € {netto}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </container>
        </>
    );
};