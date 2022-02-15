document.querySelectorAll(".card__faq__container").forEach(button => {
    button.addEventListener('click', () => {
        var content = button.nextElementSibling;
        var icon = button.querySelector(".card__faq__icon")

        icon.classList.toggle('rotate-180')
        button.classList.toggle("card__faq__active");

        if (button.classList.contains('card__faq__active')) {
            content.style.maxHeight = content.scrollHeight + "px"
        } else {
            content.style.maxHeight = 0;
        }
    })
})