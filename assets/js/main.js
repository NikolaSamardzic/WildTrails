
    var prefixOnline = '/WildTrails/';
    var prefixsPage = 'pages/';

    var browserWidth = window.innerWidth;

    let url = window.location.pathname;
    console.log(url);

    console.log("apdejt broj 4");

    var galleryArray = ['couple-together-kayaking-river','couple-together-kayaking','cyclist-sunny-day-bike-adventure-travel-photo','friends-are-resting-after-they-got-mountain','hiker-looking-river','hikers-top','long-shot-man-mountain-biking-equipment','man-mountain-biking-equipment-outdoors','man-riding-mountain-bike-special-equipment-with-copy-space','silhouette-teamwork-helping-hand','smiling-young-man-paddling-kayak-with-his-friend-lake','woman-holding-paddle-kayak-river'];

    var arraySchool = ["Documentation","RSS","Sitemap"];
    var arraySchoolLinks = ["https://nikolasamardzic.github.io/WildTrails/documentation.pdf","https://nikolasamardzic.github.io/WildTrails/rss.xml","https://nikolasamardzic.github.io/WildTrails/sitemap.xml"];

    var arraySocialMedia = ["Facebook","Instagram","Twitter"];
    var arraySocialMediaLinks = ["https://www.facebook.com/","https://www.instagram.com/","https://twitter.com/"];
    var arraySocialMediaIcons = ['<i class="fa-brands fa-facebook-f"></i>','<i class="fa-brands fa-instagram"></i>','<i class="fa-brands fa-twitter"></i>'];

    var arrayNavigation = ["Home","About","Gallery","Author"];

    var arrayNavigationLinks = [`${prefixOnline}index.html`,`https://nikolasamardzic.github.io/WildTrails/pages/about.html`,`https://nikolasamardzic.github.io/WildTrails/pages/gallery.html`,`https://nikolasamardzic.github.io/portfolio/index.html`];

    var arraySecondNavigation = ["s","About","Gallery","Author"];

    organizationLocation = {
        "locations": [
          {
            "country": "Serbia, Belgrade",
            "address": "Kralja Petra I 56, Belgrade",
            "phone_number": "+381 11 555-5555"
          },
          {
            "country": "Switzerland, Zürich",
            "address": "Bahnhofstrasse 1, Zürich",
            "phone_number": "+41 44 555-5555"
          },
          {
            "country": "France, Paris",
            "address": "Avenue des Champs-Élysées, Paris",
            "phone_number": "+33 1 555-5555"
          },
          {
            "country": "Norway, Oslo",
            "address": "Karl Johans gate 1, Oslo",
            "phone_number": "+47 23 555-5555"
          }
        ]
    }

    europeanCountries = {
        "countries":[
            {
                "name": "BGR",
                "code": "+359",
                "number_length": 9
            },
            {
                "name": "CHE",
                "code": "+41",
                "number_length": 9
            },
            {
                "name": "DEU",
                "code": "+49",
                "number_length": 11
            },
            {
                "name": "ESP",
                "code": "+34",
                "number_length": 9
            },
            {
                "name": "FRA",
                "code": "+33",
                "number_length": 9
            },
            {
                "name": "GRC",
                "code": "+30",
                "number_length": 10
            },
            {
                "name": "ITA",
                "code": "+39",
                "number_length": 10
            },
            {
                "name": "NOR",
                "code": "+47",
                "number_length": 8
            },
            {
                "name": "SRB",
                "code": "+381",
                "number_length": 9
            },
            {
                "name": "SWE",
                "code": "+46",
                "number_length": 7
            }
        ]
    }


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


    secondNavContent = {
        "menuItems": [
        {
            "name": "Wilderness Calling",
            "description": "Answer the call",
            "url": "index.html#hero"
        },
        {
            "name": "About",
            "description": "Our Story",
            "url": "index.html#about"
        },
        {
            "name": "Activities",
            "description": "Adventure Options",
            "url": "index.html#activities-link"
        },
        {
            "name": "Events",
            "description": "Upcoming Happenings",
            "url": "index.html#events-link"
        },
        {
            "name": "Participation Form",
            "description": "Participate Now",
            "url": "index.html#participation-form-part"
        }
        ]
    }

    eventContent = {
        "activities": [
        {
        "type": "Hiking",
        "equipment":["Hiking boots","Backpack","Trekking poles","Water bottles"],
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
        "type": "Mountain biking",
        "equipment":["Mountain bike","Helmet","Spare tubes","Water bottles"],
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
        "type": "Kayaking",
        "equipment":["Kayak","Paddle","Life jacket","Dry bags"],
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


        for(let i=0; i<mainNavATags.length;i++){

            let elementHref =  mainNavATags[i].getAttribute("href");
            let fileName = elementHref.split("/").pop();

            if(elementHref == 'https://nikolasamardzic.github.io/portfolio/index.html'){
                
            }else if(fileName == url.split("/").pop()){
                //mainNavATags[i].classList.add('active-link');
                console.log("ovo vrati "+ mainNavATags[i]);
                //mainNavATags[i].children[1].classList.add('active-link');
                mainNavDivTags[i].classList.add("active-link");
                console.log("radi radi");
                continue;
            }


            mainNavATags[i].addEventListener("mouseover", function(){
                mainNavDivTags[i].classList.add("progress-left-to-right");
            });
        }
        
        console.log('url je ' + url);

        for(let i=0; i<mainNavATags.length;i++){

            let elementHref =  mainNavATags[i].getAttribute("href");
            let fileName = elementHref.split("/").pop();
            console.log(elementHref);
            console.log('file name je ' + fileName);

            if(elementHref == 'https://nikolasamardzic.github.io/portfolio/index.html'){

            }else if(fileName == url.split("/").pop()){

                console.log("radi radi");
                continue;
            }

            console.log('prosao je apdejt2111');

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

        if(url=='/WildTrails/index.html'){    

            console.log("GITHUB GITHIB");

            let positionTextAbout1;
            let positionTextAbout2;
            document.documentElement.style.setProperty('--line-width', '33%');

            let secondNav = document.getElementById("second-nav");
            navigationSecond();

            window.onscroll = function(){
                //e.stopPropagation();
                if (window.pageYOffset > 0) {
                    if (!secondNav.classList.contains("changing-nav-position-show")) {
                        secondNav.classList.remove("changing-nav-position-hide");
                        secondNav.classList.add("changing-nav-position-show");
                    }
                } else {
                    secondNav.classList.remove("changing-nav-position-show");
                    secondNav.classList.add("changing-nav-position-hide");
                }


                let positionHero = document.getElementById('hero').getBoundingClientRect().y;
                let positionAbout = document.getElementById('about').getBoundingClientRect().y;
                let positionActivities = document.getElementById('activities-link').getBoundingClientRect().y;
                let positionEvents = document.getElementById('events-link').getBoundingClientRect().y;
                let positionForm = document.getElementById('participation-form-part').getBoundingClientRect().y;

                if(positionForm<=2){
                    let liContainer = document.querySelector('#secondUl > :nth-child(5)');
                    setActiveSecondNav(liContainer);
                }else if(positionEvents<=20){
                    let liContainer = document.querySelector('#secondUl > :nth-child(4)');
                    setActiveSecondNav(liContainer);
                }else if(positionActivities<=2){
                    let liContainer = document.querySelector('#secondUl > :nth-child(3)');
                    setActiveSecondNav(liContainer);
                }else if(positionAbout<=2){
                    let liContainer = document.querySelector('#secondUl > :nth-child(2)');
                    setActiveSecondNav(liContainer);
                }else{
                    let liContainer = document.querySelector('#secondUl > :nth-child(1)');
                    setActiveSecondNav(liContainer);
                }
            }


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

            //FORM

            formSetUp();

            let ulForm = document.getElementById('form-social-media');
            navigation(arraySocialMedia,arraySocialMediaLinks,ulForm);
            socialMediaIconsAdd(ulForm,arraySocialMediaIcons);
        // formContent();
        }else if(url=='/WildTrails/pages/about.html'){
            console.log("funkcionise");
            displayLocations();
        }else if(url=='/WildTrails/pages/gallery.html'){
            displayGallery();
        }

        //------ END INDEX.HTML ---------
        //-------------------------------

        //FOOTER

        let footerUlSchool = document.getElementById('school-links');
        let footerUlSocial = document.getElementById('social-links');
        let footerUlNavigation = document.getElementById('navigation-links');

        navigation(arraySchool,arraySchoolLinks,footerUlSchool);
        navigation(arraySocialMedia,arraySocialMediaLinks,footerUlSocial);
        navigation(arrayNavigation,arrayNavigationLinks,footerUlNavigation);

        // END FOOTER

        function displayLocations(){
            let divContainer = document.getElementById('location-container');

            for(let i=0;i<organizationLocation.locations.length;i++){
                let pointerLocation = document.createElement('i');
                pointerLocation.classList.add("fa-solid");
                pointerLocation.classList.add("fa-location-dot");

                let locationHeadig = document.createElement('h4');
                locationHeadig.textContent = organizationLocation.locations[i].country;

                let address = document.createElement('p');
                address.textContent = organizationLocation.locations[i].address;

                let phone = document.createElement('p');
                phone.textContent = organizationLocation.locations[i].phone_number;

                let innerDiv = document.createElement('div');

                innerDiv.appendChild(pointerLocation);
                innerDiv.appendChild(locationHeadig);
                innerDiv.appendChild(address);
                innerDiv.appendChild(phone);

                innerDiv.classList.add('inner-container-location');
                divContainer.appendChild(innerDiv);
            }
        }


        function displayGallery(){
            let gallery = document.getElementById('img-container');
            let gallerySlider = document.getElementById('pic-slider');

            for(let i=0; i<galleryArray.length;i++){
                let imgSmall = document.createElement('img');
                let imgFull = document.createElement('img');

                imgSmall.setAttribute('href',`../assets/images/smaller/${galleryArray[i]}`);
                imgSmall.alt = galleryArray[i];

                imgFull.setAttribute('href',`../assets/images/full/${galleryArray[i]}`);
                imgFull.alt = galleryArray[i];


                gallery.appendChild(imgSmall);
                gallerySlider.appendChild(imgFull);
            }
        }

        function socialMediaIconsAdd(ulElement,arraySocialMediaIcons){
            let links = ulElement.getElementsByTagName('a');

            for (let i = 0; i < links.length; i++) {
                links[i].innerHTML += arraySocialMediaIcons[i];
            }
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
                    $("#activities-background").css("background-image","url(assets/images/activities/hiking.jpg)");
                }else{
                    $("#activities").css("background-image","url(assets/images/activities/hiking.jpg)");
                }
        
            }
            $("#text-container-3").append(p);
            $("#activities-heading").append(h1);
            }
        
        
        }
        
        function activitySliderPrevious(){
            let indexEl2 = $("#text-container-3").children('p:visible').prev().index();

            if(indexEl2 == -1)indexEl2=2;
            $("#text-container-3").children('p:visible').css("display","none");
            $("#text-container-3").children('p').eq(indexEl2).css("display","block");
            $("#activities-heading").children('h1:visible').css("display","none");
            $("#activities-heading").children('h1').eq(indexEl2).css("display","block");
            if(browserWidth>768){
                $("#activities-background").css(`background-image`,`url(assets/images/activities/${activityContent.activities[indexEl2].url})`);
            }else{
                $("#activities").css(`background-image`,`url(assets/images/activities/${activityContent.activities[indexEl2].url})`);
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
                $("#activities-background").css(`background-image`,`url(assets/images/activities/${activityContent.activities[indexEl2].url})`);
            }else{
                $("#activities").css(`background-image`,`url(assets/images/activities/${activityContent.activities[indexEl2].url})`);
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

        
    

    }

    function formSetUp(){
        let countryNames = document.getElementById("country");

        let chooseText = document.createElement('option');
        chooseText.value = '0';
        chooseText.selected = 'selected';
        chooseText.textContent = 'Choose';
        countryNames.appendChild(chooseText);

        for(let i=0;i<europeanCountries.countries.length;i++){
            //console.log(europeanCountries.countries[i].name);
            let optionTag = document.createElement('option');
            optionTag.value = `${i+1}`;
            optionTag.textContent = `${europeanCountries.countries[i].name}`;
            countryNames.appendChild(optionTag);
        }

        let activityTypeSelect = document.getElementById('activity-select');
        let chooseText2 = document.createElement('option');
        chooseText2.value = '0';
        chooseText2.selected = 'selected';
        chooseText2.textContent = 'Choose';
        activityTypeSelect.appendChild(chooseText2);

        for(let i=0;i<eventContent.activities.length;i++){

            let optionTag = document.createElement('option');
            optionTag.value = `${i+1}`;
            optionTag.textContent = `${eventContent.activities[i].type}`;
            activityTypeSelect.appendChild(optionTag);
        }

        countryNames.addEventListener("change", function(){
            let phoneNumberInput = document.getElementById('phone-number');
            phoneNumberInput.value = "";
            checkPhoneNumber();

        })

        activityTypeSelect.addEventListener("change",function(){

            checkActivity();
        })

        document.getElementById('input-first-name').addEventListener("blur",function(){
            firstNameValidation();
        })

        document.getElementById('input-last-name').addEventListener("blur",function(){
            lastNameValidation();
        })

        document.getElementById('input-email').addEventListener("blur",function(){
            emailValidetion();
        })

        document.getElementById('phone-number').addEventListener("blur",function(){
            phoneValidation();
        })

        document.getElementById('event-select').addEventListener("change",function(){

            eventValidation();
        })

        let experianceDiv = document.querySelector("#experiance-div");
        let radioInputs = experianceDiv.querySelectorAll('input[type="radio"]');

        for(let input of radioInputs){
        //  input.classList.add('incorrect');
            input.addEventListener("change",function(){
                experianceValidation();
            })
        }

        document.getElementById('form-button').addEventListener("click",function(){
            formBalidation();
        })
    }
    function formBalidation(){

        let errorNumber=0;

        errorNumber += emailValidetion()+    experianceValidation()+ lastNameValidation() +firstNameValidation();

        if(activityValidation()){
            errorNumber++;
        }else{
            errorNumber+=eventValidation();
        }
        
        if(checkPhoneNumber()){
            errorNumber++;
        }else{
            errorNumber+=phoneValidation();
        }


   


        if(!errorNumber){

            let buttonForm = document.getElementById('form-button');

            buttonForm.classList.add('button-after');

            setTimeout(function(){
                buttonForm.classList.remove('button-after');
            },2000);

            document.getElementById("event-form").reset();

            let correctElements = document.querySelectorAll(".correct");

            let eventSelect = document.getElementById('event-select');
            let countryCode = document.getElementById('number-code');
            let phoneNumber = document.getElementById('phone-number');

            eventSelect.innerHTML = "";
            eventSelect.disabled = true;
            countryCode.disabled = true;
            phoneNumber.disabled = true;
            
            correctElements.forEach(function(el) {
                el.classList.remove("correct");
            });
        }

    }

    function experianceValidation(){
        let experianceDiv = document.querySelector("#experiance-div");
        let radioInputs = experianceDiv.querySelectorAll('input[type="radio"]');
        let experianceMessage = document.getElementById('experiance-p');
        let isChecked =false;

        for(let input of radioInputs){
            if(input.checked){
                isChecked = true;
                break;
            }
        }

        if(isChecked){

            experianceDiv.classList.remove('experiance-div-error');
            experianceMessage.style.display = "none";

            for(let input of radioInputs){
                input.classList.remove('incorrect')
            }

            return 0;
        }else{

            experianceDiv.classList.add('experiance-div-error');
            experianceMessage.style.display = "block";

            for(let input of radioInputs){
                input.classList.add('incorrect')
            }

            return 1;
        }
    }

    function activityValidation(){
        let activityTypeSelect = document.getElementById('activity-select');
        let activityDiv = document.getElementById('activity-div');
        let activityMessage = document.getElementById('activity-message');
        let eventMessage = document.getElementById('event-message');

        if(activityTypeSelect.selectedIndex>0){
            eventMessage.style.display = "none";
            activityMessage.style.display = "none";
            activityDiv.classList.remove('activity-div-error');


            return 0;
        }else{
            eventMessage.style.display = "none";
            activityMessage.style.display = "block";
            activityDiv.classList.add('activity-div-error');

            return 1;
        }
    }

    function eventValidation(){
        let eventSelect = document.getElementById('event-select');

        let activityDiv = document.getElementById('activity-div');
        let eventMessage = document.getElementById('event-message');

        if(eventSelect.selectedIndex>0){
            activityDiv.classList.remove('activity-div-error');
            eventMessage.style.display = "none";
            eventSelect.classList.remove('incorrect');
            eventSelect.classList.add('correct');

            return 0;

        }else{
            activityDiv.classList.add('activity-div-error');
            eventMessage.style.display = "block";
            eventSelect.classList.remove('correct');
            eventSelect.classList.add('incorrect');

            return 1;
        }

    }

    function phoneValidation(){
        let numberRegex = /^[0-9]+$/;
        let phoneInput = document.getElementById('phone-number');
        let country = document.getElementById('country');
        let countryCode = document.getElementById('number-code');

        let messageNumber = document.getElementById('e-m-number');
        let phoneDiv = document.getElementById('phone-div');

        if(phoneInput.value.length == phoneInput.maxLength && numberRegex.test(phoneInput.value)){
            phoneDiv.classList.remove('phone-div-error');
            messageNumber.style.display = "none";

            phoneInput.classList.remove('incorrect');
            country.classList.remove('incorrect');
            countryCode.classList.remove('incorrect');

            phoneInput.classList.add('correct');
            country.classList.add('correct');
            countryCode.classList.add('correct');
            return 0;
        }else{

            phoneDiv.classList.add('phone-div-error');
            messageNumber.style.display = "block";

            phoneInput.classList.remove('correct');
            phoneInput.classList.add('incorrect');

            return 1;
        }
    }

    function emailValidetion(){
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        let emailElement = document.getElementById('input-email');
        let emailDiv = document.getElementById('mail-div');
        let mailP = document.getElementById('mail-p');

        if(emailRegex.test(emailElement.value)){

            emailDiv.classList.remove('mail-div-error');
            mailP.style.display = "none";
            emailElement.classList.remove('incorrect');
            emailElement.classList.add('correct');

            return 0;
        }else{
            emailDiv.classList.add('mail-div-error');
            mailP.style.display = "block";
            emailElement.classList.remove('correct');
            emailElement.classList.add('incorrect');

            return 1;
        }
    }

    function firstNameValidation(){
        let nameRegex = /^[A-ZŠĐĆČŽ][a-zšđčćž]{2,}( [A-ZŠĐĆČŽ][a-zšđčćž]{2,})*$/;

        let firstName = document.getElementById('input-first-name');
        let nameDiv = document.getElementById('name-div');
        let fNameP = document.getElementById('e-m-f-name');
        let lNameP = document.getElementById('e-m-l-name');

        if(nameRegex.test(firstName.value)){
            fNameP.style.display = "none";

            firstName.classList.remove('incorrect');
            firstName.classList.add('correct');

            if(!(lNameP.style.display == "block")){
                nameDiv.classList.remove('name-div-error');
            }

            return 0;
        }else{
            fNameP.style.display = "block";
            nameDiv.classList.add('name-div-error');
            firstName.classList.remove('correct');
            firstName.classList.add('incorrect');

            return 1;
        }

    }

    function lastNameValidation(){
        let nameRegex = /^[A-ZŠĐĆČŽ][a-zšđčćž]{2,}( [A-ZŠĐĆČŽ][a-zšđčćž]{2,})*$/;

        let lastName = document.getElementById('input-last-name');
        let nameDiv = document.getElementById('name-div');
        let lNameP = document.getElementById('e-m-l-name');
        let fNameP = document.getElementById('e-m-f-name');
        
        if(nameRegex.test(lastName.value)){
            lNameP.style.display = "none";
            lastName.classList.remove('incorrect');
            lastName.classList.add('correct');

            if(!(fNameP.style.display == "block")){
                nameDiv.classList.remove('name-div-error');
            }

            return 0;
        }else{
            lNameP.style.display = "block";
            nameDiv.classList.add('name-div-error');
            lastName.classList.remove('correct');
            lastName.classList.add('incorrect');

            return 1;
        }
    }

    function checkActivity(){
        let activityTypeSelect = document.getElementById('activity-select');
        let eventSelect = document.getElementById('event-select');
        let inputElementsEquipment = document.querySelectorAll("#equipment-div input");

        let activityDiv = document.getElementById('activity-div');
        let activityMessage = document.getElementById('activity-message');
        let eventMessage = document.getElementById('event-message');

        eventSelect.innerHTML = "";
        if(activityTypeSelect.selectedIndex>0){

            eventMessage.style.display = "none";
            activityMessage.style.display = "none";
            activityDiv.classList.remove('activity-div-error');

            eventSelect.classList.remove("correct");
            eventSelect.disabled = false;

            activityTypeSelect.classList.add("correct");
            activityTypeSelect.classList.remove("incorrect");

            let chooseText2 = document.createElement('option');
            chooseText2.value = '0';
            chooseText2.selected = 'selected';
            chooseText2.textContent = 'Choose';
            eventSelect.appendChild(chooseText2);

            for(let i=0;i<eventContent.activities[activityTypeSelect.selectedIndex-1].events.length;i++){

                let optionTag = document.createElement('option');
                optionTag.value = `${i+1}`;

                optionTag.textContent = `${eventContent.activities[activityTypeSelect.selectedIndex-1].events[i].heading}`;
                eventSelect.appendChild(optionTag);
            }

            eventSelect.focus();


            document.documentElement.style.setProperty('--var1', `"${eventContent.activities[activityTypeSelect.selectedIndex-1].equipment[0]}"`);
            document.documentElement.style.setProperty('--var2', `"${eventContent.activities[activityTypeSelect.selectedIndex-1].equipment[1]}"`);
            document.documentElement.style.setProperty('--var3', `"${eventContent.activities[activityTypeSelect.selectedIndex-1].equipment[2]}"`);
            document.documentElement.style.setProperty('--var4', `"${eventContent.activities[activityTypeSelect.selectedIndex-1].equipment[3]}"`);

            for(let i=0;i<eventContent.activities[activityTypeSelect.selectedIndex-1].equipment.length;i++){
                inputElementsEquipment[i].checked = false;
            inputElementsEquipment[i].disabled = false;
            }


            return 0;

        }else{
            eventMessage.style.display = "none";
            activityMessage.style.display = "block";
            activityDiv.classList.add('activity-div-error');

            activityTypeSelect.classList.add("incorrect");
            activityTypeSelect.classList.remove("correct");

            eventSelect.classList.remove("correct");
            eventSelect.classList.remove("incorrect");

            document.documentElement.style.setProperty('--var1', ``);
            document.documentElement.style.setProperty('--var2', ``);
            document.documentElement.style.setProperty('--var3', ``);
            document.documentElement.style.setProperty('--var4', ``);

            for(let i=0;i<4;i++){
                inputElementsEquipment[i].checked = false;
            inputElementsEquipment[i].disabled = true;
            }

            return 1;
        }
    }


    function checkPhoneNumber(){
        let countryNames = document.getElementById("country");
        let countryCode = document.getElementById('number-code');
        let phoneNumberInput = document.getElementById('phone-number');

        let messageNumber = document.getElementById('e-m-number');
        let phoneDiv = document.getElementById('phone-div');
        let messageCountry = document.getElementById('e-m-country');

        if(countryNames.selectedIndex>0){

            messageNumber.style.display = "none";
            messageCountry.style.display = "none";
            phoneDiv.classList.remove('phone-div-error');

            phoneNumberInput.classList.remove("correct");
            phoneNumberInput.classList.remove("incorrect");
            
            countryCode.classList.add("correct");
            countryCode.classList.remove("incorrect");

            countryNames.classList.add("correct");
            countryNames.classList.remove("incorrect");

            countryCode.value = europeanCountries.countries[countryNames.selectedIndex-1].code;
            countryCode.disabled = false;


            phoneNumberInput.disabled = false;
            //phoneNumberInput.focus();

            phoneNumberInput.maxLength = europeanCountries.countries[countryNames.selectedIndex-1].number_length;

            return 0;
        }else{
            countryCode.value = "";
            countryCode.disabled = true;
            phoneNumberInput.value = "";
            phoneNumberInput.disabled = true;

            messageNumber.style.display = "none";
            messageCountry.style.display = "block";
            phoneDiv.classList.add('phone-div-error');

            phoneNumberInput.classList.remove("correct");
            phoneNumberInput.classList.remove("incorrect");
            
            countryCode.classList.remove("correct");
            countryCode.classList.remove("incorrect");

            countryNames.classList.remove("correct");
            countryNames.classList.add("incorrect");

            return 1;
        }
    }


    function tdTagContent(){
        let trs = document.querySelectorAll("tr");
        let trIndex = 0;

        let activities = eventContent.activities;




        for(let i=0,l=0;i<3;i++){
            let events = activities[i].events;

            for(let j=0;j<4;j++){
            let tds = trs[trIndex++].querySelectorAll("td");

                console.log(tds);
                for(let k=0;k<4;k++){
                    tds[k].setAttribute('id',`rss${l++}`);

                    let heading = document.createElement("h1");
                    heading.innerText = events[k].heading;
                    tds[k].appendChild(heading); 

                    let text = document.createElement("p");
                    text.classList.add('eventTextP');
                    text.innerText = events[k].text;
                    tds[k].appendChild(text); 

                    let image = document.createElement("img");
                    image.src="assets/images/events/" + events[k].img;
                    image.alt = events[k].heading;
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

                    let link = document.createElement("a");
                    link.href = url + "#participation-form-part";
                    link.innerText = "Join";
                    tds[k].appendChild(link);
                }
                l-=4;
            }
            l+=4;
        }


    }

    function navigationSecond(){

        let menuItems = secondNavContent.menuItems;
        let menuUl = document.querySelector("#second-nav ul");

        //menuUl.innerHTML = "dsa";

        
        for(let i=0;i<menuItems.length;i++){
            let mainLi = document.createElement('li');
            let firstLi = document.createElement('li');
            let secondLi = document.createElement('li');

            let aElement = document.createElement('a');

            secondLi.textContent = menuItems[i].description;

            aElement.textContent = menuItems[i].name;
            aElement.href = menuItems[i].url;

            mainLi.classList.add("main-li");


            firstLi.appendChild(aElement);
            mainLi.appendChild(firstLi);
            mainLi.appendChild(secondLi);
            menuUl.appendChild(mainLi);
        }

    }



    function setActiveSecondNav(liContainer){


        if (!liContainer.classList.contains('active-second-nav')) {
            let activeSecondNav = document.querySelector('.active-second-nav');
            if (activeSecondNav) {

                if(browserWidth>768){
                    $('.active-second-nav').children().eq(1).animate({width: 'toggle', direction: 'right'}, 'slow', 'swing');
                }

                let secondChild = activeSecondNav.children[1];




                //secondChild.style.removeProperty('display');

                activeSecondNav.classList.remove('active-second-nav');
            }

            liContainer.classList.add('active-second-nav');

            if(browserWidth>768){
                $(liContainer).children().eq(1).animate({width: 'toggle', direction: 'right'}, 'slow', 'swing');
            }

        }


    }


