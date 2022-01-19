// const divEl = document.createElement('div');
const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-color');
const eraseBtn = document.getElementById('erase-color');
const colorPicker = document.getElementById('color-picker');
let cpValue

const dBlack = document.getElementById('black-color');

// const pixels = prompt('Enter Pixels');

let col = pixels;
let rows = pixels;

createDivs(col,rows);

// container.appendChild(divEl);

// // add style to boxes
// let boxWidth = parseInt(prompt('Enter number'));
// let boxHeight = parseInt(prompt('Enter height number'));


// let containerWidth = container.offsetWidth / boxWidth;
// let containerHeight = container.offsetHeight / boxHeight;




function createDivs(col, rows){

    for (let i=0; i < (col * rows); i++){
    const divEl = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${col} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows} , 1fr)`;
    divEl.classList.add('boxes');
    // boxes.style.height = boxHeight+'px';
    // boxes.style.width = boxWidth+'px';
    container.appendChild(divEl);

  };

  blackColor(col, rows);
};

function blackColor(col, rows){
  const boxes = document.querySelectorAll('.boxes');


  for (let i=0; i < (col * rows); i++){
    boxes[i].addEventListener('mouseover', ()=>{
      boxes[i].style.backgroundColor = "black";
    })
  }
}

  resetBtn.addEventListener('click', ()=>{
    const boxes1 = document.querySelectorAll('.boxes');
    for (let i=0; i < (col * rows); i++){
      boxes1[i].style.backgroundColor = "#fff";
    }
  });

  eraseBtn.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (col * rows); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "#fff";
      })
    }
  });

  dBlack.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (col * rows); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "black";
      })
    }
  } );

  // Change color
  colorPicker.addEventListener('change',()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (col * rows); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = colorPicker.value;
        console.log(colorPicker.value);
      })
    }
  });
    



