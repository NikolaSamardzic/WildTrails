
var prefixOnline = '/WildTrails/';
var prefixsPage = 'pages/';

var browserWidth = window.innerWidth;

let url = window.location.pathname;
console.log(url);



const arrayNavigation = ["Home","About","Gallery","Author"];

const arrayNavigationLinks = [`${prefixOnline}index.html`,`${prefixOnline+prefixsPage}about.html`,`${prefixOnline+prefixsPage}gallery.html`,`${prefixOnline+prefixsPage}gallery.html`];




window.onload=function(){




    var ulElement = document.querySelector("header nav ul");
    var ulElementPhone = document.querySelector("#phone-nav-js");

    setTimeout(endLoadScreen,1500);
    setTimeout(()=>$("#loader").remove(),2200);

    navigation(arrayNavigation,arrayNavigationLinks,ulElement);
    navigation(arrayNavigation,arrayNavigationLinks,ulElementPhone);

    var mainNavATags = document.querySelectorAll("header .nav-a-tag");
    var mainNavDivTags = document.querySelectorAll(".nav-div-tag");
    var phoneNav = document.querySelector(".phone-nav");


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


        setTimeout(() => {
            $("body").removeClass("pre-loader");
            phoneNav.classList.remove("display-phone-nav");

        }, 450);

    })

    console.log("duzina " + mainNavATags.length);


    for(let i=0; i<mainNavATags.length;i++){

        let elementHref =  mainNavATags[i].getAttribute("href");
        let fileName = elementHref.split("/").pop();

        console.log(fileName);
        if(`/${fileName}` == url){
            
            mainNavATags[i].style.color = "white";
            mainNavDivTags[i].classList.add("active-link");
            continue;
        }


        mainNavATags[i].addEventListener("mouseover", function(){
            mainNavDivTags[i].classList.add("progress-left-to-right");
        });
    }
    
    for(let i=0; i<mainNavATags.length;i++){

        let elementHref =  mainNavATags[i].getAttribute("href");
        let fileName = elementHref.split("/").pop();

        console.log(fileName);
        if(`/${fileName}` == url){
            continue;
        }

        mainNavATags[i].addEventListener("mouseout", function(){
         mainNavDivTags[i].classList.remove("progress-left-to-right");
            mainNavDivTags[i].classList.add("progress-right-to-left");
            setTimeout(() => {
                mainNavDivTags[i].classList.remove("progress-right-to-left");
            }, 500);
        });
    }

    window.addEventListener("resize", function() {
        browserWidth = window.innerWidth;
    });



    //------ INDEX.HTML ---------
    //---------------------------

    if(url=='/index.html'){

    let positionTextAbout1;
    let positionTextAbout2;

    if(browserWidth>768 && browserWidth < 940){
        let elementTextAbout1 = document.getElementById("text-container-1");
        let elementTextAbout2 = document.getElementById("text-container-2"); 

        let rect1 = elementTextAbout1.getBoundingClientRect();
        let rect2 = elementTextAbout2.getBoundingClientRect();

        positionTextAbout1 = rect1.left;
        positionTextAbout2 = rect2.left;

        $("#mbiking-img-container").css("left", `${positionTextAbout2 - 15}px`);
    }

    window.addEventListener("resize", function() {
        let browserWidthHome = window.innerWidth;
        if(browserWidthHome <940 && browserWidthHome > 768){

            let elementTextAbout1 = document.getElementById("text-container-1");
            let elementTextAbout2 = document.getElementById("text-container-2"); 

            let rect1 = elementTextAbout1.getBoundingClientRect();
            let rect2 = elementTextAbout2.getBoundingClientRect();

            positionTextAbout1 = rect1.left;
            positionTextAbout2 = rect2.left;

            $("#mbiking-img-container").css("left", `${positionTextAbout2}px`);
        }else{
            document.getElementById("mbiking-img-container").style.removeProperty("left");
            document.getElementById("mbiking-img-container").style.removeProperty("right");
        }
    });

    $("#about-container").find("#left-btn").on("click", function(){


        if(browserWidth > 1400){
            $("#mbiking-img-container").animate({right: '39rem'},500);
        }else if(browserWidth > 1200){
            $("#mbiking-img-container").animate({right: '28rem'},500);
        }else if(browserWidth > 940){
            let imgContainerWidth = document.getElementById("mbiking-img-container").offsetWidth;
            $("#mbiking-img-container").animate({right: `${browserWidth-30 - imgContainerWidth}px`},500);
        }else{
            //let imgContainerWidth = document.getElementById("mbiking-img-container").offsetWidth;
            $("#mbiking-img-container").animate({left: `${positionTextAbout1 -15}px`},500);
        }

        if(browserWidth < 768){
            $("#about-container").animate({right: '100vw'},600,"linear");
        }

        if(browserWidth > 1200){
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right-pattern-mobile");
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-right-to-left");
            document.getElementById("mbiking-img-container").classList.add("anim-changing-background-position-right-to-left-img");
    
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right");
            document.getElementById("mbiking-img-container").classList.remove("anim-changing-background-position-left-to-right-img");
                $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right-pattern-mobile");
        }else if(browserWidth > 768){
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right-pattern-mobile");
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-right-to-left");
            document.getElementById("mbiking-img-container").classList.add("anim-changing-background-position-right-to-left-img-xl");
    
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right");
            document.getElementById("mbiking-img-container").classList.remove("anim-changing-background-position-left-to-right-img-xl");
    
        }else{
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-right-to-left-pattern-mobile");
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-left-to-right-pattern-mobile");
        }



    })



    $("#about-container").find("#right-btn").on("click", function(){


        if(browserWidth > 1400){
            $("#mbiking-img-container").animate({right: '2rem'},500);
        }else if(browserWidth > 940){
            $("#mbiking-img-container").animate({right: '1rem'},500);
        }else{
            $("#mbiking-img-container").animate({left: `${positionTextAbout2 -15}px`},500);
        }

        if(browserWidth < 768){
            $("#about-container").animate({right: '0vw'},600,"linear");
        }

        if(browserWidth > 1200){
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-right-to-left-pattern-mobile");
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-left-to-right");
            document.getElementById("mbiking-img-container").classList.add("anim-changing-background-position-left-to-right-img");
    
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-right-to-left");
            document.getElementById("mbiking-img-container").classList.remove("anim-changing-background-position-right-to-left-img");
        }else if(browserWidth > 768){
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-right-to-left-pattern-mobile");
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-left-to-right");
            document.getElementById("mbiking-img-container").classList.add("anim-changing-background-position-left-to-right-img-xl");
    
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-right-to-left");
            document.getElementById("mbiking-img-container").classList.remove("anim-changing-background-position-right-to-left-img-xl");
        }else{
            $("#about-container #backgrount-pattern").addClass("anim-changing-background-position-left-to-right-pattern-mobile");
            $("#about-container #backgrount-pattern").removeClass("anim-changing-background-position-right-to-left-pattern-mobile");
        }
        

    })
}

//------ END INDEX.HTML ---------
//-------------------------------


}

function endLoadScreen(){
    $("#loader").addClass("loader-opac");
    $("body").removeClass("pre-loader");
}


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