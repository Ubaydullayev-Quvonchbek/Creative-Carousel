let i = 0
const Container = document.querySelector('.images')
const Prev = document.getElementById('Prev')
const Next = document.getElementById('Next')
Prev.onclick = () => {
    i += 45
    Container.style.transform = `perspective(1000px) rotateY(${i}deg)`;
}
Next.onclick = () => {
    i -= 45
    Container.style.transform = `perspective(1000px) rotateY(${i}deg)`;
}