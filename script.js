//1)
function fetchData() {
  blicanje();
  fetch(
    "https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new"
  ) // preko fatcha ubacivanje brojeva sa apia
    .then((response) => response.text())
    .then((broj) => {
      const randomBroj = parseInt(broj.trim()); // dobijanje random broja
      binarniPrikaz(randomBroj);
    })
    .catch((error) => {
      console.error("Error ", error);
      blicanje(); // hvatanje greske i prikaz zutih
    });
}

setInterval(fetchData, 1000); // resetovanje novog broja svake sekunde

function blicanje() {
  const binarniSemafor = document.getElementById("binarniSemafor");
  binarniSemafor.innerHTML = ""; // cicscenje starog broja

  for (let i = 0; i < 8; i++) {
    const krug = document.createElement("div");
    krug.classList.add("krug", "zuti");
    binarniSemafor.appendChild(krug);
  }
}

// 2) Transformacija binarnog broja u boje kugli

//funkcija prikaza binarnog broja od dobijenog broja
function binarniPrikaz(bibroj) {
  const binarniSemafor = document.getElementById("binarniSemafor");
  binarniSemafor.innerHTML = ""; // Clear previous display

  // Convert the bibroj to binary and pad it to 8 digits
  let binariString = bibroj.toString(2).padStart(8, "0");

  // loop kroz broj
  for (let br of binariString) {
    const krug = document.createElement("div");
    krug.classList.add("krug");

    if (br === "0") {
      // dodavanje klasa u odnosu da li su 0 ili 1
      krug.classList.add("crveni");
    } else {
      krug.classList.add("zeleni");
    }

    binarniSemafor.appendChild(krug);
  }
}
