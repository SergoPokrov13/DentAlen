const items = document.querySelectorAll('.services__item');

const btnTreatment = document.getElementById('btnTreatment');
const btnOrthopedics = document.getElementById('btnOrthopedics');
const btnHygiene = document.getElementById('btnHygiene');
const btnWhitening = document.getElementById('btnWhitening');

const treatment = document.getElementById('treatment');
const orthopedics = document.getElementById('orthopedics');
const hygiene = document.getElementById('hygiene');
const whitening = document.getElementById('whitening')


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

btnTreatment.addEventListener('click',e =>{
    treatment.classList.add('services__block-two_active');

    orthopedics.classList.remove('services__block-two_active')
    hygiene.classList.remove('services__block-two_active')
    whitening.classList.remove('services__block-two_active')
})

btnOrthopedics.addEventListener('click',e =>{
    orthopedics.classList.add('services__block-two_active');

    treatment.classList.remove('services__block-two_active')
    hygiene.classList.remove('services__block-two_active')
    whitening.classList.remove('services__block-two_active')
})

btnHygiene.addEventListener('click',e =>{
    hygiene.classList.add('services__block-two_active');

    treatment.classList.remove('services__block-two_active')
    orthopedics.classList.remove('services__block-two_active')
    whitening.classList.remove('services__block-two_active')
})

btnWhitening.addEventListener('click',e =>{
    whitening.classList.add('services__block-two_active');
    
    treatment.classList.remove('services__block-two_active')
    hygiene.classList.remove('services__block-two_active')
    orthopedics.classList.remove('services__block-two_active')
})