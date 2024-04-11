function handleScroll() {
  const isSticky = window.scrollY > 600;
  applyStickyStyles(isSticky);
}

function applyStickyStyles(isSticky) {
  const nav = document.querySelector(".nav");
  const iconNavBarMobileLogo = document.getElementById("navBarMobileLogo");
  const iconNavBarMobile = document.getElementById("navBarMobile");
  const botonAbrirModalNav = document.getElementById("botonAbrirModalNav");

  nav.classList.toggle("sticky", isSticky);

  window.addEventListener("scroll", function () {
    // Verificar si el ancho de la pantalla es menor a 1001px
    if (window.innerWidth < 1001) {
      iconNavBarMobile.classList.toggle("mobileSticky", window.scrollY > 800);
    }
  });

  const backgroundColor = isSticky ? "#0e0700" : "#f6f1e9";
  const textColor = isSticky ? "#fff" : "#2b2b2b";

  const visibility = isSticky ? "visible" : "hidden";
  const position = isSticky ? "relative" : "absolute";

  iconNavBarMobileLogo.style.visibility = visibility;
  iconNavBarMobileLogo.style.position = position;

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
