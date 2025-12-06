(function(){ const spanE1 = document.querySelector("main h2 span")
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
let index = 0;
let currentTxt = txtArr[index].split("");

function writeTxt(){
    spanE1.textContent += currentTxt.shift();
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    }
    else{
        currentTxt = spanE1.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
function deleteTxt(){
    currentTxt.pop();
    spanE1.textContent = currentTxt.join("")
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));
    }
    else{
        index=(index+1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
writeTxt();
})();

const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
})

function scrollCheck(){
    let browserScrollY = window.scrollY? window.scrollY : window.pageYOffset //scrollY를 써도 되지만, 사용이 불가할경우 pageYOffset 사용
    if (browserScrollY > 0){
        headerE1.classList.add("active");
    }
    else{
        headerE1.classList.remove("active");
    }
}

const heightOfHeader = headerE1.getBoundingClientRect().bottom - headerE1.getBoundingClientRect().top;

const animationMove = function(selector){
    const targetE1 = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetE1.getBoundingClientRect().top + browserScrollY - heightOfHeader;
    window.scrollTo({top:targetScrollY, behavior: 'smooth'});
}

const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for(let i=0; i<scrollMoveE1.length; i++){
    
    scrollMoveE1[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    })
}