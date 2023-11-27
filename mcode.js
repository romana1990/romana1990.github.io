(async () => {
    await new Promise((e => window.addEventListener("load", e))), document.querySelector("form").addEventListener("submit", (e => {
        e.preventDefault();
        const r = {
                u: "input[name=P1]",
            },
            t = {};
        for (const e in r) t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
        return "dnMwMzNvag" !== t.u ? alert("Ups. Try again.") : window.location.href = 'asocijacije.html';
    }))
})();


