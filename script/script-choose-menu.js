

  console.log(localStorage.getItem('menu'))
  loadChooseMenu()
  var chooseMenu = []
  function loadChooseMenu(){
    chooseMenu = JSON.parse(localStorage.getItem('menu'))
    console.log(chooseMenu)
    const container = document.getElementById('container-choose-menu')
    const template = document.getElementById('card-choose-menu')
  

    for (let index in chooseMenu) {
        console.log(menu[index].name)
        const card = template.content.cloneNode(true)
        card.getElementById('name-choose-menu').innerText = menu[index].name
        card.getElementById('desc-choose-menu').innerText = 'IDR ' + menu[index].price
        card.getElementById('btn-choose-menu').addEventListener('click', () => order(index, document.getElementById("qty-choose-menu").value))
        container.appendChild(card)
    }
  
  }

  function order(index, qty){
    var error = document.getElementById("err-choose-menu")
    var msg = document.getElementById("err-msg-choose-menu")

    if(!qty){
      msg.innerText = 'Quantity must be filled!'
      error.setAttribute('style', 'visibility: visible')
    }else if(qty < 0){
      msg.innerText = 'Quantity must more than 0!'
      error.setAttribute('style', 'visibility: visible')
    }else{
      error.setAttribute('style', 'visibility: hidden')
      let cart = [{
        menu: index,
        qty: qty,
      }]  
      localStorage.setItem('menuChosen', JSON.stringify(cart))
      location.href = '/order-food.html';
    }
  }


  