// TAB
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
// accordion
const acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
