function displayMenuSection()
{
  let container = document.getElementById('content');

  let displayContent = document.createElement('div');
  displayContent.classList.add('displayContent');
  displayContent.setAttribute('id', 'displayContent');


  /* ============== ContentOne ============== */

  let menuContentOne = document.createElement('div');
  menuContentOne.classList.add('menuContentOne');

  let img1 = document.createElement('img');
  img1.src = 'images/italian-cuisine.jpg';


  let info1 = document.createElement('div');
  info1.classList.add('info');

  let txt1_1 = document.createElement('h1');
  txt1_1.textContent = "Menu";

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

  displayContent.appendChild(menuContentOne);
  menuContentOne.appendChild(img1);

  menuContentOne.appendChild(info1);
  info1.appendChild(txt1_1);
  info1.appendChild(txt1_2);

  menuContentOne.appendChild(top1);
  menuContentOne.appendChild(bottom1);
  menuContentOne.appendChild(right1);
  menuContentOne.appendChild(left1);

}

export default displayMenuSection;