import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { start, stop, load, renderLocalized } from './render.mjs';

before(start);
after(stop);

test('footer links point at the page sections their data declares', async () => {
    for (const locale of ['zh', 'en']) {
        const html = await renderLocalized('/src/components/Footer.jsx', locale);
        const hrefs = [...html.matchAll(/href="([^"]*)" class="footer__column-link"/g)].map((m) => m[1]);
        assert.equal(hrefs[0], '#features', `${locale}: first Product link`);
        assert.equal(hrefs[1], '#pricing', `${locale}: second Product link`);
    }
});

test('footer locale columns line up with the link targets in FOOTER_DATA', async () => {
    const { locales } = await load('/src/data/locales.js');
    const { FOOTER_DATA } = await load('/src/data/footer.js');
    for (const locale of Object.keys(locales)) {
        const cols = locales[locale].footer.cols;
        assert.equal(cols.length, FOOTER_DATA.columns.length, locale);
        cols.forEach((col, i) =>
            assert.equal(col.links.length, FOOTER_DATA.columns[i].links.length, `${locale} column ${i}`),
        );
    }
});
