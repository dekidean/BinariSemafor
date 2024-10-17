//1)
function fetchData() {
  blicanje();
  fetch(
    "https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new"
  ) // preko fatcha ubacivanje brojeva sa apia
    .then((response) => response.text())
    .then((broj) => {
      const randomBroj = parseInt(broj.trim()); // dobijanje random broja
      binarniSemafor(randomBroj);
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
