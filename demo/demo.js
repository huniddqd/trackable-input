window.addEventListener('load', () => {
    // animate the svg elements
    const inputElement = document.querySelector('input');
    const visualizer = document.querySelector('.red-line');
    const pupile1 = document.querySelector('#pupile1');
    const pupile2 = document.querySelector('#pupile2');
    inputElement.addEventListener('input', () => {

        //move the carrot
        visualizer.style.left = `${30 + inputElement.getOffset()}px`;
        
        //move the pupils
        const ratio = inputElement.getRatio();
        const offset = 60 * ratio - 30;
        pupile1.style.transform = `translate(${offset}px, 0)`;
        pupile2.style.transform = `translate(${offset}px, 0)`;
    });
});