export const Footer = ({ setCurrentPage }) => {
    return (
        <>
            <footer className="mt-12 sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-50">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center">© 2024 Tutti i diritti riservati.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">

                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                                onClick={() => setCurrentPage("Privacy")}
                            >
                                Privacy Policy
                            </a>
                        </li>

                    </ul>
                </div>
            </footer>

        </>
    );
};