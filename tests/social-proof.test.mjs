import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { start, stop, renderLocalized } from './render.mjs';

before(start);
after(stop);

test('English testimonial uses no CJK quotation marks or commas', async () => {
    const html = await renderLocalized('/src/components/SocialProof.jsx', 'en');
    assert.doesNotMatch(html, /[「」，]/);
});

test('Chinese testimonial keeps its corner quotes and comma', async () => {
    const html = await renderLocalized('/src/components/SocialProof.jsx', 'zh');
    assert.match(html, /「導入 SalesPilot/);
    assert.match(html, /業務副總，博星科技/);
});
