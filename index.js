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
        return "QmI1" !== t.u ? alert("Incorrect First Move") : "TmM0" !== t.p ? alert("Incorrect Second Move") : "UmQy" !== t.x ? alert("Incorrect Third Move") : window.location.href = 'locked.html';
    }))
})();


