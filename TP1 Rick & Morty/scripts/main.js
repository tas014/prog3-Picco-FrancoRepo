//P1 obtener datos de la API y mostrarlos

const appendElements = (characters, emptyGrid) => {
    const $grid=document.querySelector('.grid');
    if (emptyGrid){
      $grid.innerHTML=null;
      document.querySelector('.subtitle').innerHTML=`Welcome to the "${characters[0].name}"-verse!`
    }
    characters.forEach(character => {
      const cardItemHTML=cardItem(character);
      $grid.innerHTML+=cardItemHTML;
    });
    const botones=document.querySelectorAll('.button');
    botones.forEach((element,index) => {
      element.setAttribute('data',JSON.stringify(characters[index-1]));
      element.addEventListener('click',async() =>{
        executeModal(element);
      })
    })
}

const executeModal= (datos) => {
  const {image,name,species,status,origin,episode:episodes}=JSON.parse(datos.getAttribute('data'));
  const {name:planet,url}=origin;
  const eps=Array.from(episodes.keys()).join(', ')
  document.getElementById("shadower").setAttribute("class","modal is-active");
  document.querySelector('.modalimg').innerHTML=`<img src="${image}" alt="${name}">`;
  document.querySelector('.modaldata').innerHTML=`
  <h1>${name}</h1>
  <ul>
    <li>Species: ${species}</li>
    <li>Planet: <a target="_blank" href="${url}">${planet}</a></li>
    <li>Appears in chapters: ${eps}</li>
    <li>Status: ${status}</li>
  </ul>
  `
}

const close = () =>{
  document.getElementById("shadower").setAttribute('class','modal');
}

const getCharacters = async (baseURL,a,b) => {
    //analizar esto despues
    const Range = Array.from({length: b-a+1,}, (_,index)=> index+1).join(',');
    const url=`${baseURL}character/${Range}`;
    const response=await fetch(url);
    const characters=await response.json();

    return characters;
}

const cardItem = props => {

    const {image,name,species,origin} = props;
    const {name:planet,url}=origin;

    return `
    <div class="column is-one-quarter">
            <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="${image}" alt="${name}">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="leftside-content-card">
                    <figure class="mini-img">
                      <img src="${image}" alt="${name}">
                    </figure>
                    <button class="button cardclick">See more</button>
                  </div>
                  <div class="rightside-content-card">
                    <h1 class="custom-card-title">${name}</h1>
                    <h2 class="custom-card-subtitle">${species}</h2>
                  </div>
                </div>
              </div>
        </div>`
}

const getCharactersByQuery = async(BaseURL,string) => {
  const url=`${BaseURL}character/?name=${string}`;
  const content =await fetch(url);
  const characters = await content.json();

  return characters
}

const main= async() => {

  //P1 obtener datos de la API y mostrarlos
  const baseURL='https://rickandmortyapi.com/api/';

  const characters=await getCharacters(baseURL,1,30);
  appendElements(characters);

  //P2 crear un buscador de personajes
  const clicker=document.querySelector('.doneded');

  clicker.addEventListener('click', async(event) => {
    event.preventDefault();
    const searchbar=document.querySelector('.searcher');
    const query=searchbar.value;

    const charactersByQuery = await getCharactersByQuery(baseURL,query)
    appendElements(charactersByQuery.results,true);
  })
  document.querySelector('.modal-close').addEventListener('click',async()=>{close()})
  };

main();