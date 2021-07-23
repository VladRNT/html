document.querySelectorAll('.tab-trigger').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        document.querySelectorAll('.servicesmenu__element').forEach(
            (child) => child.classList.remove('services__item-active')
        );
        document.querySelectorAll('.tab-trigger').forEach(
            (child) => child.classList.remove('tab-trigger__active')
        );
        item.classList.add('tab-trigger__active');
        document.getElementById(id).classList.add('services__item-active');
    }) 
);
document.querySelector('.tab-trigger').click();