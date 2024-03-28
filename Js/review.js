// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'AI Engineer',
    img: 'Img/zahra.jpg',
    text: "  Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Velit nulla debitisquisquam fugiat nesciunt aspernatur, "
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'Img/person-2.jpg',
    text: "adipisicing elit. Velit nulla debitis quisquam fugiat nesciunt aspernatur, "
  },
  {
    id: 3,
    name: 'Maria Alaa',
    job: 'intern',
    img: 'Img/zahra1.jpg',
    text: "adipisicing elit. Velit nulla debitis quisquam fugiat nesciunt aspernatur, "
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'Img/zahra2.jpg',
    text: "adipisicing elit. Velit nulla debitis quisquam fugiat nesciunt aspernatur, "
  },
];
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem)
})
function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
}
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem)
})
