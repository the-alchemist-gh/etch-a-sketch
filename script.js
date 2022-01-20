// const divEl = document.createElement('div');
const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-color');
const eraseBtn = document.getElementById('erase-color');
const colorPicker = document.getElementById('color-picker');
const slider = document.getElementById('myRange');
const sliderNum = document.getElementById('slider-number');
let cpValue

const dBlack = document.getElementById('black-color');

// const pixels = prompt('Enter Pixels');

let pixel=slider.value;


// function to remove all child nodes
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

slider.addEventListener('input', ()=>{
  sliderNum.textContent = slider.value +' x '+ slider.value;
  removeAllChildNodes(container);
  createDivs(slider.value, slider.value);
});

createDivs(pixel,pixel);



function createDivs(pixel, pixel){

    for (let i=0; i < (pixel * pixel); i++){
    const divEl = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${pixel} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixel} , 1fr)`;
    divEl.classList.add('boxes');
    // boxes.style.height = boxHeight+'px';
    // boxes.style.width = boxWidth+'px';
    container.appendChild(divEl);

  };

  blackColor(pixel, pixel);
};

function blackColor(pixel, pixel){
  const boxes = document.querySelectorAll('.boxes');


  for (let i=0; i < (pixel * pixel); i++){
    boxes[i].addEventListener('mouseover', ()=>{
      boxes[i].style.backgroundColor = "black";
    })
  }
}

  resetBtn.addEventListener('click', ()=>{
    const boxes1 = document.querySelectorAll('.boxes');
    for (let i=0; i < (pixel * pixel); i++){
      boxes1[i].style.backgroundColor = "#fff";
    }
  });

  eraseBtn.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (pixel * pixel); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "#fff";
      })
    }
  });

  dBlack.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (pixel * pixel); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "black";
      })
    }
  } );

  // Change color
  colorPicker.addEventListener('change',()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (pixel * pixel); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = colorPicker.value;
      });
    };
  });
    



