import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useI18n } from '../contexts/I18nContext';
import { NAV_LINKS, BRAND } from '../data/navigation';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { locale, toggleLocale, t } = useI18n();

    // Map href to translation key suffix
    const getLabel = (link) => {
        const href = link.href;
        if (href.includes('features')) return t('nav.features');
        if (href.includes('pricing')) return t('nav.pricing');
        if (href.includes('faq')) return t('nav.faq');
        if (href.includes('use-cases')) return t('nav.useCases');
        if (href.includes('social-proof')) return t('nav.socialProof');
        return link.label || '';
    };

    return (
        <header className="navbar" role="banner">
            <div className="navbar__inner container">
                <a href="/" className="navbar__brand" aria-label={`${BRAND.name} 首頁`}>
                    <span className="navbar__logo" aria-hidden="true">◆</span>
                    <span className="navbar__brand-name">{BRAND.name}</span>
                </a>

                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                    aria-label="切換導覽選單"
                >
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                    <span className="navbar__toggle-bar" />
                </button>

                <nav
                    id="nav-menu"
                    className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
                    role="navigation"
                    aria-label="主要導覽"
                >
                    <ul className="navbar__list">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className="navbar__item">
                                <a href={link.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                                    {getLabel(link)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__actions">
                        <button
                            className="btn-icon"
                            onClick={toggleTheme}
                            aria-label={theme === 'light' ? '切換至深色模式' : '切換至淺色模式'}
                            title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                        <button
                            className="btn-icon"
                            onClick={toggleLocale}
                            aria-label={locale === 'zh' ? 'Switch to English' : '切換至繁體中文'}
                            title={locale === 'zh' ? 'English' : '繁體中文'}
                        >
                            {locale === 'zh' ? 'EN' : '中'}
                        </button>
                        <a href="#demo" className="btn btn--primary btn--sm navbar__cta">
                            {t('nav.getStarted')}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
