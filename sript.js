const choices = document.querySelectorAll('.choice');
const p = document.querySelectorAll('p');

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', (e) => {
    e.target.textContent = 'x';
  });
}
