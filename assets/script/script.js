// Date Copyright

var maintenant=new Date();
var an = maintenant.getFullYear();
an.toString();

let copyright = document.querySelector('.copyright')
copyright.textContent = (an);


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