import React, { useState, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext';

const CookieConsent = () => {
    const { t } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent) {
                setIsVisible(true);
            }
        } catch {
            setIsVisible(false);
        }
    }, []);

    const handleAccept = () => {
        try {
            localStorage.setItem('cookieConsent', 'true');
        } catch {
            // ignore
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <aside
            className="cookie-consent"
            role="region"
            aria-label="Cookie Consent"
        >
            <p>{t('cookie.message')}</p>
            <button type="button" onClick={handleAccept}>
                {t('cookie.accept')}
            </button>
        </aside>
    );
};

export default CookieConsent;
