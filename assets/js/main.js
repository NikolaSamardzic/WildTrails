
var prefixOnline = '/WildTrails/';
var prefixsPage = 'pages/';

setTimeout(endLoadScreen,1500);
setTimeout(()=>$("#loader").remove(),2200);

const arrayNavigation = ["Početna","Usluge","Meni","Saveti","Kontakt","O autoru"];

const arrayNavigationLinks = [`${prefixOnline}index.html`,`${prefixOnline+prefixsPage}usluge.html`,`${prefixOnline+prefixsPage}meni.html`,`${prefixOnline+prefixsPage}saveti.html`,`${prefixOnline+prefixsPage}kontakt.html`,`${prefixOnline+prefixsPage}autor.html`];

function endLoadScreen(){
    $("#loader").addClass("loader-opac");
    $("body").removeClass("pre-loader");
}
var ulElement = document.querySelector("header nav ul");
var ulElementPhone = document.querySelector("#phone-nav-js");
navigation(arrayNavigation,arrayNavigationLinks,ulElement);
navigation(arrayNavigation,arrayNavigationLinks,ulElementPhone);
var mainNavATags = document.querySelectorAll(".nav-a-tag");
var mainNavDivTags = document.querySelectorAll(".nav-div-tag");
var phoneNav = document.querySelector(".phone-nav");

function navigation(arrayNavigation,arrayNavigationLinks,ulElement){


    for(index in arrayNavigation){
        var liTag = document.createElement("li");
        var aTag = document.createElement("a");
        var divTag = document.createElement("div");
        divTag.classList.add("nav-div-tag");

        aTag.setAttribute("href",`${arrayNavigationLinks[index]}`);
        aTag.classList.add("nav-a-tag");
        aTag.textContent = `${arrayNavigation[index]}`;

        liTag.appendChild(aTag);
        liTag.appendChild(divTag);
        ulElement.appendChild(liTag);
    }
}

var hamburgerNavButtonOpen = document.querySelector("header nav button");
var hamburgerNavButtonClose = document.querySelector("#hamburger-close");

hamburgerNavButtonOpen.addEventListener("click",function(e){

    $("body").addClass("pre-loader");
    phoneNav.classList.add("display-phone-nav");

    phoneNav.classList.add("nav-entering");
    phoneNav.classList.remove("nav-leaving");
    e.stopPropagation();
});

hamburgerNavButtonClose.addEventListener("click",function(){

    phoneNav.classList.remove("nav-entering");
    phoneNav.classList.add("nav-leaving");

    $("body").removeClass("pre-loader");
    setTimeout(() => {
        phoneNav.classList.remove("display-phone-nav");

    }, 450);

})

for(let i=0; i<mainNavATags.length;i++){
    mainNavATags[i].addEventListener("mouseover", function(){
        mainNavDivTags[i].classList.add("progress-left-to-right");
    });
}

for(let i=0; i<mainNavATags.length;i++){
    mainNavATags[i].addEventListener("mouseout", function(){
        mainNavDivTags[i].classList.remove("progress-left-to-right");
        mainNavDivTags[i].classList.add("progress-right-to-left");
        setTimeout(() => {
            mainNavDivTags[i].classList.remove("progress-right-to-left");
        }, 500);
    });
}