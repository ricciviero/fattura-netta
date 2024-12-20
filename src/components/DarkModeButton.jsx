import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const DarkModeButton = () => {
    // Stato per controllare la modalità scura
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Legge il valore da localStorage se disponibile
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    // Funzione per alternare la modalità scura
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            // Aggiorna il tema nel localStorage
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    // Effetto per applicare la classe di modalità scura al root element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow hover:shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-300"
        >
            {isDarkMode ? (
                <FaMoon className="w-6 h-6" />
            ) : (
                <FaSun className="w-6 h-6 text-yellow-500" />
            )}
        </button>
    );
};