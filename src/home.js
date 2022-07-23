function displayHome()
{
  let container = document.getElementById('content');

  let displayContent = document.createElement('div');
  displayContent.classList.add('displayContent');
  displayContent.setAttribute('id', 'displayContent');


  /* ============== ContentOne ============== */

  let contentOne = document.createElement('div');
  contentOne.classList.add('contentOne');

  let img1 = document.createElement('img');
  img1.src = 'images/restaurant.jpg';


  let info1 = document.createElement('div');
  info1.classList.add('info');

  let txt1_1 = document.createElement('h1');
  txt1_1.textContent = "Welcome to Lindblum Restaurant";

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
  info1.appendChild(txt1_1);
  info1.appendChild(txt1_2);

  contentOne.appendChild(top1);
  contentOne.appendChild(bottom1);
  contentOne.appendChild(right1);
  contentOne.appendChild(left1);


  /* ============== ContentTwo ============== */

  let contentTwo = document.createElement('div');
  contentTwo.classList.add('contentTwo');

  let img2 = document.createElement('img');
  img2.src = 'images/salad.jpg';

  let info2 = document.createElement('div');
  info2.classList.add('info');

  let txt2_1 = document.createElement('h4');
  txt2_1.textContent = "THE GASTRONOMY";

  let txt2_2 = document.createElement('p');
  txt2_2.textContent = '”The food is pure understated class with a balanced taste structure, refinement, individuality, and a Japanese touch.”';

  let top2 = document.createElement('div');
  top2.classList.add('top');
  let bottom2 = document.createElement('div');
  bottom2.classList.add('bottom');
  let right2 = document.createElement('div');
  right2.classList.add('right');
  let left2 = document.createElement('div');
  left2.classList.add('left');


  displayContent.appendChild(contentTwo);
  contentTwo.appendChild(img2);

  contentTwo.appendChild(info2);
  info2.appendChild(txt2_1);
  info2.appendChild(txt2_2);

  contentTwo.appendChild(top2);
  contentTwo.appendChild(bottom2);
  contentTwo.appendChild(right2);
  contentTwo.appendChild(left2);


  /* ============== ContentThree ============== */

  let contentThree = document.createElement('div');
  contentThree.classList.add('contentThree');

  let img3 = document.createElement('img');
  img3.src = 'images/red-wine.jpg';

  let info3 = document.createElement('div');
  info3.classList.add('info');

  let txt3_1 = document.createElement('h4');
  txt3_1.textContent = "Inspiration Kitchen";

  let txt3_2 = document.createElement('p');
  txt3_2.textContent = "A beautiful, creative and light dining room with an open kitchen & wine cellar. The room is ideal for exclusive private dining, anniversaries, meetings and other private events.\nThe Inspiration Kitchen serves the same menu as the restaurant and seats up to 16 guests.";

  let top3 = document.createElement('div');
  top3.classList.add('top');
  let bottom3 = document.createElement('div');
  bottom3.classList.add('bottom');
  let right3 = document.createElement('div');
  right3.classList.add('right');
  let left3 = document.createElement('div');
  left3.classList.add('left');


  displayContent.appendChild(contentThree);
  contentThree.appendChild(img3);

  contentThree.appendChild(info3);
  info3.appendChild(txt3_1);
  info3.appendChild(txt3_2);

  contentThree.appendChild(top3);
  contentThree.appendChild(bottom3);
  contentThree.appendChild(right3);
  contentThree.appendChild(left3);


  /* ============== ContentFour ============== */

  let contentFour = document.createElement('div');
  contentFour.classList.add('contentFour');

  let img4 = document.createElement('img');
  img4.src = 'images/fire.jpg';

  let info4 = document.createElement('div');
  info4.classList.add('info');

  let txt4_1 = document.createElement('h4');
  txt4_1.textContent = "THE FIRE";

  let txt4_2 = document.createElement('p');
  txt4_2.textContent = '“It changes everything to have access to real fire in a kitchen. Tempo increases, skills are mastered, and the very last touch is an act of heightened perception and love. The fire makes the food richer and more primal. Rich and bold; maximalism is underrated.”';

  let top4 = document.createElement('div');
  top4.classList.add('top');
  let bottom4 = document.createElement('div');
  bottom4.classList.add('bottom');
  let right4 = document.createElement('div');
  right4.classList.add('right');
  let left4 = document.createElement('div');
  left4.classList.add('left');


  displayContent.appendChild(contentFour);
  contentFour.appendChild(img4);

  contentFour.appendChild(info4);
  info4.appendChild(txt4_1);
  info4.appendChild(txt4_2);

  contentFour.appendChild(top4);
  contentFour.appendChild(bottom4);
  contentFour.appendChild(right4);
  contentFour.appendChild(left4);

}

export default displayHome;