window.addEventListener('load', function() {

    // setTimeout to simulate the delay from a real page load
    setTimeout(lazyLoad, 1000);

});

function lazyLoad() {
    var card_images = document.querySelectorAll('.card-image');

    card_images.forEach(function(card_image) {
        var image_url = card_image.getAttribute('data-image-full');
        var content_image = card_image.querySelector('img');


        content_image.src = image_url;


        content_image.addEventListener('load', function() {

            card_image.style.backgroundImage = 'url(' + image_url + ')';

            card_image.className = card_image.className + ' is-loaded';
        });

    });

}












const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);



const likeButtons = document.querySelectorAll(".like");

likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const likeCount = button.querySelector(".like-count");
        let count = parseInt(likeCount.textContent);
        count++;
        likeCount.textContent = count;
        button.classList.toggle("liked");
    });
});




function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show-mobile');
}