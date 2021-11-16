const aboutPerson = document.querySelector('.rectangle__content');
const triangle = document.querySelector('.team-part__triangle');
const manCard = document.querySelector('.man-card');

manCard.addEventListener('mouseover', (event) => {
  triangle.style.display = 'block';
  aboutPerson.style.display = 'block';
})

manCard.addEventListener('mouseout', (event) => {
  triangle.style.display = 'none';
  aboutPerson.style.display = 'none';
})