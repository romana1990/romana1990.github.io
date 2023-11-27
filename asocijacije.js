(async () => {
    await new Promise((e => window.addEventListener("load", e))), document.querySelector("form").addEventListener("submit", (e => {
        e.preventDefault();
        const r = {
                u: "input[name=m1]",
                p: "input[name=m2]",
                x: "input[name=m3]"
            },
            t = {};
        for (const e in r) t[e] = btoa(document.querySelector(r[e]).value).replace(/=/g, "");
        return "YnVsZ2Frb3Y" !== t.u ? alert("Incorrect First Column") : "cGljYQ" !== t.p ? alert("Incorrect Second Column") : "YmF0YQ" !== t.x ? alert("Incorrect Third Column") : window.location.href = 'final.html';
    }))
})();


