// Your code goes here

const nav = document.querySelector('.nav-container');
const mainNav = document.querySelector('.main-navigation');
const home = document.querySelector('.home');
const body = document.querySelector('body');
const h2 = document.querySelector('.intro h2');
const img = document.querySelector('img');
const btn = document.querySelector('div .btn');




document.addEventListener('wheel', event =>{

    body.style.transition = "1s ease-in-out";
    body.style.backgroundColor = 'rgba(230, 212, 92, .4)';
    setTimeout(e => body.style.backgroundColor = 'white' ,1200
    );
});


nav.addEventListener('mouseenter', event => {
    mainNav.style.transition = ".7s ease-in-out";
    mainNav.style.backgroundColor = '#e6d35c';
});
nav.addEventListener('mouseleave', event => {
    mainNav.style.backgroundColor = ""
});


document.addEventListener("keydown", event => {

    if (event.keyCode == 27 ) {
        home.style.backgroundColor = 'rgba(84, 84, 84, .3)';
    }
});

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

function play() {
    h2.textContent = 'Home Of The Bus!!!';
};  
  window.addEventListener('focus', play);

window.addEventListener('resize', function(event){

    let newHeight = window.innerHeight;
    if(event){
        window.prompt("oh boy i sure am a useful popup!",`new height is: ${newHeight}!`);
    } 
});

document.addEventListener('scroll', event => {
    let style = document.createElement("style");
  style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);
  //im sure i couldve found better use for this but got lazy
})

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('dblclick', e => { 
        e.target.innerHTML = 'no! :D'
    })
    item.addEventListener('click', e => {
        e.target.innerHTML = 'Sign Me Up!'
    })
  })
document.querySelectorAll('.nav-link').forEach(item =>{
    item.addEventListener('click', event => {
        event.preventDefault()
        console.log('sorry the link is broken!')
    })   
})