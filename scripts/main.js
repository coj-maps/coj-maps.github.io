const el = {
    menuButton: document.querySelectorAll('main .menu .button-round'),
};

const pages = ['info', '2023-08', '2023-07', '2023-05', 'more']

var currentSection = 'info';
getCurrentSection();

el.menuButton.forEach(menuButton => menuButton.addEventListener('click', function (event) {
    const id = event.target.dataset.id;

    switchSection(id);

    window.location.hash = id;
}));

function getCurrentSection() {
    const hash = window.location.hash.replace('#', '');
    switchSection(hash);
}

function switchSection(id) {
    const elSectionOld = document.querySelector('main .menu .button-round[data-id="' + currentSection + '"]');
    elSectionOld.classList.remove('active');
    const elMenuOld = document.querySelector('main .section[data-id="' + currentSection + '"]');
    elMenuOld.classList.remove('active');

    if (pages.includes(id) === false) {
        id = 'info';
    }
    currentSection = id;

    const elSectionNew = document.querySelector('main .section[data-id="' + currentSection + '"]');
    elSectionNew.classList.add('active');
    const elMenuNew = document.querySelector('main .menu .button-round[data-id="' + currentSection + '"]');
    elMenuNew.classList.add('active');
}