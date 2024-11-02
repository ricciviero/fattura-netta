import { motion } from 'framer-motion';
import { FaCalculator, FaClipboardList, FaChartLine } from 'react-icons/fa';

export const HowTo = () => {
    const steps = [
        {
            icon: <FaClipboardList className="w-8 h-8 text-blue-500" />,
            title: "Inserisci i Dati",
            description: "Compila i campi con l'importo lordo, il coefficiente di redditività e l'imposta sostitutiva."
        },
        {
            icon: <FaCalculator className="w-8 h-8 text-green-500" />,
            title: "Calcola",
            description: "Clicca su 'Calcola il netto' per elaborare i dati inseriti."
        },
        {
            icon: <FaChartLine className="w-8 h-8 text-purple-500" />,
            title: "Visualizza il Risultato",
            description: "Esamina il riepilogo dettagliato della tua fattura, incluso l'importo netto finale."
        }
    ];

    return (
        <motion.div
            className="w-full max-w-6xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-2 border-yellow-500 pb-2">
                Come Usare Fattura Netta
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                        <div className="mb-4 p-4 bg-gray-100 rounded-full">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-700">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                ))}
            </div>
            <motion.div
                className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <p className="text-blue-700">
                    <strong>Suggerimento:</strong> Usa questo strumento per capire come funziona la differenza tra importo netto, ovvero il guadagno, e il lordo delle tue fatture,
                    tenendo conto dei contributi INPS e delle imposte sostitutive. <strong>Ovviamente questo tool è utile solamente se sei in regime forfettario e se sei iscritto alla cassa previdenziale INPS. </strong>
                </p>
            </motion.div>
        </motion.div>
    );
};