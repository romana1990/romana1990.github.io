(async () => {
    await new Promise((e => window.addEventListener("load", e))), document.querySelector("form").addEventListener("submit", (e => {
        e.preventDefault();
        const r = {
                u: "input[name=m1]",
            },
            t = {};
        for (const e in r) t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
        return "TWFqc3RvciBpIG1hcmdhcml0YQ" !== t.u ? alert("Ups. Try again.") : window.location.href = 'pozivnica.html';
    }))
})();


