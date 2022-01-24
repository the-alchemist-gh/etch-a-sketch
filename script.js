// const divEl = document.createElement('div');
const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-color');
const eraseBtn = document.getElementById('erase-color');
const rgbBtn = document.getElementById('rainbow-color');
const colorPicker = document.getElementById('color-picker');
const slider = document.getElementById('myRange');
const sliderNum = document.getElementById('slider-number');
let cpValue

const dBlack = document.getElementById('black-color');

// const pixels = prompt('Enter Pixels');



// function to remove all child nodes
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

slider.addEventListener('input', ()=>{
  sliderNum.textContent = slider.value +' x '+ slider.value;
  let pixel = slider.value;
  removeAllChildNodes(container);
  createDivs(slider.value);
});

let pixel=slider.value;

createDivs(pixel);



function createDivs(pixel){

    for (let i=0; i < (pixel * pixel); i++){
    const divEl = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${pixel} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${pixel} , 1fr)`;
    divEl.classList.add('boxes');
    // boxes.style.height = boxHeight+'px';
    // boxes.style.width = boxWidth+'px';
    container.appendChild(divEl);

  };

  blackColor(pixel);
};

function blackColor(pixel){
  const boxes = document.querySelectorAll('.boxes');
  for (let i=0; i < (pixel * pixel); i++){
    boxes[i].addEventListener('mouseover', ()=>{
      boxes[i].style.backgroundColor = "black";
    })
  }
}

  resetBtn.addEventListener('click', ()=>{
    const boxes1 = document.querySelectorAll('.boxes');
    for (let i=0; i < (slider.value * slider.value); i++){
      boxes1[i].style.backgroundColor = "#fff";
    }
  });

  eraseBtn.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (slider.value * slider.value); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "#fff";
      })
    }
  });

  dBlack.addEventListener('click', ()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (slider.value * slider.value); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = "black";
      })
    }
  } );

// RAINBOW
  rgbBtn.addEventListener('click', ()=>{
    let boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (slider.value * slider.value); i++){
      boxes[i].addEventListener('mouseover', ()=>{
        let rColor = Math.floor(Math.random() * 255);
        let gColor = Math.floor(Math.random() * 255);
        let bColor = Math.floor(Math.random() * 255);
        boxes[i].style.backgroundColor = `rgb(${rColor},${gColor},${bColor})`;
      })
      // console.log(pixel);
      console.log(slider.value);

    }
  } );

  // function rainbowColor(slider){
  //   let boxes = document.querySelectorAll('.boxes');
  //   for (let i=0; i < (slider.value * slider.value); i++){
  //     boxes[i].addEventListener('mouseover', ()=>{
  //       let rColor = Math.floor(Math.random() * 255);
  //       let gColor = Math.floor(Math.random() * 255);
  //       let bColor = Math.floor(Math.random() * 255);

  //       boxes[i].style.backgroundColor = `rgb(${rColor},${gColor},${bColor})`;
  //     })
  //   }
  // }

  // function changeColor(slider){
  //       let boxes = document.querySelectorAll('.boxes');

  //   for (let i=0; i < (slider.value * slider.value); i++){
  //     boxes[i].addEventListener('mouseover', ()=>{
  //       boxes[i].style.backgroundColor = colorPicker.value;
  //     });
  //   }
  // }

  // Change color
  colorPicker.addEventListener('change',()=>{
    const boxes = document.querySelectorAll('.boxes');
    for (let i=0; i < (slider.value * slider.value); i++){
      // boxes[i].removeEventListener('mouseover', changeColor(slider))
      boxes[i].addEventListener('mouseover', ()=>{
        boxes[i].style.backgroundColor = colorPicker.value;
      });
    }; 
  });




