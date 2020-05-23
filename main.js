const dinos = [
  {
    id: 'dino1',
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 92,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
  },
  {
    id: 'dino2',
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Michael',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
  },
  {
    id: 'dino3',
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Luke',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
  },
  {
    id: 'dino4',
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 100,
    imageUrl: 'https://media.wired.com/photos/590a5551f5d3a93367708fcf/master/pass/165517482-featured.jpg'
  },
  {
    id: 'dino5',
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
  },
  {
    id: 'dino6',
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
  },
  {
    id: 'dino7',
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Matt',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
  },
  {
    id: 'dino8',
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Michael',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
  },
  {
    id: 'dino9',
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Matt',
    adventures: [],
    health: 22,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
  }
];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const feedThisDinoEvent = (e) => {
  const dinoId = e.target.closest('.dino-card').id;
  const dinoIndex = dinos.findIndex(dino => dino.id === dinoId);

  if (dinos[dinoIndex].health === 100) return;

  dinos[dinoIndex].health += 10;

  if (dinos[dinoIndex].health > 100) dinos[dinoIndex].health = 100;

  createDinoCards(dinos);
};

const feedEvents = () => {
  const feedButtons = document.querySelectorAll('.feed-button');
  for (let i = 0; i < feedButtons.length; i++) {
    feedButtons[i].addEventListener('click', feedThisDinoEvent);
  }
};

const createDinoCards = (dinoCollection) => {
  let domString = '<div class="row row-cols-1 row-cols-md-2">';

  for (let i = 0; i < dinoCollection.length; i++) {
    const dino = dinoCollection[i];
    domString += `
      <div class="col mb-4">
        <div id="${dino.id}" class="card dino-card">
          <img class="card-img-top" src="${dino.imageUrl}" alt="Picture of the ${dino.type} ${dino.name}">
          <div class="card-body">
            <div class="row">
              <h5 class="card-title">${dino.name}</h5>
            </div>
            <div class="row">
              <h6 class="">${dino.health} HP</h6>
            </div>
            <div class="row">
              <h6 class="">${dino.age}</h6>
            </div>
            <p class="card-text">TODO: list of dinos adventures</p>
          </div>
          <div class="card-footer">
            <div class="row mb-2">
              <button type="button" class="m-auto btn btn-outline-primary feed-button"><i class="fas fa-drumstick-bite"></i></button>
              <button type="button" class="m-auto btn btn-outline-secondary"><i class="far fa-hand-paper"></i></button>
            </div>
            <div class="row">
              <button type="button" class="m-auto btn btn-outline-warning"><i class="fas fa-binoculars"></i></button>
              <button type="button" class="m-auto btn btn-outline-danger"><i class="fas fa-globe-europe"></i></button>
            </div>
          </div>
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    `;
  }

  domString += '</div>';

  printToDom('#dinoContainer', domString);

  feedEvents();
};

const createNewDino = (e) => {
  e.preventDefault();

  const newDino = {
    id: `${Date.now()}`,
    name: document.querySelector('#dino-name').value,
    type: document.querySelector('#dino-type').value,
    age: document.querySelector('#dino-age').value,
    owner: document.querySelector('#dino-owner').value,
    adventures: [],
    health: 100, // biz rule
    imageUrl: document.querySelector('#dino-image').value,
  };

  document.querySelector('#collapseOne').classList.remove('show');
  document.querySelector('#new-dino-form').reset();

  dinos.unshift(newDino);

  createDinoCards(dinos);
};

const init = () => {
  createDinoCards(dinos);
  document.querySelector('#submit-new-dino').addEventListener('click', createNewDino);
};

init();
