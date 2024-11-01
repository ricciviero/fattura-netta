export const UserInput = () => {
    return (
        <div className="max-w-md ml-10 mt-10 p-6 bg-white rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Inserisci i dati della fattura</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Importo Lordo</label>
                <input
                    type="number"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    placeholder="Inserisci l'importo lordo"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Coefficiente di Redditività</label>
                <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value>67%</option>
                    <option value>78%</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Imposta Sostitutiva</label>
                <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value>5%</option>
                    <option value>15%</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Inserire Rivalsa INPS</label>
                <input
                    type="checkbox"
                    className="mt-1"
                />
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        Totale lordo
                    </h2>

                    <h2 className="text-3xl font-bold mb-1">
                        € 1.000,00
                    </h2>
                </div>

                <button className="bg-gray-200 font-bold py-2 px-4 rounded shadow-sm">
                    Calcola il netto
                </button>
            </div>
        </div>
    );
};
