const introLogo = document.querySelector('.Logo');
introLogo.classList.add('IntroLogo');
let timerLogo = setInterval(ShowLogo, 2500);


const introHamburguerMenu = document.querySelector('.HamburguerMenu');
introHamburguerMenu.classList.add('IntroHamburguerMenu');
let timerHamburguerMenu = setInterval(ShowHamburguerMenu, 2000);


const introHeroClipped = document.querySelector('.HeroClipped');

introHeroClipped.classList.add('IntroHeroClipped');
let timerHeroClipped = setInterval(ShowHeroClipped, 3000);



function ShowLogo(){
    introLogo.classList.remove('IntroLogo');
    clearInterval(timerLogo);
    timerLogo = null;
}
function ShowHamburguerMenu(){
    introHamburguerMenu.classList.remove('IntroHamburguerMenu');
    clearInterval(timerHamburguerMenu);
    timerHamburguerMenu = null;
}
function ShowHeroClipped(){
    introHeroClipped.classList.remove('IntroHeroClipped');
    clearInterval(timerHeroClipped);
    timerHeroClipped = null;
}