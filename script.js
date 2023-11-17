const result = document.querySelector('#result');
const counter = document.querySelector('#count');
const ganti = document.querySelector('#ganti');
const usd = document.querySelector('#usd-value');
const diskon = document.querySelector('#diskon');
const gantiDiskon = document.querySelector('#gantiDiskon')

let usdValue = usd.value
let gantiState = false;

let diskonValue = diskon.value;
let stateDiskon = false;

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

gantiDiskon.addEventListener("click", () => {
    if (!stateDiskon) {
        stateDiskon = true;
        diskon.style.pointerEvents = "all";
        diskon.focus();
        gantiDiskon.innerText = "OK"
    } else {
        stateDiskon = false;
        diskon.style.pointerEvents = "none";
        gantiDiskon.innerText = "Ganti Diskon"
    }
})

function count() {
    let usd = document.querySelector('#usd-value').value;
    let cif = document.querySelector('#cif').value;
    let cif1 = document.querySelector('#cif');
    let diskon = document.querySelector('#diskon').value;
    let countInput = usd * cif;
    let countDiskon = countInput * (diskon/100);
    let rounded = countInput.toFixed(2);
    let addCommas = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let roundedDiskon = countDiskon.toFixed(2);
    let perfectDiskon = roundedDiskon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    result.innerHTML = `
        <p><strong>CIF = ${cif}</strong><p>
        <p><strong>Harga Penyerahan Rp. ${addCommas}</strong>
        <button id="copy">COPY</button></p>
        <p><strong>Diskon Rp. ${perfectDiskon}</strong>
        <button id="copy2">COPY</button></p>
        <p>*Klik COPY atau SALIN untuk menyalin nilai</p>`
    cif1.focus();

    async function copy() {
        try {
          await navigator.clipboard.writeText(rounded);
          console.log('Harga disalin');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    }

    async function copyDiskon() {
        try {
          await navigator.clipboard.writeText(roundedDiskon);
          console.log('Harga disalin');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    }
    
    document.addEventListener("keydown", function (e) {
    if (!gantiState){
        if (e.key == 'C' || e.code == 'KeyC') {
            copy();
        }
    }
});
      
    const salin = document.querySelector('#copy');
    salin.addEventListener("click", () => {
        copy();
    })

    const salinDiskon = document.querySelector('#copy2');
    salinDiskon.addEventListener("click", () => {
        copyDiskon()
    })

    const notes = document.getElementById('notes');
    /*notes.innerHTML = `
    <p>*Klik COPY atau tekan tombol "C" pada keyboard </br>
    untuk menyalin</p>`
    */
}

counter.addEventListener("click", () => {
    count();
})

document.addEventListener("keydown", function (e) {
    if (!gantiState && !stateDiskon){
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            count();
            let cif = document.querySelector('#cif');
            counter.focus();
            cif.focus();
        }

        if (e.key == 'C' || e.code == 'KeyC') {
            return;
        }

        else {
            let cif = document.querySelector('#cif');
            cif.focus();
        }
    }

    

    else {
        return;
    }
});