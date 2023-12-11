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

const slider = document.querySelector('.slider');

function activate(e) {
    const items = document.querySelectorAll('.item');
    e.target.matches('.next') && slider.append(items[0]);
    e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);