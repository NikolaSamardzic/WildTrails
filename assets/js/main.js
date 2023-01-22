
var prefixOnline = '/WildTrails/';
var prefixsPage = 'pages/';

var browserWidth = window.innerWidth;

let url = window.location.pathname;
console.log(url);



const arrayNavigation = ["Home","About","Gallery","Author"];

const arrayNavigationLinks = [`${prefixOnline}index.html`,`${prefixOnline+prefixsPage}about.html`,`${prefixOnline+prefixsPage}gallery.html`,`${prefixOnline+prefixsPage}gallery.html`];

activityContent = {
    "activities": [
        {
            "heading": "HIKING",
            "url": "hiking.jpg",
            "text": "Explore the beautiful trails of Europe with our expert guided hiking tours. Whether you're a seasoned hiker or a beginner, our guides will help you discover the best routes and natural wonders of the area. Experience the tranquility of nature and the satisfaction of reaching the summit with our hiking trips, specially tailored to suit your fitness level and preferences."
        },
        {
            "heading": "MOUNTAIN BIKING",
            "url": "mountain-biking.png",
            "text": "Join us for an exciting ride through the challenging terrain of Europe on our guided mountain biking tours. Our experienced guides will take you on a thrilling journey through rugged landscapes and picturesque trails. Push your limits and discover a new way of exploring the great outdoors with our mountain biking adventures, suitable for riders of all levels."
        },
        {
            "heading": "KAYAKING",
            "url": "kayaking.jpg",
            "text": "Paddle through the tranquil waters of Europe on our guided kayaking trips. Our experienced guides will lead you through hidden coves and secluded beaches, providing a unique perspective of the area's natural beauty. Take in the fresh air and the peaceful surroundings as you glide through the water on our kayaking excursions, suitable for both first-time paddlers and experienced kayakers."
        }
    ]
}


eventContent = 
{
    "activities": [
    {
    "type": "hiking",
    "events": [
    {
    "img": "couple-hiking-nanos-plateau-slovenia-against-blue-sky.jpg",
    "date": "15-5-2023",
    "day": "Sunday",
    "distance": "20km",
    "text": "Explore the beautiful mountain trails with a guided hike.",
    "heading": "Mountain Adventure Hike",
    "tag": "Peak hiking"
    },
    {
    "img": "full-shot-woman-nature.jpg",
    "date": "22-6-2023",
    "day": "Sunday",
    "distance": "15km",
    "text": "Take in the stunning views on a sunset hike.",
    "heading": "Sunset Hike",
    "tag": "Trail hiking"
    },
    {
    "img": "friends-are-resting-after-they-got-mountain.jpg",
    "date": "10-7-2023",
    "day": "Saturday",
    "distance": "25km",
    "text": "Join a group for a challenging hike up a nearby peak.",
    "heading": "Peak Hike Challenge",
    "tag": "Day hiking"
    },
    {
    "img": "young-female-traveler-enjoying-rural-surroundings.jpg",
    "date": "17-8-2023",
    "day": "Saturday",
    "distance": "10km",
    "text": "Explore the local hiking trails on a leisurely hike.",
    "heading": "Local Hike",
    "tag": "Peak hiking"
    }
    ]
    },
    {
    "type": "mountain biking",
    "events": [
    {
    "img": "cyclist-sunny-day-bike-adventure-travel-photo.jpg",
    "date": "12-5-2023",
    "day": "Saturday",
    "distance": "30km",
    "text": "Join a casual peloton for a spin in the mountains followed by a frothy coffee.",
    "heading": "Morning Mountain Spin",
    "tag": "All-mountain"
    },
    {
    "img": "man-mountain-biking-equipment-riding-his-bike.jpg",
    "date": "19-6-2023",
    "day": "Sunday",
    "distance": "40km",
    "text": "Take on a challenging mountain bike trail with experienced guides.",
    "heading": "Mountain Bike Challenge",
    "tag": "Freeride"
    },
    {
    "img": "senior-woman-electric-mountain-bike.jpg",
    "date": "24-7-2023",
    "day": "Saturday",
    "distance": "50km",
    "text": "Join a group for a scenic bike ride through the countryside.",
    "heading": "Countryside Bike Ride",
    "tag": "Cross-country"
    },
    {
    "img": "young-man-riding-bicycle-mountains-early-morning.jpg",
    "date": "14-8-2023",
    "day": "Sunday",
    "distance": "25km",
    "text": "Experience the thrill of downhill mountain biking with a guided tour.",
    "heading": "Rural Trail Adventure",
    "tag": "Downhill"
    }
    ]
    },
    {
    "type": "kayaking",
    "events": [
    {
    "img": "woman-canoeing-water-during-daytime.jpg",
    "date": "21-5-2023",
    "day": "Saturday",
    "distance": "15km",
    "text": "Explore the local waterways on a peaceful kayak trip.",
    "heading": "Local Kayak Trip",
    "tag": "Flat water kayaking"
    },
    {
    "img":"couple-together-kayaking-river.jpg",
    "date": "28-6-2023",
    "day": "Sunday",
    "distance": "20km",
    "text": "Join a guided kayak tour through a nearby river canyon.",
    "heading": "River Canyon Kayak Tour",
    "tag": "Recreational kayaking"
    },
    {
    "img": "man-kayaking-inflatable-kayak-lake.jpg",
    "date": "5-7-2023",
    "day": "Saturday",
    "distance": "25km",
    "text": "Experience the thrill of white water kayaking with an experienced guide.",
    "heading": "River Kayak Adventure",
    "tag": "River kayaking"
    },
    {
    "img": "woman-holding-paddle-kayak-river.jpg",
    "date": "12-8-2023",
    "day": "Sunday",
    "distance": "10km",
    "text": "Join a group for a leisurely kayak trip on a nearby lake.",
    "heading": "Lake Kayak Trip",
    "tag": "Canoeing"
    }
    ]
    }
    ]
}

var paginationImg = ["hiking.svg", "hiking-black.svg", "biking.svg", "biking-black.svg", "kayaking.svg", "kayaking-black.svg"];

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
        document.documentElement.style.setProperty('--line-width', '33%');

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

            if(browserWidth>768){
            document.getElementById("activities").style.removeProperty("background-image");
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


        //ACTIVITIES
        activitySliderContent()

        $("#activities").find("#btn-act-left").on("click", function(){
            actLineDecrease();
            activitySliderPrevious();
        })

        $("#activities").find("#btn-act-right").on("click", function(){
            actLineProgress();
            activitySliderNext();
        })

        setInterval(function(){
            activitySliderNext();
            actLineProgress();
        },4000);
        //END ACTIVITIES

        //EVENTS
        eventContent();
        $(".pagination").pagination();

        imgForPagination();

        displayNoneSecondTr();

        $('.page').click(function(){
            displayNoneSecondTr();
        })

        tdTagContent();

        $("#buttonToggleEvents").click(function(){

            let buttonText = $(this).text();
            if(buttonText === "Show More"){
                $(this).text("Show Less");
            } else {
                $(this).text("Show More");
            }

            var firstTr = $("tr").filter(function(){
                return $(this).css("display") === "grid";
            }).first();


            if(browserWidth> 768){
                firstTr.next().stop().slideToggle('slow');
            }else{
                firstTr.nextAll().slice(0,3).stop().slideToggle('slow');
            }

        });


        //END EVENTS
    }



    //------ END INDEX.HTML ---------
    //-------------------------------
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
    
    function actLineProgress(){
        let lineWidth = getComputedStyle(document.documentElement).getPropertyValue("--line-width");
    
        if(lineWidth == '33%'){
            document.documentElement.style.setProperty('--line-width', '66%');
        }else if(lineWidth == '66%'){
            document.documentElement.style.setProperty('--line-width', '100%');
        }else{
            document.documentElement.style.setProperty('--line-width', '33%');
        }
    }
    
    function actLineDecrease(){
        let lineWidth = getComputedStyle(document.documentElement).getPropertyValue("--line-width");
    
        if(lineWidth == '33%'){
            document.documentElement.style.setProperty('--line-width', '100%');
        }else if(lineWidth == '66%'){
            document.documentElement.style.setProperty('--line-width', '33%');
        }else{
            document.documentElement.style.setProperty('--line-width', '66%');
        }
    }
    
    function activitySliderContent(){
    
        let activityText = activityContent.activities;
      for(let i = 0; i < activityText.length; i++){
        let p = $("<p>").text(activityText[i].text).addClass("activity-text");
        let h1 = $("<h1>").text(activityText[i].heading).addClass("activity-heading");
        if(i > 0){
          p.css("display", "none");
          h1.css("display", "none");
        }else{
            p.css("display", "block");
            h1.css("display", "block");
            if(browserWidth>768){
                $("#activities-background").css("background-image","url(../assets/images/activities/hiking.jpg)");
            }else{
                $("#activities").css("background-image","url(../assets/images/activities/hiking.jpg)");
            }
    
        }
        $("#text-container-3").append(p);
        $("#activities-heading").append(h1);
        }
    
    
    }
    
    function activitySliderPrevious(){
        let indexEl2 = $("#text-container-3").children('p:visible').prev().index();
        console.log(indexEl2);
        if(indexEl2 == -1)indexEl2=2;
        $("#text-container-3").children('p:visible').css("display","none");
        $("#text-container-3").children('p').eq(indexEl2).css("display","block");
        $("#activities-heading").children('h1:visible').css("display","none");
        $("#activities-heading").children('h1').eq(indexEl2).css("display","block");
        if(browserWidth>768){
            $("#activities-background").css(`background-image`,`url(../assets/images/activities/${activityContent.activities[indexEl2].url})`);
        }else{
            $("#activities").css(`background-image`,`url(../assets/images/activities/${activityContent.activities[indexEl2].url})`);
        }
        
    }
    
    function activitySliderNext(){
        let indexEl2 = $("#text-container-3").children('p:visible').next().index();
        if(indexEl2 == -1)indexEl2=0;
        $("#text-container-3").children('p:visible').css("display","none");
        $("#text-container-3").children('p').eq(indexEl2).css("display","block");
        $("#activities-heading").children('h1:visible').css("display","none");
        $("#activities-heading").children('h1').eq(indexEl2).css("display","block");
        if(browserWidth>768){
            $("#activities-background").css(`background-image`,`url(../assets/images/activities/${activityContent.activities[indexEl2].url})`);
        }else{
            $("#activities").css(`background-image`,`url(../assets/images/activities/${activityContent.activities[indexEl2].url})`);
        }
    }
    
    function eventContent(){
    
      let table = document.createElement("table");
      table.setAttribute("number-per-page", "4");
      table.setAttribute("current-page", "0");
      table.classList.add("pagination");
    
      let tbody = document.createElement("tbody");
    
      for (let i = 0 , k = 1; i < 12; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < 4; j++) {
          let td = document.createElement("td");
         // td.innerText = `${k++}`;
          tr.appendChild(td);
        }
        if (i == 1 || i==5 || i==9 || i==13) {
            tr.classList.add("toggleRowEvents");
            tr.classList.add("secondRow");
            tr.classList.add("mobileRow");
        }else if(i==0 || i==4 || i==8 || i==12){
            tr.classList.add("firstRow");
        }else{
            tr.classList.add("mobileRow");
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    
      let eventsSection = document.getElementById("events");
      eventsSection.appendChild(table);
    

    }

}

function displayNoneSecondTr(){
    let toggleRows = document.getElementsByClassName("mobileRow");
    for (let i = 0; i < toggleRows.length; i++) {
      toggleRows[i].style.display = "none";
    }
}

function imgForPagination(){
    let pages = document.querySelectorAll("li.page");

    pages.forEach(function(page, index) {
        // Clear the text of the page element
        while (page.firstChild) {
            page.removeChild(page.firstChild);
        }
        // Create the img tag
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        img1.src = "assets/images/pagination/" + paginationImg[index*2];
        img2.src = "assets/images/pagination/" + paginationImg[index*2+1];
        // Append the img tag to the page element
        page.appendChild(img1);
        page.appendChild(img2);
    });
}

function tdTagContent(){
    let trs = document.querySelectorAll("tr");
    let trIndex = 0;
    let eventIndex = 0;
    let activities = eventContent.activities;

    //console.log(activities[1].events);


    for(let i=0;i<3;i++){
        let events = activities[i].events;
        //console.log(events);
        for(let j=0;j<4;j++){
        let tds = trs[trIndex++].querySelectorAll("td");
       // console.log(tds);
            
            for(let k=0;k<4;k++){
                console.log(tds[k]);

                let heading = document.createElement("h1");
                heading.innerText = events[k].heading;
                tds[k].appendChild(heading); 

                let text = document.createElement("p");
                text.classList.add('eventTextP');
                text.innerText = events[k].text;
                tds[k].appendChild(text); 

                let image = document.createElement("img");
                image.src="assets/images/events/" + events[k].img;
                tds[k].appendChild(image); 

                let eventTag = document.createElement("p");
                let eventDiv = document.createElement("div");
                eventDiv.classList.add('eventTagP');
                eventTag.innerText = events[k].tag;
                eventDiv.appendChild(eventTag);  
                tds[k].appendChild(eventDiv); 

                let divTag = document.createElement("div");
                let datePTag = document.createElement("p");
                let dayPTag = document.createElement("p");
                let distancePTag = document.createElement("p");
                divTag.classList.add('dateDivTag');
                datePTag.innerText = events[k].date;
                dayPTag.innerText = events[k].day;
                distancePTag.innerText = events[k].distance;
                divTag.appendChild(datePTag);
                divTag.appendChild(dayPTag);
                divTag.appendChild(distancePTag);
                tds[k].appendChild(divTag); 

                let button = document.createElement("button");
                button.type = "button";
                button.innerText = "Join";
                tds[k].appendChild(button);
            }
            console.log("-");
        }
        console.log(" ");
    }

    /*
    for(let i=0; i<activities.length;i++){
        
        let events = activities[i].events;
        //console.log(events.length);
        for(let j=0;j<events.length;j++){
            console.log(events[j]);
            const tds = trs[trIndex++].querySelectorAll("td");

        }
    }
    */


   /* for (let a = 0; a < activities.length; a++) {
        const events = activities[a].events;
        for (let i = 0; i < 4; i++) {
            const tds = trs[trIndex++].querySelectorAll("td");
            for (let j = 0; j < 4; j++) {
                if(eventIndex >= events.length) break; //to check if all events are added
                const event = events[eventIndex++];
                const td = tds[j];
                // create img tag
                const img = document.createElement("img");
                img.src = event.img;
                td.appendChild(img);
                // create div tag
                const div = document.createElement("div");
                // create p tag for date
                const date = document.createElement("p");
                date.innerText = event.date;
                div.appendChild(date);
                // create p tag for day
                const day = document.createElement("p");
                day.innerText = event.day;
                div.appendChild(day);
                // create p tag for distance
                const distance = document.createElement("p");
                distance.innerText = event.distance;
                div.appendChild(distance);
                td.appendChild(div);
                // create h1 tag for heading
                const heading = document.createElement("h1");
                heading.innerText = event.heading;
                td.appendChild(heading);
                // create p tag for tag name
                const tag = document.createElement("p");
                tag.innerText = event.tag;
                td.appendChild(tag);
                // create p tag for text
                const text = document.createElement("p");
                text.innerText = event.text;
                td.appendChild(text);
                //create button
                const button = document.createElement("button");
                button.type = "button";
                button.innerText = "Join";
                td.appendChild(button);
            }
        }
    }*/
}
