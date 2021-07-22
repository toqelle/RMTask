let listElement = document.querySelector('.list');
const url = 'https://jsonplaceholder.typicode.com/albums';
const listSize = 10;

let jsondata;

//Response
async function fetchAlbums() {
    const response = await fetch(url)
    .then(res => res.json())
    .then((res) => jsondata = res)
    .then((res) => appendData(res));
}

//Create list_elem inside list with data
function appendData(data) {
    for (let i = 0; i < listSize; i++) {
        listElement.innerHTML += `<div id="Id${data[i].id}" onClick=changeData(${data[i].id}) class="list__elem showId">${data[i].id}</div>`;
    }
    
}

//Change data inside list_elem
function changeData(id){
    let tag = `#Id${id}`;
    let element = document.querySelector(tag);
    if(element.classList.contains('showId')){
        element.innerHTML = `${jsondata[id-1].title}`;
        element.classList.remove('showId');
        element.classList.add('showTitle');
        return;
    }
    if(element.classList.contains('showTitle')){
        element.innerHTML = `${jsondata[id-1].id}`;
        element.classList.add('showId');
        element.classList.remove('showTitle');
        return;
    }   
}

//Add even list's view style to list
function changeViewStyle(){
    if(document.querySelector('#changeViewStyleBtn').checked){
        document.querySelector('.list').classList.add('list--even');
        
    }
    else{
        document.querySelector('.list').classList.remove('list--even');
    }
}

fetchAlbums();