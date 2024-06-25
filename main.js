var typed=new typed(".text",{
    Strings:["Web Developer", "Software Developer", "Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
  });

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
       for(tablink of tablinks)
       {
           tablink.classList.remove("active-link");
       }
       for(tabcontent of tabcontents)
       {
           tablink.classList.remove("active-tab");
       }
}