export const Privacy = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 md:p-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Privacy Policy di Fattura Netta
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Questa Privacy Policy descrive come vengono raccolte, utilizzate e condivise le informazioni quando accedi e utilizzi l’applicazione web Fattura Netta (di seguito “l’Applicazione”).
                    </p>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Tipologia di Dati Raccolti
                        </h2>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                            <li className="mb-2">
                                <strong>Dati di Navigazione:</strong> Durante la tua visita all’Applicazione, raccogliamo informazioni anonime relative alle page view attraverso il servizio di analisi integrato di Vercel. Questi dati sono utilizzati esclusivamente per finalità statistiche e per migliorare l’esperienza dell’utente.
                            </li>
                            <li>
                                Non raccogliamo né salviamo dati personali, né viene effettuata alcuna registrazione da parte degli utenti (ad esempio login o profili).
                            </li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Finalità del Trattamento dei Dati
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            I dati raccolti tramite gli analytics di Vercel vengono utilizzati al solo scopo di monitorare le visite alle pagine e migliorare l’Applicazione. Nessuna informazione viene utilizzata per identificare personalmente i visitatori o per finalità di marketing.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Base Giuridica del Trattamento
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Il trattamento dei dati di navigazione avviene sulla base del legittimo interesse a monitorare e ottimizzare l’Applicazione e a garantire un servizio efficiente e sicuro.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Modalità di Trattamento
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            I dati raccolti sono trattati in forma anonima e aggregata. Non raccogliamo, memorizziamo né condividiamo informazioni personali.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Condivisione dei Dati
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Non condividiamo i dati raccolti con terze parti, fatta eccezione per l’analisi statistica fornita da Vercel. Tali dati sono utilizzati esclusivamente per monitorare l’uso dell’Applicazione e migliorare le prestazioni.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Cookie e Tecnologie Simili
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            L’Applicazione non utilizza cookie per la raccolta di dati personali. Tuttavia, il servizio di analisi fornito da Vercel potrebbe utilizzare cookie tecnici per fornire analisi anonime. Questi cookie non permettono di identificare personalmente gli utenti.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Diritti degli Utenti
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Poiché non raccogliamo né trattiamo dati personali, l’applicazione non consente l’accesso, la modifica o la cancellazione di tali dati. Tuttavia, per qualsiasi domanda relativa al trattamento dei dati anonimi, è possibile contattarci all’indirizzo <a href="mailto:riccardo@riccardociviero.com" className="text-blue-500 hover:underline">riccardo@riccardociviero.com</a>.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Modifiche alla Privacy Policy
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Potremmo aggiornare questa Privacy Policy nel tempo per rispecchiare eventuali cambiamenti nell’Applicazione o nei servizi di monitoraggio forniti. Gli utenti saranno informati di tali modifiche mediante avvisi pubblicati sull’Applicazione.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                            Contatti
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Per ulteriori informazioni o domande sulla presente Privacy Policy, puoi contattarci a:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                            <li>Email: <a href="mailto:riccardo@riccardociviero.com" className="text-blue-500 hover:underline">riccardo@riccardociviero.com</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};