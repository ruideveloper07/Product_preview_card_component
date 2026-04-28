const button = document.querySelector('.add-to-cart');

button.addEventListener('click', () => {
    button.textContent = 'Added to Cart';
}); 

let counter = 0;

button.addEventListener('click', () => {
    counter++;
    button.textContent = `Added to Cart (${counter})`;
});