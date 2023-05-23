

/*
function showText () {
const readMore = document.getElementById("more")
const span =  document.getElementById("text")

const proba = document.createElement("p")
proba.innerText = "proba"

span.style.display = "inline"
readMore.style.display = "none"

span.appendChild(proba)



/*const title1Element = document.querySelector('.title1');
const title1Element = document.getElementsByClassName('title1')[0];
/*console.dir(title1Element);

title1Element.textContent = 'ChatGPT';
title1Element.style.backgroundColor = "red"
} */



const skillCircles = document.querySelectorAll('.skill_circle');

skillCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    location.reload();
  });
});





const numberElement = document.querySelectorAll('.cv_stats_major_numbers');
numberElement.forEach((numbers) => {

    let currentNumber = parseInt(numbers.textContent);
    let iwe = 0

    setInterval(() => {
        if (iwe < currentNumber) {
        iwe++;
        numbers.textContent = iwe;
        } else {
            clearInterval(intervalId);
        }

        numbers.textContent = iwe;
    }, 100); // speed of changing the number

    numbers.addEventListener('click', () => {
        location.reload();
      });
});

 
  

  
const downloadButton1 = document.getElementsByClassName('download_cv')[0];
const downloadUrl = 'raychev-cv.pdf';
const fileName = 'raychev-cv.pdf';

downloadButton1.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = fileName;
  link.click();
});



const numberElement1 = document.querySelectorAll('.skill_circle');
numberElement1.forEach((numbers) => {
    let currentNumber = parseInt(numbers.getAttribute('data-progress'));
    let iwe1 = 0;
    let intervalId;

    intervalId = setInterval(() => {
        if (iwe1 < currentNumber) {
            iwe1++;
            numbers.setAttribute('data-progress', iwe1);
        } else {
            clearInterval(intervalId);
        }

        numbers.setAttribute('data-progress', iwe1);
    }, 10); // speed of changing the number

    numbers.addEventListener('click', () => {
        location.reload();
    });
});






