let textSpeed = document.querySelector('#textSpeed');
let elem = document.querySelector('.elem');
let speed;
let text = "Hello World !";
let index = 1;


textSpeed.addEventListener('input', (e) => {
    // console.log(e.target.value);
    speed = 200 / e.target.value;
});

const sliceText = () => {
    elem.innerHTML = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 1;
    }

    setTimeout(sliceText, speed);
}
sliceText();