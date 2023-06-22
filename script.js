
const numberRegex = /^[0-9]+$/;
const inputField = document.getElementById("inputField");

/* Block C to F */
celciusfahrenheit = () =>{
    let input = document.getElementById('inputC').value;
    let hasil = (input * (9/5)) + 32;
    document.getElementById('hasilF').value = hasil;
    document.getElementById('catatanCF').value = "Rumus Konfersi: (C*(9/5))+32";
}

/* Block F to C */
fahrenheitcelcius = () =>{
    let input = document.getElementById('inputF').value;
    let hasil = (input-32) / (9/5);
    document.getElementById('hasilC').value = hasil;
    document.getElementById('catatanFC').value = "Rumus Konfersi: (F-32)/(9/5)";
}

/* Block C to R */
celciusreamur = () =>{
    let input = document.getElementById('inputCR').value;
    let hasil = (4/5) * input;
    document.getElementById('hasilR').value = hasil;
    document.getElementById('catatanCR').value = "Rumus Konfersi: (4/5)*C";
}

/* Block R to C */
reamurcelcius = () =>{
    let input = document.getElementById('inputR').value;
    let hasil = (input) / (4/5);
    document.getElementById('hasilRC').value = hasil;
    document.getElementById('catatanRC').value = "Rumus Konfersi: C/(4/5)";
}

hapusall = () =>{
    //clear blok C to F
    document.getElementById('inputC').value = "display: none";
    document.getElementById('hasilF').value = "";
    document.getElementById('catatanCF').value = "";

    //clear blok F to C
    document.getElementById('inputF').value = "display: none";
    document.getElementById('hasilC').value = "";
    document.getElementById('catatanFC').value = "";

    //clear blok C to R
    document.getElementById('inputCR').value = "display: none";
    document.getElementById('hasilR').value = "";
    document.getElementById('catatanCR').value = "";

    //clear blok R to C
    document.getElementById('inputR').value = "display: none";
    document.getElementById('hasilRC').value = "";
    document.getElementById('catatanRC').value = "";
}