const grid = document.getElementById("charactersGrid");
const pageInput = document.getElementById("pageInput");

async function loadCharacters() {
  const page = pageInput.value || 1;
  const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}&limit=20`);
  const data = await response.json();

  grid.innerHTML = "";
  data.items.forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h2>${char.name}</h2>
      <p class="ki">Ki: ${char.ki || "Unknown"}</p>
      <p class="race">Raça: ${char.race || "Unknown"}</p>
    `;
    grid.appendChild(card);
  });
}

// Carrega a primeira página automaticamente
loadCharacters();