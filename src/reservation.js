function displayReservation()
{
  let container = document.getElementById('content');

  let displayContent = document.createElement('div');
  displayContent.classList.add('displayContent');
  displayContent.setAttribute('id', 'displayContent');


  /* ============== ContentOne ============== */

  let contentOne = document.createElement('div');
  contentOne.classList.add('contentOne');

  let img1 = document.createElement('img');
  img1.src = 'images/calendar.jpg';


  let info1 = document.createElement('div');
  info1.classList.add('info');

  let infoImg1 = document.createElement('img');
  infoImg1.src = 'images/construccion.png';

  let txt1_1 = document.createElement('h1');
  txt1_1.textContent = "Reservation";

  let txt1_2 = document.createElement('p');
  txt1_2.textContent = "";


  let top1 = document.createElement('div');
  top1.classList.add('top');
  let bottom1 = document.createElement('div');
  bottom1.classList.add('bottom');
  let right1 = document.createElement('div');
  right1.classList.add('right');
  let left1 = document.createElement('div');
  left1.classList.add('left');


  container.appendChild(displayContent);

  displayContent.appendChild(contentOne);
  contentOne.appendChild(img1);

  contentOne.appendChild(info1);
  info1.appendChild(infoImg1);
  info1.appendChild(txt1_1);
  info1.appendChild(txt1_2);

  contentOne.appendChild(top1);
  contentOne.appendChild(bottom1);
  contentOne.appendChild(right1);
  contentOne.appendChild(left1);
}

export default displayReservation;