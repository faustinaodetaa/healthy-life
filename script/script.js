let slideIndex = 0;
showSlides();

//seeds

const menu = [
  {
    name: 'Menu 1',
    description: 'Desc Menu 1',
    price: 20000,
  },{
    name: 'Menu 2',
    description: 'Desc Menu 2',
    price: 40000,
  },{
    name: 'Menu 3',
    description: 'Desc Menu 3',
    price: 30000,
  }
]

localStorage.setItem('menu', JSON.stringify(menu))

const historyOrderFood = [
  {
      name: "Kezia Gloria",
      email: "kezia@mail.com",
      phoneNumber: 083742847232,
      address: "Jasmine Street",
      food: 1,
      qty: 5,
      date: '01/01/2022'
  },{
      name: "Faustina Odeta",
      email: "faustin@mail.com",
      phoneNumber: 088493920344,
      address: "Rose Street",
      food: 0,
      qty: 10,
      date: '02/02/2022'
  },{
      name: "Kevin Robert",
      email: "kevin@mail.com",
      phoneNumber: 08482940404,
      address: "Lavender Street",
      food: 2,
      qty: 7,
      date: '03/03/2022'
  },
]

localStorage.setItem('order', JSON.stringify(historyOrderFood))

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
} 
