import { FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-extrabold text-white hover:text-blue-200 transition-colors duration-300 ease-in-out">
                            Fattura Netta
                            <span className="text-yellow-300 ml-2 text-lg font-semibold">Dev mode</span>
                        </h1>
                    </div>

                    <div className="flex items-center">
                        <a
                            href="https://github.com/ricciviero/fattura-netta"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-full 
                                     text-white bg-transparent hover:bg-white hover:text-purple-600 transition-all duration-300 ease-in-out
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform hover:scale-105"
                        >
                            <FaGithub className="mr-2 h-6 w-6" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}