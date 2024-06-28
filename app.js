

const experienceCircle = document.querySelector('#experience')
const experienceFull = document.querySelector('#fullscreen-experience')
const closeExperienceFull = document.querySelector('#fullscreen-experience .block-short')

const capabilityCircle = document.querySelector('#capability')
const capabilityFull = document.querySelector('#fullscreen-capability')
const closeCapabilityFull = document.querySelector('#fullscreen-capability .block-short')

const masteryCircle = document.querySelector('#mastery')
const masteryFull = document.querySelector('#fullscreen-mastery')
const closeMasteryFull = document.querySelector('#fullscreen-mastery .block-short')



const whatsapp = document.querySelector('#whatsapp')
const discord = document.querySelector('#discord')
const instagram = document.querySelector('#instagram')



const navbar = document.querySelector('.nav')
const navbarContent = Array.from(document.querySelectorAll('.nav > p'))


const hideContent = document.querySelector('.hide-content')

const firstDisplay = document.querySelector('.bagian-1')



let instaLink = () => {
    window.location.href = 'https://www.instagram.com/raihanzayyannabil/'
}
instagram.addEventListener('click', instaLink)



if (window.matchMedia("(min-width: 601px)").matches) {
// desktop
    experienceCircle.addEventListener('click', function() {
        experienceFull.classList.toggle('experience')
        experienceFull.classList.toggle('disappear')
    })
    closeExperienceFull.addEventListener('click', function() {
        experienceFull.classList.toggle('experience')
        experienceFull.classList.toggle('disappear')
    })
    capabilityCircle.addEventListener('click', function() {
        capabilityFull.classList.toggle('capability')
        capabilityFull.classList.toggle('disappear')
    })
    
    closeCapabilityFull.addEventListener('click', function() {
        capabilityFull.classList.toggle('capability')
        capabilityFull.classList.toggle('disappear')
    })
    masteryCircle.addEventListener('click', function() {
        masteryFull.classList.toggle('mastery')
        masteryFull.classList.toggle('disappear')
    })
    
    closeMasteryFull.addEventListener('click', function() {
        masteryFull.classList.toggle('mastery')
        masteryFull.classList.toggle('disappear')
    })
   






} else if (window.matchMedia("(max-width: 601px)").matches) {
 // mobile

 function hideNavbarContent() {
    navbarContent.forEach((m) => { m.classList.add('hide-content'); });
}
hideNavbarContent();  // Initially hide the navbar content

navbar.addEventListener('click', () => {
    navbarContent.forEach((m) => { m.classList.toggle('hide-content'); });
});



experienceCircle.addEventListener('click', function() {
    experienceFull.classList.toggle('experience')
    experienceFull.classList.toggle('disappear')
})
closeExperienceFull.addEventListener('click', function() {
    experienceFull.classList.toggle('experience')
    experienceFull.classList.toggle('disappear')
})
capabilityCircle.addEventListener('click', function() {
    capabilityFull.classList.toggle('capability')
    capabilityFull.classList.toggle('disappear')
})

closeCapabilityFull.addEventListener('click', function() {
    capabilityFull.classList.toggle('capability')
    capabilityFull.classList.toggle('disappear')
})
masteryCircle.addEventListener('click', function() {
    masteryFull.classList.toggle('mastery')
    masteryFull.classList.toggle('disappear')
})

closeMasteryFull.addEventListener('click', function() {
    masteryFull.classList.toggle('mastery')
    masteryFull.classList.toggle('disappear')
})
} else {
    alert('This Website Is Not Available In Your Device')
}