const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('click' , () => {
    navItems.forEach(navItem => {
      navItem.classList.remove('active');
    });

    navItem.classList.add('active');
  })
})

const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

toggle.addEventListener('click', () => {
  
  if(sidebar.className === 'sidebar') {
    sidebar.classList.add('open');
  }
  else 
      sidebar.classList.remove('open');
})