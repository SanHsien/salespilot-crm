import React, { createContext, useState, useEffect, useContext } from 'react';
import { locales } from '../data/locales';

const I18nContext = createContext();

const getInitialLocale = () => {
    try {
        const saved = localStorage.getItem('locale');
        if (saved && (saved === 'zh' || saved === 'en')) {
            return saved;
        }
    } catch {
        // ignore localStorage access errors
    }
    return 'zh';
};

export const I18nProvider = ({ children }) => {
    const [locale, setLocale] = useState(getInitialLocale);

    useEffect(() => {
        try {
            localStorage.setItem('locale', locale);
        } catch {
            // ignore
        }
        document.documentElement.lang = locale === 'zh' ? 'zh-Hant' : 'en';
    }, [locale]);

    const resolveKey = (loc, keys) => {
        let val = locales[loc];
        for (const k of keys) {
            if (val === undefined || val === null) return undefined;
            val = val[k];
        }
        return val;
    };

    const t = (key) => {
        if (!key) return '';
        const keys = key.split('.');
        let val = resolveKey(locale, keys);
        if (val === undefined || val === null) {
            val = resolveKey(locale === 'zh' ? 'en' : 'zh', keys);
        }
        return (val === undefined || val === null) ? key : val;
    };

    const toggleLocale = () => {
        setLocale((prev) => (prev === 'zh' ? 'en' : 'zh'));
    };

    return (
        <I18nContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => useContext(I18nContext);
