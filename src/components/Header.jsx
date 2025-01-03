import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { GithubStarButton } from './GithubButton';

export const Header = () => {
    return (
        <header className="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link
                            className="text-3xl font-extrabold text-white hover:text-blue-200 transition-colors duration-300 ease-in-out"
                            to="/"
                        >
                            Fattura Netta

                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">

                        <GithubStarButton />

                        <a
                            href="https://twitter.com/ricciviero" // Replace with your actual X (Twitter) profile URL
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full 
                                       border-2 border-white text-white
                                       bg-transparent hover:bg-white hover:text-purple-600 
                                       transition-all duration-300 ease-in-out
                                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white 
                                       transform hover:scale-105"
                            aria-label="X (Twitter) Profile"
                        >
                            <FaXTwitter className="w-6 h-6" />
                        </a>

                    </div>
                </div>
            </div>
        </header>
    );
}