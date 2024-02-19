const buttonAdv = document.getElementById('button')
const idNo = document.getElementById('adviceNumber')
const actualAdv = document.getElementById('advicetext')


async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const {slip:{id,advice}} = await res.json();
    idNo.innerText = id;
    actualAdv.innerText = advice;
}

buttonAdv.addEventListener('click', getAdvice)
