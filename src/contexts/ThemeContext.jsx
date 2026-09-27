import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('theme');
        if (saved && (saved === 'light' || saved === 'dark')) {
            return saved;
        }
    } catch {
        // ignore
    }
    return 'dark';
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // ignore
        }
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
