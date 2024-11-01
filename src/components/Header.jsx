import { FaGithub } from 'react-icons/fa';

export const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                            Fattura Netta
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">

                        <a
                            href="https://github.com/ricciviero/fattura-netta"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md 
                                     text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 ease-in-out
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                            <FaGithub className="mr-2 h-5 w-5" />

                            GitHub

                        </a>

                    </div>
                </div>
            </div>
        </header>
    );
}