const el = {
    menuButton: document.querySelectorAll('main .menu .button-round'),
};

var currentSection = 'info';

el.menuButton.forEach(menuButton => menuButton.addEventListener('click', function (event) {
    const id = event.target.dataset.id;

    const elSectionOld = document.querySelector('main .menu .button-round[data-id="' + currentSection + '"]');
    elSectionOld.classList.remove('active');
    const elMenuOld = document.querySelector('main .section[data-id="' + currentSection + '"]');
    elMenuOld.classList.remove('active');

    currentSection = id;

    const elSectionNew = document.querySelector('main .section[data-id="' + currentSection + '"]');
    elSectionNew.classList.add('active');
    const elMenuNew = document.querySelector('main .menu .button-round[data-id="' + currentSection + '"]');
    elMenuNew.classList.add('active');
}));
