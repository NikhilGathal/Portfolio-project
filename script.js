document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // All sections
  const navLinks = document.querySelectorAll(".navbar a"); // All nav links


  // Function to remove 'active' class from all links
  function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove("active7"));
  }

  // Add click event to set 'active' class on clicked link
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      removeActiveClasses();  // here called bcz we want it to remove that class from all other link and keep it on only clicked link 
      // console.log(this);
      
      this.classList.add("active7");
    });
  });

  // Intersection Observer to detect which section is in view
  const observerOptions = {
    root: null,
    threshold: 0.4, // At least 60% of the section should be visible
  };

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let sectionId = entry.target.id;
        removeActiveClasses();
        let activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active7");
        }
      }
    });
  },  observerOptions);

  sections.forEach(section => observer.observe(section));
});



const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContent = document.querySelector('.header-content')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')


hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
  
  headerContent.classList.remove('menu-open')
})

window.addEventListener('click', () => {
  headerContent.classList.remove('menu-open')
})

nav.addEventListener('click', (e) => {
  e.stopPropagation()
})

