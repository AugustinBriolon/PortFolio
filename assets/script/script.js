// Animation Loader

const box = document.querySelector('.boxLoader')

window.addEventListener('load', () => {
    box.classList.add('hidden')
})


//Animation Scroll

window.onload = () => {
    window.addEventListener("scroll", () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight
        let position = window.scrollY
        let largeur = document.documentElement.clientWidth

        let barre = (position / hauteur) * largeur;

        document.getElementById("barre-scroll").style.width = barre + "px"
    })
}


// Animation Visible

const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal"]').forEach(function (r) {
    observer.observe(r)
})


// Animation Cursor

let mouseCursor = document.querySelector('.cursor')
let pageLinks = document.querySelectorAll('.linkCursor')

window.addEventListener('mousemove', cursor)

function cursor(e) {
    mouseCursor.setAttribute('style', 'top:'+(e.pageY )+"px; left:"+(e.pageX)+"px;")
}

pageLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
        link.classList.add('hover-link')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
        link.classList.remove('hover-link')
    })
})

// Date Copyright

var maintenant=new Date()
var an = maintenant.getFullYear()
an.toString()

let copyright = document.querySelector('.copyright')
copyright.textContent = (an)