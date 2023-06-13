let i = 0
const Container = document.querySelector('.container')
const Prev = document.querySelector('.Prev')
const Next = document.querySelector('.Next')
Prev.onclick = () => {
    i += 45
    Container.style.transform = `perspective(1000px) rotateY(${i}deg)`;
}
Next.onclick = () => {
    i -= 45
    Container.style.transform = `perspective(1000px) rotateY(${i}deg)`;
}