function createCard(imageURL, name, ocupation, nicname, category) {
    let img = document.createElement('img');
    img.className = 'img';
    img.src = imageURL;

    let nameSurname = document.createElement('p');
    nameSurname.textContent = name;

    let ocupations = document.createElement('p');
    ocupations.textContent = ocupation;

    let nickName = document.createElement('p');
    nickName.textContent = nicname;

    let categorys = document.createElement('p');
    categorys.textContent = category;

    let newCard = document.createElement('div');
    newCard.className = 'card col-4';

    newCard.append(img, nameSurname, ocupations, nickName, categorys);
    return newCard;

}

function appendCard(card) {
    let parent = document.querySelector('main');
    parent.append(card);

}

async function getRandomCharacter() {
    const requestURL = 'https://www.breakingbadapi.com/api/character/random';
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}
async function getCharacterByID(id) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters/' + id;
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getAllCharacters() {
    const requestURL = 'https://www.breakingbadapi.com/api/characters/';
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getCharactersByName(inputName) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?name=' + inputName;
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getLimitNumber(limitNumber) {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?limit=' + limitNumber;
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getAllFromBreacingBad() {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=breaking';
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}

async function getAllBetterCallSoul() {
    const requestURL = 'https://www.breakingbadapi.com/api/characters?category=better';
    const request = new Request(requestURL, { mode: 'cors' });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    return data;
}



let btnRandom = document.querySelector('.random');
btnRandom.addEventListener('click', function () {
    getRandomCharacter().then(data => {

        let { img, name, occupation, nickname, category } = data[0];

        let card = createCard(img, name, occupation, nickname, category);
        appendCard(card);



    }).catch(error => {
        console.log(error);
    });
})


let btnRemove = document.querySelector('.remove');
let parent = document.querySelector('main')
btnRemove.addEventListener('click', function () {
    while (parent.firstChild) {
        parent.firstChild.remove()
    }

    // let element = document.querySelector('main');
    // element.innerHTML = '';
})

let btnById = document.querySelector('#id');
btnById.addEventListener('click', function () {
    input = prompt('Iveskite ID: ');

    getCharacterByID(input).then(data => {

        let { img, name, occupation, nickname, category } = data[0];
        let card = createCard(img, name, occupation, nickname, category);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})

let btnCharacters = document.querySelector('.allCharacter');
btnCharacters.addEventListener('click', function () {
    getAllCharacters().then(data => {
        data.forEach(item => {
            console.log(item);
            let { img, name, occupation, nickname, category } = item;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });
    }).catch(error => {
        console.log(error);
    });

});

let btnByName = document.querySelector('.byName');
btnByName.addEventListener('click', function () {
    let inputName = prompt('Iveskite raides: ');

    getCharactersByName(inputName).then(data => {
        data.forEach(item => {
            console.log(item);
            let { img, name, occupation, nickname, category } = item;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });
    }).catch(error => {
        console.log(error);
    });
})

let btnLimit = document.querySelector('.limit');
btnLimit.addEventListener('click', function () {
    let limitNumber = prompt('Iveskite skaiciu: ');
    getLimitNumber(limitNumber).then(data => {
        data.forEach(item => {
            console.log(item);
            let { img, name, occupation, nickname, category } = item;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });
    }).catch(error => {
        console.log(error);
    });

})
let btnBracingBad = document.querySelector('.bacingBad');
btnBracingBad.addEventListener('click', function () {
    getAllFromBreacingBad().then(data => {
        data.forEach(item => {
            console.log(item);
            let { img, name, occupation, nickname, category } = item;
            occupation = `${occupation[0]}`;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });

    }).catch(error => {
        console.log(error);
    });
})

let btnBetterSoul = document.querySelector('.callSaul');
btnBetterSoul.addEventListener('click', function () {
    getAllBetterCallSoul().then(data => {
        data.forEach(item => {
            console.log(item);
            let { img, name, occupation, nickname, category } = item;
            occupation = `${occupation[0]}`;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });

    }).catch(error => {
        console.log(error);
    });
})

let btnSeasons = document.querySelector('.seasons');
btnSeasons.addEventListener('click', function () {

    let seas = +prompt('Irasykite sezona: ');

    getAllFromBreacingBad().then(data => {

        let filtered = data.filter(item => item.appearance.includes(seas));
        console.log(filtered);
        filtered.forEach(item => {
            let { img, name, occupation, nickname, category } = item;
            occupation = `${occupation[0]}`;
            let card = createCard(img, name, occupation, nickname, category);
            appendCard(card);
        });
    }).catch(error => {
        console.log(error);
    });

})

function convertDate(date) {
    return new Date(date);
}

let data = [
    { name: "Laura", metai: '07-08-1987' },
    { name: "Tomas", metai: '02-08-1965' },
]
function jauniausias(array) {
    let minIndex = 0;
    array.forEach((el, index) => {
        if (convertDate(el.birthday) > convertDate(array[minIndex].birthday)) {
            minIndex = index;
        }
    });
    return array[minIndex];
}

let btnYongest = document.querySelector('.yongest');
btnYongest.addEventListener('click', function () {

    getAllFromBreacingBad().then(data => {
        let filtered = data.filter(item => item.birthday !== 'Unknown');
        console.log(filtered);
        console.log(jauniausias(filtered));

        let { img, name, occupation, nickname, category } = jauniausias(filtered);
        occupation = `${occupation[0]}`;
        let card = createCard(img, name, occupation, nickname, category);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})

function vyriausias(array) {
    let minIndex = 0;
    array.forEach((el, index) => {
        if (convertDate(el.birthday) < convertDate(array[minIndex].birthday)) {
            minIndex = index;
        }
    });
    return array[minIndex];
}

let btnOlder = document.querySelector('.older');
btnOlder.addEventListener('click', function () {

    getAllFromBreacingBad().then(data => {
        let filtered = data.filter(item => item.birthday !== 'Unknown');
        console.log(filtered);
        console.log(vyriausias(filtered));

        let { img, name, occupation, nickname, category } = vyriausias(filtered);
        occupation = `${occupation[0]}`;
        let card = createCard(img, name, occupation, nickname, category);
        appendCard(card);

    }).catch(error => {
        console.log(error);
    });
})





















