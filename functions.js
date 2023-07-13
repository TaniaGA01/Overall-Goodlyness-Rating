const getBlock = document.querySelector('.stars-block')
const getAllStars = document.querySelectorAll('.star')
const paragraphe = document.querySelector('.rate')
const paragrapheClick = document.querySelector('.rate-click')
const allStarsArray = Array.from(getAllStars)
const list = ['poor', 'fair', 'good', 'very good', 'excellent']

const starHover = () => {
    for (const star of getAllStars){
        const starsIndex = allStarsArray.indexOf(star)
        let newStarsArray = []

        star.addEventListener('mouseenter', () => {
            paragraphe.style.display = 'block'
            paragrapheClick.style.color = 'white'
            allStarsArray.forEach((item, idx) => {
                item.childNodes[1].classList.remove('star-inner-gold')
                item.childNodes[1].classList.add('star-inner-white')
                item.childNodes[1].style.fill = 'white'
                if(idx <= starsIndex){
                    newStarsArray.push(item)
                }
            })
            newStarsArray.forEach(item => {
                item.childNodes[1].style.fill = 'gold'
            })
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(starsIndex === index){
                    paragraphe.textContent = element
                    paragraphe.style.color = '#000000'
                }
            }
        })

        star.addEventListener('mouseleave', () => {
            paragraphe.style.color = 'white'
            
            newStarsArray.forEach(item => {
                item.childNodes[1].classList.remove('star-inner-gold')
                item.childNodes[1].classList.add('star-inner-white')
                item.childNodes[1].style.fill = 'white'
            })
            newStarsArray = []
            paragraphe.textContent = ''
        })

        star.addEventListener('click', () => {
            newStarsArray = []  
            paragraphe.style.display = 'none'
            newStarsArray.forEach(item => {
                item.childNodes[1].classList.remove('star-inner-white')
                item.childNodes[1].classList.add('star-inner-gold')
                
                if(item.childNodes[1].classList('star-inner-white')){
                    newStarsArray.forEach(item => {
                        item.childNodes[1].style.fill = 'gold'
                    })
                }
                newStarsArray = []
            })
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if(starsIndex === index){
                    paragrapheClick.style.color = '#000000'
                    paragrapheClick.textContent = element
                }
            }
        })
    }
}
starHover()