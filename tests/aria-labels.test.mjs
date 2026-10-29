import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { start, stop, renderLocalized, load } from './render.mjs';

before(start);
after(stop);

const cjkPattern = /[\u4e00-\u9fa5]/;

function extractAriaLabels(html) {
    const matches = [...html.matchAll(/\baria-label="([^"]*)"/g)];
    return matches.map((m) => m[1]);
}

test('Navbar aria-labels use locale data (English has no CJK, Chinese keeps original)', async () => {
    const enHtml = await renderLocalized('/src/components/Navbar.jsx', 'en');
    const zhHtml = await renderLocalized('/src/components/Navbar.jsx', 'zh');

    // Language switch button intentionally indicates the target language in its label ("切換至繁體中文" in English view)
    const enAriaLabels = extractAriaLabels(enHtml).filter((label) => label !== '切換至繁體中文');
    assert.ok(enAriaLabels.length > 0, 'Navbar should have aria-labels');
    for (const label of enAriaLabels) {
        assert.doesNotMatch(label, cjkPattern, `Navbar English aria-label "${label}" should not contain CJK`);
    }

    assert.match(enHtml, /aria-label="Toggle navigation menu"/);
    assert.match(zhHtml, /aria-label="切換導覽選單"/);

    assert.match(enHtml, /aria-label="Main navigation"/);
    assert.match(zhHtml, /aria-label="主要導覽"/);
});

test('Footer social aria-label uses locale data (English has no CJK, Chinese keeps original)', async () => {
    const enHtml = await renderLocalized('/src/components/Footer.jsx', 'en');
    const zhHtml = await renderLocalized('/src/components/Footer.jsx', 'zh');

    const enAriaLabels = extractAriaLabels(enHtml);
    assert.ok(enAriaLabels.length > 0, 'Footer should have aria-labels');
    for (const label of enAriaLabels) {
        assert.doesNotMatch(label, cjkPattern, `Footer English aria-label "${label}" should not contain CJK`);
    }

    assert.match(enHtml, /aria-label="Social media links"/);
    assert.match(zhHtml, /aria-label="社群媒體連結"/);
});

test('Hero stats aria-label uses locale data (English has no CJK, Chinese keeps original)', async () => {
    const enHtml = await renderLocalized('/src/components/Hero.jsx', 'en');
    const zhHtml = await renderLocalized('/src/components/Hero.jsx', 'zh');

    const enAriaLabels = extractAriaLabels(enHtml);
    assert.ok(enAriaLabels.length > 0, 'Hero should have aria-labels');
    for (const label of enAriaLabels) {
        assert.doesNotMatch(label, cjkPattern, `Hero English aria-label "${label}" should not contain CJK`);
    }

    assert.match(enHtml, /aria-label="Key performance metrics"/);
    assert.match(zhHtml, /aria-label="關鍵成效數據"/);
});

test('SocialProof logos aria-label uses locale data (English has no CJK, Chinese keeps original)', async () => {
    const enHtml = await renderLocalized('/src/components/SocialProof.jsx', 'en');
    const zhHtml = await renderLocalized('/src/components/SocialProof.jsx', 'zh');

    // Client company names (logo.name) are raw data, allowlisted from CJK check
    const { SOCIAL_PROOF } = await load('/src/data/socialProof.js');
    const allowedCompanyNames = new Set(SOCIAL_PROOF.logos.map((l) => l.name));

    const enAriaLabels = extractAriaLabels(enHtml).filter((label) => !allowedCompanyNames.has(label));
    assert.ok(enAriaLabels.length > 0, 'SocialProof should have aria-labels besides company names');
    for (const label of enAriaLabels) {
        assert.doesNotMatch(label, cjkPattern, `SocialProof English aria-label "${label}" should not contain CJK`);
    }

    assert.match(enHtml, /aria-label="Client companies"/);
    assert.match(zhHtml, /aria-label="客戶企業列表"/);
});

// Every page component, not just the four fixed above: a hard-coded Chinese aria-label added to any
// of them later must fail here. Allowed exceptions: the language switch names its target language,
// and client company names (SOCIAL_PROOF.logos[].name) are raw data.
const PAGE_COMPONENTS = ['Navbar', 'Hero', 'SocialProof', 'Features', 'UseCases', 'Pricing', 'FAQ', 'CallToAction', 'Footer', 'CookieConsent'];
const hanPattern = /\p{Script=Han}/u;

test('no English page component renders a CJK aria-label', async () => {
    const { SOCIAL_PROOF } = await load('/src/data/socialProof.js');
    const allowed = new Set(['切換至繁體中文', ...SOCIAL_PROOF.logos.map((l) => l.name)]);
    for (const name of PAGE_COMPONENTS) {
        const html = await renderLocalized(`/src/components/${name}.jsx`, 'en');
        for (const label of extractAriaLabels(html)) {
            if (allowed.has(label)) continue;
            assert.doesNotMatch(label, hanPattern, `${name} English aria-label "${label}" should not contain CJK`);
        }
    }
});
