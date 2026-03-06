document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()

    const section = document.querySelector(this.getAttribute('href'))

    section.scrollIntoView({
      behavior: "smooth"
    })
  })
})

const btnTopo = document.getElementById("btn-topo")

window.addEventListener("scroll", function(){

  if(window.scrollY > 300){
    btnTopo.style.display = "block"
  } else{
    btnTopo.style.display = "none"
  }

})

btnTopo.addEventListener("click", function(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

})

const botaoDark = document.getElementById("dark-mode-toggle")

botaoDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})

function virarCard(card) {
  card.classList.toggle("virado")
}