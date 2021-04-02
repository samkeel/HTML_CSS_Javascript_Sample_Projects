const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e)  {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // get button x, y location
        // subtract button left from viewport x
        const xInside = x - buttonLeft;
        // subtract button top from viewport y
        const yInside = y - buttonTop;
        
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        // remove circle class from DOM
        setTimeout(() => circle.remove(), 500)
    });
});
