import { Link } from "react-router-dom";
import RicTag from "./RicTag";

export const Footer = () => {
    return (
        <>
            <footer className="mt-12 sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-50">
                <div className="w-full mx-auto max-w-screen-xl p-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="order-1 sm:order-1">
                            <RicTag />
                        </div>

                        <ul className="order-2 sm:order-3 flex items-center space-x-6 text-sm font-medium text-white">
                            <li>
                                <Link
                                    to="/privacy"
                                    className="hover:text-blue-200 transition-colors duration-300 ease-in-out px-2 py-1 rounded-md hover:bg-white/10"
                                >
                                    Privacy
                                </Link>
                            </li>
                        </ul>

                        <span className="order-3 sm:order-2 text-sm text-white">
                            © 2024 Tutti i diritti riservati.
                        </span>
                    </div>
                </div>
            </footer>

        </>
    );
};