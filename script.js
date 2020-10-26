const result = document.querySelector('#result');
const counter = document.querySelector('#count');

function count(){
    let usd = document.querySelector('#usd-value').value;
    let cif = document.querySelector('#cif').value;
    let cif1 = document.querySelector('#cif');
    let countInput = usd * cif;
    result.innerHTML = `
        <p><strong>CIF = ${cif}</strong><p>
        <p><strong>Rp. ${countInput}</strong></p>`
    cif1.focus();
}

counter.addEventListener("click", () => {
    count();
})

document.addEventListener("keydown", function(e) {
    if (e.code == 'Enter' || e.code == 'NumpadEnter') {
      count();
      let usd = document.querySelector('#usd-value')
      let cif = document.querySelector('#cif');
      usd.focus();
    cif.focus();
    }
    else {
        let cif = document.querySelector('#cif');
        cif.focus();
    }
  });

