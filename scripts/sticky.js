function handleScroll() {
  const isSticky = window.scrollY > 600;
  applyStickyStyles(isSticky);
}

function applyStickyStyles(isSticky) {
  const nav = document.querySelector(".nav");
  const iconNavBarMobile = document.getElementById("navBarMobile");
  const botonAbrirModalNav = document.getElementById("botonAbrirModalNav");

  nav.classList.toggle("sticky", isSticky);

  window.addEventListener("scroll", function () {
    // Verificar si el ancho de la pantalla es menor a 1001px
    if (window.innerWidth < 1001) {
      iconNavBarMobile.classList.toggle("mobileSticky", window.scrollY > 800);
    }
  });

  const backgroundColor = isSticky ? "#14274e" : "#e7eefa";
  const textColor = isSticky ? "#e7eefa" : "#14274e";

  // Cambiar color de fondo del botón según el estado sticky
  botonAbrirModalNav.style.backgroundColor = backgroundColor;
  botonAbrirModalNav.style.color = textColor;


  // Cambiar color del subrayado del texto dentro del elemento .underline-hover::before
  const underlineHovers = document.querySelectorAll(".underlined-hover");
  underlineHovers.forEach((underlineHover) => {
    underlineHover.style.setProperty(
      "--colorFont",
      isSticky ? "#fff" : "#24203e"
    );
  });
}

window.addEventListener("scroll", handleScroll);
