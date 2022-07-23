import displayHome from "./home";
import displayMenuSection from "./menu";
import displayContact from "./contact";
import displayReservation from "./reservation";


let container = document.getElementById('content');

let displayMenu = document.createElement('div');
displayMenu.classList.add('displayMenu');


let btnContent = document.createElement('div');
btnContent.classList.add('btnContent');


let btnHome = document.createElement('button');
btnHome.textContent = "Home";
btnHome.addEventListener('click', function()
{
  let displayContent = document.getElementById('displayContent');
  displayContent.remove();

  displayHome();

});


let btnMenu = document.createElement('button');
btnMenu.textContent = "Menu";
btnMenu.addEventListener('click', function()
{
  let displayContent = document.getElementById('displayContent');
  displayContent.remove();

  displayMenuSection();

});


let btnContact = document.createElement('button');
btnContact.textContent = "Contact";
btnContact.addEventListener('click', function()
{
  let displayContent = document.getElementById('displayContent');
  displayContent.remove();

  displayContact();

});


let imgMichelin = document.createElement('img');
imgMichelin.src = 'images/michelin.png';

let btnReservation = document.createElement('button');
btnReservation.classList.add('btnReservation')
btnReservation.textContent = "Reservation";
btnReservation.addEventListener('click', function()
{
  let displayContent = document.getElementById('displayContent');
  displayContent.remove();

  displayReservation();

});


let footer = document.createElement('div');
footer.classList.add('footer');


container.appendChild(displayMenu);
container.appendChild(footer);

displayMenu.appendChild(btnContent);
btnContent.appendChild(btnHome);
btnContent.appendChild(btnMenu);
btnContent.appendChild(btnContact);

displayMenu.appendChild(imgMichelin);
displayMenu.appendChild(btnReservation);


displayHome();

//displayMenuSection();