const Container = document.querySelector('.container')
const Prev = document.querySelector('.Prev')
const Next = document.querySelector('.Next')
let i = 0;
Prev.onclick = () => {
    i = i + 45;
    rotate();
}
Next.onclick = () => {
    i = i - 45;
    rotate();
}
const rotate = () => {
    Container.style.transform = `perspective(1000px) rotateY(${i}deg)`;
}