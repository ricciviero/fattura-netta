import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="mt-12 sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-50">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center">© 2024 Tutti i diritti riservati.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">

                        <li>
                            <Link
                                to="/privacy"
                                className="ml-3 hover:text-blue-200 transition-colors duration-300 ease-in-out"
                            >
                                Privacy
                            </Link>
                        </li>

                    </ul>
                </div>
            </footer>

        </>
    );
};