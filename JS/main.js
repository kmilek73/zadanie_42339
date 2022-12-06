
document.querySelector('button').onclick = function() {
    let imie = document.getElementById('name').value;
    document.getElementById("p_name").innerHTML = imie; 
    console.log(imie);
    let nazwisko = document.getElementById('surname').value;
    document.getElementById("p_surname").innerHTML = nazwisko; 
    console.log(nazwisko);
    let telefon = document.getElementById('phone').value;
    document.getElementById("p_phone").innerHTML = telefon; 
    console.log(telefon);
}

