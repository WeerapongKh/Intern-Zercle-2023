import { PokeList, Results } from "./model/pokemon.model";
const lists__pokemons = document.getElementById(
  "lists__pokemons"
) as HTMLElement;
const buttons = document.getElementById("buttons") as HTMLElement;

let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
let btnNext: string;
let btnPrevious: string;
let templateHtml: string;
console.log("pre nxt");

const GetPokemons = async (url: any): Promise<void> => {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    DataPokemons(results.results);

    btnNext = results.next
      ? `<button class="btn" data-url=${results.next}>nxt</button>`
      : "";
    btnPrevious = results.previous
      ? `<button class="btn" data-url=${results.previous}>pre</button>`
      : "";
    buttons.innerHTML = btnPrevious + "  " + "  " + btnNext;
  } catch (error) {
    console.log(error);
  }
};

GetPokemons(urlPokemon);

const DataPokemons = async (data: { url: string }[]): Promise<void> => {
  lists__pokemons.innerHTML = "";
  try {
    for (let index of data) {
      const resp = await fetch(index.url);
      const resul = await resp.json();
      console.log(resul);

      templateHtml = `
            
            <div class=listName>
            <a href="http://" target="_blank" rel="noopener noreferrer">${resul.id} ${resul.name}</a></div>
            `;
      lists__pokemons.innerHTML += templateHtml;
    }
  } catch (error) {
    console.log(error);
  }
};

buttons.addEventListener("click", (e: Event) => {
  if ((e.target as HTMLElement).classList.contains("btn")) {
    let value = (e.target as HTMLElement).dataset.url;
    console.log(value);
    GetPokemons(value);
  }
});
