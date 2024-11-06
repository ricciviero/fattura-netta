import { useState } from "react";
import { motion } from "framer-motion";

export const Invoice = ({ coefficientiReddito, imposteSostitutive }) => {
    const [importoLordo, setImportoLordo] = useState(null);
    const [coeffRedd, setCoeffRedd] = useState(0);
    const [impostaSostitutiva, setImpostaSostitutiva] = useState(5);
    const [contributiInps, setContributiInps] = useState(26.07);
    const [netto, setNetto] = useState(null);
    const [imponibile, setImponibile] = useState(null);
    const [impostoSostitutiva, setImpostoSostitutiva] = useState(null);
    const [contributiCalcolati, setContributiCalcolati] = useState(null);

    const calcolaNetto = () => {
        const importoLordoNum = parseFloat(importoLordo);
        const coeffReddNum = parseFloat(coeffRedd);
        const impostaSostitutivaNum = parseFloat(impostaSostitutiva);
        const contributiInpsNum = parseFloat(contributiInps);

        const imponibileCalcolato = importoLordoNum * (coeffReddNum / 100);
        setImponibile(imponibileCalcolato);

        const impostoSostitutivaCalcolata = imponibileCalcolato * (impostaSostitutivaNum / 100);
        setImpostoSostitutiva(impostoSostitutivaCalcolata);

        const contributiInpsCalcolati = imponibileCalcolato * (contributiInpsNum / 100);
        setContributiCalcolati(contributiInpsCalcolati);

        const nettoCalcolato = importoLordoNum - impostoSostitutivaCalcolata - contributiInpsCalcolati;
        const nettoFinale = Math.round(nettoCalcolato * 100) / 100;
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
        <div className="flex flex-col lg:flex-row justify-center items-stretch max-w-6xl mx-auto p-6 space-y-6 lg:space-y-0 lg:space-x-10">
            <motion.div
                className="w-full lg:w-1/2 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Dati Fattura</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Importo Lordo (incl. rivalsa INPS)</label>
                        <input
                            type="number"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                            placeholder="€ 1000"
                            value={importoLordo}
                            onChange={(e) => setImportoLordo(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Coefficiente di Redditività</label>
                        <select
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Contributi INPS</label>
                        <input
                            type="number"
                            placeholder="26.07%"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none cursor-not-allowed"
                            disabled
                            value={contributiInps}
                            onChange={(e) => setContributiInps(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Imposta Sostitutiva</label>
                        <select
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
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
                </div>

                <div className="flex items-center justify-between mt-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">Totale lordo</h2>
                        <h2 className="text-3xl font-bold text-blue-500">€ {importoLordo || 0}</h2>
                    </div>
                    <motion.button
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Calcola il netto
                    </motion.button>
                </div>
            </motion.div>

            <motion.div
                className="w-full lg:w-1/2 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-green-500 pb-2">Riepilogo Fattura</h2>

                {netto !== null ? (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ResultItem label="Importo Lordo" value={importoLordo} />
                        <ResultItem label="Imponibile" value={imponibile} />
                        <ResultItem label="Imposta Sostitutiva" value={impostoSostitutiva} />
                        <ResultItem label="Contributi INPS" value={contributiCalcolati} />
                        <div className="pt-4 border-t-2 border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-700 mb-2">Totale Netto</h2>
                            <motion.p
                                className="text-4xl font-bold text-green-500"
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 0.5 }}
                            >
                                € {netto}
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="text-center text-gray-500 mt-10">
                        <p className="text-xl">Inserisci i dati per vedere il riepilogo.</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

const ResultItem = ({ label, value }) => (
    <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-700">{label}:</h3>
        <p className="text-lg text-gray-600">€ {value}</p>
    </div>
);