document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".header__nav-link");
  
    const setActiveLink = (id) => {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    };
  
    window.addEventListener("scroll", () => {
      let current = "top"; // По умолчанию — Главная
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
  
      setActiveLink(current);
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    // Получаем все кнопки для раскрытия информации
    const toggleButtons = document.querySelectorAll('.toggle-info');
 
    toggleButtons.forEach(button => {
       button.addEventListener("click", function() {
          // Находим блок с дополнительной информацией
          const extraInfo = this.nextElementSibling;
 
          // Переключаем видимость дополнительной информации
          if (extraInfo.style.display === "block") {
             extraInfo.style.display = "none";  // Если показано, скрываем
          } else {
             extraInfo.style.display = "block";  // Если скрыто, показываем
          }
       });
    });
 });
 
  