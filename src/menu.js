function displayMenuSection()
{
  let container = document.getElementById('content');

/*
  let displayMainContent = document.createElement('div');
  displayMainContent.classList.add('displayMainContent');
  displayMainContent.setAttribute('id', 'displayMainContent');
  */

  let displayContent = document.createElement('div');
  displayContent.classList.add('displayContent');
  displayContent.setAttribute('id', 'displayContent');


  container.appendChild(displayContent);
  //container.appendChild(displayMainContent);

  /* ============== ContentOne ============== */

  let contentOne = document.createElement('div');
  contentOne.classList.add('contentOne');

  let backgroundImg = document.createElement('img');
  backgroundImg.src = 'images/italian-cuisine.jpg';

  let topImg = document.createElement('div');
  topImg.classList.add('top');
  let bottomImg = document.createElement('div');
  bottomImg.classList.add('bottom');
  let rightImg = document.createElement('div');
  rightImg.classList.add('right');
  let leftImg = document.createElement('div');
  leftImg.classList.add('left');


  displayContent.appendChild(contentOne);
  contentOne.appendChild(backgroundImg);

  contentOne.appendChild(topImg);
  contentOne.appendChild(bottomImg);
  contentOne.appendChild(rightImg);
  contentOne.appendChild(leftImg);


  /* ============== Menu Content ============== */

  let menuContentOne = document.createElement('div');
  menuContentOne.classList.add('menuContentOne');

  displayContent.appendChild(menuContentOne);


  /* ============== Info Menu 1 ============== */

  let infoMenu1 = document.createElement('div');
  infoMenu1.classList.add('infoMenu');

  let img1 = document.createElement('img');
  img1.src = 'images/pizza.jpg';

  let txt1_1 = document.createElement('h4');
  txt1_1.textContent = "Pizza";

  let txt1_2 = document.createElement('p');
  txt1_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu1);
  infoMenu1.appendChild(img1);
  infoMenu1.appendChild(txt1_1);
  infoMenu1.appendChild(txt1_2);


  /* ============== Info Menu 2 ============== */

  let infoMenu2 = document.createElement('div');
  infoMenu2.classList.add('infoMenu');

  let img2 = document.createElement('img');
  img2.src = 'images/barbecue.jpg';

  let txt2_1 = document.createElement('h4');
  txt2_1.textContent = "Barbecue";

  let txt2_2 = document.createElement('p');
  txt2_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu2);
  infoMenu2.appendChild(img2);
  infoMenu2.appendChild(txt2_1);
  infoMenu2.appendChild(txt2_2);


  /* ============== Info Menu 3 ============== */

  let infoMenu3 = document.createElement('div');
  infoMenu3.classList.add('infoMenu');

  let img3 = document.createElement('img');
  img3.src = 'images/pasta.jpg';

  let txt3_1 = document.createElement('h4');
  txt3_1.textContent = "Pasta";

  let txt3_2 = document.createElement('p');
  txt3_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu3);
  infoMenu3.appendChild(img3);
  infoMenu3.appendChild(txt3_1);
  infoMenu3.appendChild(txt3_2);


  /* ============== Info Menu 4 ============== */

  let infoMenu4 = document.createElement('div');
  infoMenu4.classList.add('infoMenu');

  let img4 = document.createElement('img');
  img4.src = 'images/salmon.jpg';

  let txt4_1 = document.createElement('h4');
  txt4_1.textContent = "Salmon";

  let txt4_2 = document.createElement('p');
  txt4_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu4);
  infoMenu4.appendChild(img4);
  infoMenu4.appendChild(txt4_1);
  infoMenu4.appendChild(txt4_2);


  /* ============== Info Menu 5 ============== */

  let infoMenu5 = document.createElement('div');
  infoMenu5.classList.add('infoMenu');

  let img5 = document.createElement('img');
  img5.src = 'images/hamburger.jpg';

  let txt5_1 = document.createElement('h4');
  txt5_1.textContent = "Hamburger";

  let txt5_2 = document.createElement('p');
  txt5_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu5);
  infoMenu5.appendChild(img5);
  infoMenu5.appendChild(txt5_1);
  infoMenu5.appendChild(txt5_2);


  /* ============== Info Menu 6 ============== */

  let infoMenu6 = document.createElement('div');
  infoMenu6.classList.add('infoMenu');

  let img6 = document.createElement('img');
  img6.src = 'images/burrito.jpg';

  let txt6_1 = document.createElement('h4');
  txt6_1.textContent = "Burrito";

  let txt6_2 = document.createElement('p');
  txt6_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu6);
  infoMenu6.appendChild(img6);
  infoMenu6.appendChild(txt6_1);
  infoMenu6.appendChild(txt6_2);


  /* ============== Info Menu 7 ============== */

  let infoMenu7 = document.createElement('div');
  infoMenu7.classList.add('infoMenu');

  let img7 = document.createElement('img');
  img7.src = 'images/pancakes.jpg';

  let txt7_1 = document.createElement('h4');
  txt7_1.textContent = "Pancakes";

  let txt7_2 = document.createElement('p');
  txt7_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu7);
  infoMenu7.appendChild(img7);
  infoMenu7.appendChild(txt7_1);
  infoMenu7.appendChild(txt7_2);


  /* ============== Info Menu 8 ============== */

  let infoMenu8 = document.createElement('div');
  infoMenu8.classList.add('infoMenu');

  let img8 = document.createElement('img');
  img8.src = 'images/charcuterie.jpg';

  let txt8_1 = document.createElement('h4');
  txt8_1.textContent = "Charcuterie";

  let txt8_2 = document.createElement('p');
  txt8_2.textContent = "bla bla bla";

  
  menuContentOne.appendChild(infoMenu8);
  infoMenu8.appendChild(img8);
  infoMenu8.appendChild(txt8_1);
  infoMenu8.appendChild(txt8_2);

}

export default displayMenuSection;
