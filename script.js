const result = document.querySelector('#result');
const counter = document.querySelector('#count');
const ganti = document.querySelector('#ganti');
const usd = document.querySelector('#usd-value');

let usdValue = usd.value

let gantiState = false;

ganti.addEventListener("click", () => {
    if (!gantiState) {
        gantiState = true;
        usd.style.pointerEvents = "all";
        usd.focus();
        ganti.innerText = "OK"
    } else {
        gantiState = false;
        usd.style.pointerEvents = "none";
        ganti.innerText = "Ganti USD"
    }
})

function count() {
    let usd = document.querySelector('#usd-value').value;
    let cif = document.querySelector('#cif').value;
    let cif1 = document.querySelector('#cif');
    let countInput = usd * cif;
    let rounded = countInput.toFixed(2);
    let addCommas = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML = `
        <p><strong>CIF = ${cif}</strong><p>
        <p><strong>Rp. ${addCommas}</strong></p>`
    cif1.focus();
}

counter.addEventListener("click", () => {
    count();
})

document.addEventListener("keydown", function (e) {
    if (!gantiState){
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            count();
            let cif = document.querySelector('#cif');
            counter.focus();
            cif.focus();
        } else {
            let cif = document.querySelector('#cif');
            cif.focus();
        }
    }
    else {
        return;
    }
});