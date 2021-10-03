const navSlide = () => //1. creating a function where navSlide function is equal an anonymous function
{
   const hamburger = document.querySelector('.svg'); //2. get the hamburger and the slider by declaring them
   const nav = document.querySelector('.navlinks');
   const navLinks = document.querySelectorAll('.navlinks li');//5. we going to get all the links into the animated menu section

   hamburger.addEventListener("click",()=>//3. what we want to happen is when the user clicks on the hamburger they navigation pops up so we going to do that by getting the class of nav-active
    {
       //Toogle navigation 
    nav.classList.toggle('nav-active');  

     //Animate links 
    navLinks.forEach((link, index) => {// 6. so for each link we going to run a function 
        if (link.style.animation) {//8. we want when we close the menu the animation must work again, so we going to create an if statement where if a link has animation the 
                link.style.animation = ''
        } else {
             link.style.animation =  `navlinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;//7. we going to use index so that whatever link is added in index html, its delay will be automatically be added
        }
           
            
        });
    });
  
};
window.addEventListener('DOMContentLoaded', (event) => navSlide()) //4. then invoke the function