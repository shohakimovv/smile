const koz = document.querySelectorAll('.koz');
window.addEventListener('mousemove', (e) => {
    console.log(e.pageX);
    console.log(window.innerWidth);
    koz.forEach(el => {
        const speed = el.getAttribute('speed')
        let x = (window.innerWidth - e.pageX * speed) / 125
        let y = (window.innerHeight - e.pageY * speed) / 105
        el.style.transform = `translate(${-x}px, ${y}px)`
    })
})