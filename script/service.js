const items = document.querySelectorAll('.services__item');

items.forEach(i => {
    i.addEventListener('click', e => {
        addActiveLink(e);
    });
})

const addActiveLink = (activelink) => {
    items.forEach(i => {
        if (i == activelink.target) {
            activelink.target.classList.add('services__item_active');
        }else{
            i.classList.remove('services__item_active')
        }
    })
}