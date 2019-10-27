const hexUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json';
const rgbaUrl = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json';

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let hexArray = [];
let rgbaArray = [];


function drawCanvasImage() {

  

    let img = new Image();

    img.src = "./data/rss.png";

    img.onload = function() {
    context.drawImage(img, 0, 0, 512, 512);
    };

 

}


function drawByHex() {
  fetch(hexUrl)
      .then(res => res.json())
      .then(data => {
        //console.log(data);

        for (let i = 0; i < data.length; i++) {
          let arr = data[i];
          //console.log(arr);

          for (let j = 0; j < arr.length; j++) {
            //console.log(arr[j]);
            arr[j] = '#' + arr[j];

          }


        }

        hexArray = data.slice();
        //console.log(data);
        //console.log(hexArray);

        let width = hexArray[0].length; // Get the width of the array
        let height = hexArray.length; //get height of the array
        scale = canvas.width / width;

        for(let row = 0; row < height; row++) {
          for(let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
              context.fillStyle = hexArray[row][col]; // Set the color to the one specified
              context.fillRect(col * scale, row * scale, canvas.width, canvas.height);
          }
      }

    })
  }



  function drawByRgba() {
    fetch(rgbaUrl)
        .then(res => res.json())
        .then(data => {
          //console.log(data);
  
          // for (let i = 0; i < data.length; i++) {
          //   let arr = data[i];
          //   //console.log(arr);
  
          //   for (let j = 0; j < arr.length; j++) {
          //     //console.log(arr[j]);
          //     arr[j] = '#' + arr[j];
  
          //   }
  
  
          // }
  
          rgbaArray = data.slice();
          //console.log(data);
          //console.log(hexArray);
  
          let width = rgbaArray[0].length; // Get the width of the array
          //console.log(width);
          let height = rgbaArray.length; //get height of the array
          //console.log(height);
          let scale = canvas.width / width;
  
          for(let row = 0; row < height; row++) {
            for(let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                //console.log(rgbaArray[row][col]);
                rgbaArray[row][col].pop();
                let str = rgbaArray[row][col].join(",");
                console.log(str);
                context.fillStyle = 'rgb(str)'; // Set the color to the one specified
                context.fillRect(col, row, canvas.width, canvas.height);
            }
        }
  
      })
    }

















document.querySelector('#list__item_first').addEventListener('click', drawByHex);
document.querySelector('#list__item_second').addEventListener('click', drawByRgba);
document.querySelector('#list__item_third').addEventListener('click', drawCanvasImage);