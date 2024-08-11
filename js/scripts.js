/** Navbar script start */
//DOMContentLoaded event only fires when the browser fully loads our page
document.addEventListener("DOMContentLoaded",function(){
    let nav=document.getElementById("navList");
    let navItems=nav.querySelectorAll("li");

    navItems.forEach(function(i){
        let coreElt=i.querySelector("a");
        i.addEventListener("click",function(){
            navItems.forEach(function(i){
                let elt=i.querySelector("a");
                elt.classList.remove("default");
            });
            coreElt.classList.add("default");
        });
    });
});

/** Navbar script end */

/* Schedule starter */

let dayTabs=document.querySelectorAll("div.single-tabs");
let scheduleInfo=document.querySelectorAll("div.scheduleColumn");
let tabsArray=[...dayTabs];
dayTabs.forEach(function(item){
    let present=item.classList;
    item.addEventListener('click',()=>{
        dayTabs.forEach((i)=>{
            i.classList.remove("active");
        });
        present.add("active");

        scheduleInfo.forEach((j)=>{
            j.classList.remove("active");
        });
        let str=item.innerHTML;
        str= str.toLowerCase().replace(/\s/g, '');
        let current=document.getElementById(str);
        current.classList.add("active");
    });
});


/* Schedule finisher */

/*Newsletter form start */



var subs=document.getElementById("subscribe");

subs.onclick=()=>{
    var newsEmail=document.getElementById("email1").value;
    window.alert(newsEmail);
};

// newsletter form end

//contact form start

document.getElementById("contactus").addEventListener("submit",(event)=>{
    event.preventDefault(); //for preventing the page reload upon submitting form
    var formData={name:document.querySelector("#contactus input[type='text']").value,
                email:document.querySelector("#contactus input[type='email']").value,
                subject:document.querySelector("#contactus input[name='subject']").value,
                message:document.querySelector("#contactus textarea[name='message']").value};

    console.log(formData.name,formData.email,formData.subject,formData.message);
    window.alert("Thanks for contacting us, our team will contact you soon.");
    location.reload(); //for refreshing form
});

//contact form end


// document.addEventListener('DOMContentLoaded', function () {
//     var menuIcon = document.getElementById('menu-icon');
//     var navList = document.getElementById('navList');

//     if(menuIcon.style.display==="none"){
//         menuIcon.addEventListener('click', function () {
//             navList.style.display="block";
//         });    
//     }
//     else{
        
//     }
//     navList.addEventListener('click', function () {
//         navList.style.display="none";
//     });
// });