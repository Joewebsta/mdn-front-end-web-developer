const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

images.forEach(image => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  thumbBar.appendChild(newImage);
})

thumbBar.addEventListener('click', e => {
  displayedImage.src = e.target.src;
})

btn.addEventListener('click', () => {
  if (btn.classList.value === 'dark'){
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})