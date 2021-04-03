const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const rippleButtons = document.querySelectorAll('.ripple');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five',
    'Message Six',
];

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification(
    // pass message,
    // pass type
));

rippleButtons.forEach(rippleButton => {
    rippleButton.addEventListener('click', function (e) {

        const x = e.clientX;
        const y = e.clientY;

        const rippleButtonTop = e.target.offsetTop;
        const rippleButtonLeft = e.target.offsetLeft;

        const xInside = x - rippleButtonLeft;
        const yInside = y - rippleButtonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 250)
    });
});

function createNotification(message = null, type= null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    // random example messages and types
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notif);

    // message clear after 3 seconds
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
};

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
};