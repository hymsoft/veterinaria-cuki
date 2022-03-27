const miMenu = document.querySelectorAll("mi-menu");

for (let i = 0; i < miMenu.length; i++) {
  miMenu[i].innerHTML = `
    <li><a href="#us">Nosotros</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="#suscribe">Contacto</a></li>
    `;
}
const miMenuHeaderListItem = document.querySelectorAll("#nav-header li");
const miMenuHeaderLink = document.querySelectorAll("#nav-header a");
for (let i = 0; i < miMenuHeaderLink.length; i++) {
  miMenuHeaderListItem[i].classList.add("nav-item");
  miMenuHeaderLink[i].classList.add("nav-link");
}
