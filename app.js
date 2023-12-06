const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-ceram',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-ceram',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

//將圖片陣列以亂數排序
cardArray.sort(() => Math.random() - 0.5)

const girdDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

//建立遊戲的初始畫面，12組圖片蓋牌顯示，並在被點擊的圖片加入 click 屬性，加入 img 標籤
function createBoard() {
    for (i=0; i<cardArray.length; i++) {
        let card = document.createElement("img")
        card.setAttribute("src","images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipcard)
        girdDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll("img")  //querySelectorAll 會將選取的東西放入一個 array
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]
    console.log("check for match ! ")
    if(optionOneId === optionTwoId) {
        alert("You have clicked the same image !")
    }
    if (cardChosen[0] == cardChosen[1]) {
        alert("You found a match ! ")
        cards[optionOneId].setAttribute("src","images/white.png")
        cards[optionTwoId].setAttribute("src","images/white.png")
        cards[optionOneId].removeEventListener("click",flipcard)
        cards[optionTwoId].removeEventListener("click",flipcard)
        cardsWon.push(cardChosen)
        console.log(cardsWon)
    } else {
        cards[optionOneId].setAttribute("src","images/blank.png")
        cards[optionTwoId].setAttribute("src","images/blank.png")
    }
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = "congratulations you found all !"
    }
}

//翻牌設定，點擊的圖片顯示對應的圖片，選到的圖片數=2時，500毫秒後觸發 checkMatch 函數
function flipcard(){
    const cardId = this.getAttribute("data-id")
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    console.log(cardChosen)
    console.log(cardChosenIds)
    
    this.setAttribute("src",cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}