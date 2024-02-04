const bannerContainer = document.getElementById('bannerContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const imgArr = ['1.png', '2.jpg', '3.jpg', '4.jpg']
let currIdx = 0

rightBtn.addEventListener('click', () => {
    currIdx += 1
    if (currIdx === imgArr.length) {
        currIdx = 0
    }
    bannerContainer.innerHTML = `<img src="images/${imgArr[currIdx]}" alt="graduates" class="w-full block">`
})

leftBtn.addEventListener('click', () => {
    currIdx -= 1
    if (currIdx === -1) {
        currIdx = imgArr.length - 1
    }
    bannerContainer.innerHTML = `<img src="images/${imgArr[currIdx]}" alt="graduates" class="w-full block">`
})