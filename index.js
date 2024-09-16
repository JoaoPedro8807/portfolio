
const observer = new IntersectionObserver( props =>{
    props.forEach( prop =>{
        if(prop.isIntersecting){
            prop.target.classList.add('show')
        }
    } )
} ) 

const sections_elements = document.querySelectorAll('.section')
const jobs_cards = document.querySelectorAll('.job-card-container')


sections_elements.forEach(e => observer.observe(e))
jobs_cards.forEach(e => observer.observe(e))
