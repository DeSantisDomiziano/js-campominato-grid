const btn_el = document.getElementById('play')
const main_el = document.querySelector('.row.py-3')
console.log(btn_el);
const dif_easy = 100
const dif_medium = 81
const dif_hard = 49

btn_el.addEventListener('click', function() {
    const option_el = document.getElementById('difficulty').value
    console.log(option_el);

    if(option_el === 'easy') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_easy; i++) {
            const square_el = `<div class="col dif_easy">${i + 1}</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }
    } else if (option_el === 'medium') {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_medium; i++) {
            const square_el = `<div class="col dif_medium">${i + 1}</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }        
    } else {
        main_el.innerHTML = ""
        for(let i = 0; i < dif_hard; i++) {
            const square_el = `<div class="col dif_hard">${i + 1}</div>`
            main_el.insertAdjacentHTML('beforeend', square_el)
        }
    }    
} )