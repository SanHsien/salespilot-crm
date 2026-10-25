// The page shows a loading screen first, so the sections do not exist yet when the
// browser tries to honour `/#pricing`. Call this once they are mounted.
export function scrollToHash(hash, doc = document) {
    if (!hash || hash === '#') return false;
    let id = hash.slice(1);
    try {
        id = decodeURIComponent(id);
    } catch {
        // malformed escape: fall back to the raw text
    }
    const target = doc.getElementById(id);
    if (!target) return false;
    target.scrollIntoView();
    return true;
}
