import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scrollToHash } from '../src/lib/scrollToHash.js';

const fakeDoc = (ids) => {
    const scrolled = [];
    return {
        scrolled,
        getElementById: (id) => (ids.includes(id) ? { scrollIntoView: () => scrolled.push(id) } : null),
    };
};

test('scrolls to the section named by the URL hash', () => {
    const doc = fakeDoc(['pricing']);
    assert.equal(scrollToHash('#pricing', doc), true);
    assert.deepEqual(doc.scrolled, ['pricing']);
});

test('decodes percent-encoded ids and ignores empty or unknown hashes', () => {
    const doc = fakeDoc(['use-cases', '客戶']);
    assert.equal(scrollToHash('#%E5%AE%A2%E6%88%B6', doc), true);
    assert.equal(scrollToHash('#nope', doc), false);
    assert.equal(scrollToHash('#', doc), false);
    assert.equal(scrollToHash('', doc), false);
    assert.equal(scrollToHash('#%E0%A4%A', doc), false); // malformed escape must not throw
    assert.deepEqual(doc.scrolled, ['客戶']);
});
