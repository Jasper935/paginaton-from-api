import fetchApi from "./js/api/fetchApi";
const div = document.querySelector('.list')
const cards = document.querySelector('.cards')
const pag = document.querySelector('.list')
const buttons = document.querySelector('.buttons')
buttons.addEventListener('click', onClickButton)
let arr;

const countOfpages = 9;

function onClickButton(evt) {

    fetchApi(evt.target.textContent).then(res => {

        const pages = Math.ceil(res.length / 9)
        pagination(pages)
        arr = res
        createMarkUp(0, countOfpages)

    })



}

function pagination(pages) {

    let markUp = ''
    for (let i = 1; i <= pages; i++) {
        if (i === 1) {
            markUp += `<button class="for_pagination active">${i}</button>`
        } else {
            markUp += `<button class="for_pagination">${i}</button>`
        }

    }
    div.innerHTML = markUp
    pag.addEventListener('click', onClick)


}
function onClick(evt) {
    const numberOfButton = evt.target.textContent
    const endEl = Number(numberOfButton) * countOfpages
    const startEl = endEl - countOfpages

    createMarkUp(startEl, endEl)
    const children = [...evt.currentTarget.children]


    children.find(child => child.classList.contains('active')).classList.remove('active')
    evt.target.classList.add('active')
}



function createMarkUp(startPage = 0, endPage) {


    let markUp = ''
    const defaultImg = `https://aif-s3.aif.ru/images/025/611/46e179ca51577524e8a295748abbdbc1.jpg`
    endPage = endPage < arr.length ? endPage : arr.length
    for (let i = startPage; i < endPage; i++) {


        markUp += `<div><img src="${arr[i].image ? arr[i].image : defaultImg}" alt="${arr[i].name}" width='250'>
    <p>Имя: ${arr[i].name}</p>
    <p>День рождения: ${arr[i].dateOfBirth ? arr[i].dateOfBirth : 'непонятно'}</p>
    <p>Патронус: ${arr[i].patronus ? arr[i].patronus : 'непонятно'}</p>
    </div>`

    }
    cards.innerHTML = markUp
}