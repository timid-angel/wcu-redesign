const bannerContainer = document.getElementById('bannerContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const imgArr = [
    document.getElementById('imageOne'),
    document.getElementById('imageTwo'),
    document.getElementById('imageThree'),
    document.getElementById('imageFour')
]
let currIdx = 0

rightBtn.addEventListener('click', () => {
    imgArr[currIdx].classList.remove('block')
    imgArr[currIdx].classList.add('hidden')
    currIdx += 1
    if (currIdx === imgArr.length) {
        currIdx = 0
    }
    imgArr[currIdx].classList.remove('hidden')
    imgArr[currIdx].classList.add('block')
})

leftBtn.addEventListener('click', () => {
    imgArr[currIdx].classList.remove('block')
    imgArr[currIdx].classList.add('hidden')
    currIdx -= 1
    if (currIdx === -1) {
        currIdx = imgArr.length - 1
    }
    imgArr[currIdx].classList.remove('hidden')
    imgArr[currIdx].classList.add('block')
})