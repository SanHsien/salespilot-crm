import React, { useState } from 'react';
import { useI18n } from '../contexts/I18nContext';

const FAQItem = ({ id, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const questionId = `faq-q-${id}`;
    const answerId = `faq-a-${id}`;

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
                type="button"
                id={questionId}
                className="faq-question"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls={answerId}
            >
                <span>{question}</span>
                <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div
                    id={answerId}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={questionId}
                >
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const { t } = useI18n();
    const questions = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
    ];

    return (
        <section className="faq-section" id="faq" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">{t('faq.badge') || 'FAQ'}</span>
                    <h2 id="faq-title" className="section-header__title">
                        {t('faq.title')}
                    </h2>
                </div>
                <div className="faq-list" role="list">
                    {questions.map((item, index) => (
                        <FAQItem key={index} id={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
