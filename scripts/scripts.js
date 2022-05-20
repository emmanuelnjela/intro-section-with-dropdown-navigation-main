(function () {
    "use strict";
    document.addEventListener('DOMContentLoaded', () => {
        // nav-menu 
        (function (){
            let navLinks = document.querySelector('.nav-links')
            let navBtn = document.querySelector(".nav-menu img");
            let cancel = document.querySelector(".cancel");
            navBtn.addEventListener('click', e => {
                navLinks.classList.add('side-bar-links');
            })
            cancel.addEventListener('click', () => {
                navLinks.classList.remove('side-bar-links');
            })
        })();
        // popups 
        (function (){
            let popupbtn = document.querySelectorAll('.popup-btn');
            let featuresArrowIcon = document.querySelector('.features img');
            let companyArrowIcon = document.querySelector('.company img');
            let featuresPopup = document.querySelector('.features-popup');
            let companyPopup = document.querySelector('.company-popup');
            popupbtn.forEach(btn => {
                if(featuresPopup && companyPopup){
                    btn.addEventListener('click', e => {
                        if(e.target.parentElement.classList.contains('features')){
                            toggle_show(featuresPopup,featuresArrowIcon);
                        }
                        else if(e.target.parentElement.classList.contains('company')){
                            toggle_show(companyPopup,companyArrowIcon);
                        }
                        else {
                            throw new Error("do not contain company or features");
                        }
                    });
                }
                else {
                    console.log("There is probelm in features or company popup");
                }
            });
        })()
        function toggle_show(target,icon){
            if(target.style.display == '' || target.style.display == 'none'){
                target.style.display = "block";
                console.log(icon.src);
                icon.src = "./images/icon-arrow-up.svg";
            }
            else {
                target.style.display = "none";
                icon.src = "./images/icon-arrow-down.svg";
            }
        }
    })
})()