const makeShotBtn = document.getElementById('btn-kick')

const character = {
    name: 'pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressBar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressBar: document.getElementById('progressbar-enemy')
}

function init() {
    console.log(`Let's start!`)
    RenderHP(character)
    RenderHP(enemy)
}

init();

function RenderHP(person) {
    person.elHP.innerText = `${person.damageHP} / ${person.defaultHP}`;
    person.elProgressBar.style.width = `${person.damageHP}%`
}

makeShotBtn.addEventListener('click', () => {
    changeHP(Math.ceil(Math.random() * 20), character)
    changeHP(Math.ceil(Math.random() * 20), enemy)
})

function changeHP(dmg, person) {
    person.damageHP -= dmg;
    if (person.damageHP <= 0) {
        person.damageHP = 0;
        makeShotBtn.disabled = true;
    }
    RenderHP(person);
}
