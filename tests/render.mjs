// Renders the real JSX components to static HTML through Vite's SSR loader, so the
// tests exercise the same transform the build uses. No extra dependencies.
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

let server;

export async function start() {
    server = await createServer({
        appType: 'custom',
        logLevel: 'silent',
        server: { middlewareMode: true, open: false },
    });
}

export async function stop() {
    await server?.close();
}

export async function load(path) {
    return server.ssrLoadModule(path);
}

export async function renderLocalized(componentPath, locale) {
    const { ThemeProvider } = await load('/src/contexts/ThemeContext.jsx');
    const { I18nProvider } = await load('/src/contexts/I18nContext.jsx');
    const Component = (await load(componentPath)).default;
    // The provider reads the saved locale from localStorage; stub it for SSR.
    globalThis.localStorage = {
        getItem: (key) => (key === 'locale' ? locale : null),
        setItem() {},
    };
    try {
        return renderToStaticMarkup(
            React.createElement(
                ThemeProvider,
                null,
                React.createElement(I18nProvider, null, React.createElement(Component)),
            ),
        );
    } finally {
        delete globalThis.localStorage;
    }
}
