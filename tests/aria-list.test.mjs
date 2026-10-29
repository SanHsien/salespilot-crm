import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { start, stop, renderLocalized } from './render.mjs';

before(start);
after(stop);

function findListDirectChildren(html) {
    const results = [];
    const tagRegex = /<(\/?)(\w[\w-]*)([^>]*)>/g;
    let match;
    const tokens = [];
    while ((match = tagRegex.exec(html)) !== null) {
        const isClose = match[1] === '/';
        const tagName = match[2].toLowerCase();
        const rawAttrs = match[3];
        const isSelfClosing = isClose ? false : rawAttrs.trim().endsWith('/');
        tokens.push({ isClose, tagName, rawAttrs, isSelfClosing });
    }

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (!token.isClose && /\brole=(["'])list\1/.test(token.rawAttrs)) {
            const containerTag = token.tagName;
            const containerAttrs = token.rawAttrs;
            const directChildren = [];
            const stack = [containerTag];
            for (let j = i + 1; j < tokens.length; j++) {
                const sub = tokens[j];
                if (sub.isClose) {
                    if (stack[stack.length - 1] === sub.tagName) {
                        stack.pop();
                        if (stack.length === 0) break;
                    }
                } else {
                    if (stack.length === 1) {
                        directChildren.push({
                            tagName: sub.tagName,
                            attrs: sub.rawAttrs,
                            isLiOrListitem: sub.tagName === 'li' || /\brole=(["'])listitem\1/.test(sub.rawAttrs),
                        });
                    }
                    if (!sub.isSelfClosing) {
                        stack.push(sub.tagName);
                    }
                }
            }
            results.push({ containerTag, containerAttrs, directChildren });
        }
    }
    return results;
}

const listComponents = [
    { path: '/src/components/FAQ.jsx', name: 'FAQ' },
    { path: '/src/components/Features.jsx', name: 'Features' },
    { path: '/src/components/Pricing.jsx', name: 'Pricing' },
    { path: '/src/components/UseCases.jsx', name: 'UseCases' },
    { path: '/src/components/Footer.jsx', name: 'Footer' },
    { path: '/src/components/Hero.jsx', name: 'Hero' },
    { path: '/src/components/SocialProof.jsx', name: 'SocialProof' },
];

for (const { path, name } of listComponents) {
    test(`each role="list" in ${name} has direct children with listitem semantics or li tag`, async () => {
        for (const locale of ['zh', 'en']) {
            const html = await renderLocalized(path, locale);
            const lists = findListDirectChildren(html);
            assert.ok(lists.length > 0, `${name} (${locale}) should contain at least one role="list" container`);
            for (const list of lists) {
                assert.ok(list.directChildren.length > 0, `${name} (${locale}) list container should not be empty`);
                for (const child of list.directChildren) {
                    assert.ok(
                        child.isLiOrListitem,
                        `${name} (${locale}) direct child <${child.tagName}> must be <li> or carry role="listitem" (got: ${child.attrs})`
                    );
                }
            }
        }
    });
}
