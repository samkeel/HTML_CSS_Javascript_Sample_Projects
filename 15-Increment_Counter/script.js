const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText="0"

    const updateCounter = () => {
        // '+' at start of string variable to change type to number
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target){
            // math.ceil to round the number
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})