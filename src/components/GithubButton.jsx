import { FaGithub } from 'react-icons/fa';

export const GithubStarButton = () => {
    return (
        <a
            href="https://github.com/ricciviero/fattura-netta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-300 rounded-full shadow-md hover:shadow-lg hover:from-gray-100 hover:to-white transition-all duration-300 ease-in-out"
            aria-label="Star on GitHub"
        >
            {/* GitHub Icon (stessa per mobile e desktop) */}
            <FaGithub className="w-5 h-5 text-gray-700 mr-2" />

            {/* Testo e Conteggio delle Stelle (versioni condizionali) */}
            <div className="hidden sm:flex sm:items-center">
                <span className="font-medium text-gray-800">Star on GitHub</span>

            </div>

            {/* Versione Mobile */}
            <div className="flex sm:hidden items-center">
                <span className="font-medium text-gray-800 text-sm">Star</span>

            </div>
        </a>
    );
};