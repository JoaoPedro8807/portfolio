
const observer = new IntersectionObserver( props =>{
    props.forEach( prop =>{
        console.log(prop.target)
        if(prop.isIntersecting){
            prop.target.classList.add('show')
        }else{
            if(!prop.target.classList.contains('intro-container')){
                prop.target.classList.remove('show')
            }
        }
    } )
} ) 

const sections_elements = document.querySelectorAll('.section')
const jobs_cards = document.querySelectorAll('.job-card-container')
const cards = document.querySelectorAll('.card')



sections_elements.forEach(e => observer.observe(e))
jobs_cards.forEach(e => observer.observe(e))
cards.forEach(e => observer.observe(e))