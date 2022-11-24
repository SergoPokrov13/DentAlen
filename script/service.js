const items = document.querySelectorAll('.services__item');

const btnTreatment = document.getElementById('btnTreatment');
const btnOrthopedics = document.getElementById('btnOrthopedics');
const btnHygiene = document.getElementById('btnHygiene');
const btnWhitening = document.getElementById('btnWhitening');

const treatment = document.getElementById('treatment');
const orthopedics = document.getElementById('orthopedics');
const hygiene = document.getElementById('hygiene');
const whitening = document.getElementById('whitening')

const treatmentTitle = document.getElementById('treatmentTitle');
const orthopedicsTitle = document.getElementById('orthopedicsTitle');
const hygAndWhitTitle = document.getElementById('hygAndWhitTitle');

const treatmentBlock = document.getElementById('treatmentBlock');
const orthopedicsBlock = document.getElementById('orthopedicsBlock');
const hygAndWhitBlock = document.getElementById('hygAndWhitBlock')


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


treatmentTitle.addEventListener('click',e =>{
    if(treatmentBlock.classList.contains('price__block-price_active')){
        treatmentBlock.classList.remove('price__block-price_active')
    }else{
        treatmentBlock.classList.add('price__block-price_active');

        orthopedicsBlock.classList.remove('price__block-price_active')
        hygAndWhitBlock.classList.remove('price__block-price_active')
    }
})

orthopedicsTitle.addEventListener('click',e =>{
    if(orthopedicsBlock.classList.contains('price__block-price_active')){
        orthopedicsBlock.classList.remove('price__block-price_active')
    }else{
        orthopedicsBlock.classList.add('price__block-price_active');

        hygAndWhitBlock.classList.remove('price__block-price_active')
        treatmentBlock.classList.remove('price__block-price_active')
    }
})

hygAndWhitTitle.addEventListener('click',e =>{
    if(hygAndWhitBlock.classList.contains('price__block-price_active')){
        hygAndWhitBlock.classList.remove('price__block-price_active')
    }else{
        hygAndWhitBlock.classList.add('price__block-price_active');

        orthopedicsBlock.classList.remove('price__block-price_active')
        treatmentBlock.classList.remove('price__block-price_active')
    }
})

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