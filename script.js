const navMenu = document.querySelector ('.navMenu')
const allLi = document.querySelectorAll ('li')

allLi.forEach ((li, index) => {

    li.addEventListener ("click", e => {
        navMenu.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        const indicator = document.querySelector ('.indicator')
        indicator.style.transform = `translateX(calc(${index * 117}px))`
    })
})

