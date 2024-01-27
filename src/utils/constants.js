import gsap from "gsap"

const colorCodes = {
    primaryPurple: 'rgb(193, 51, 255)',
    primaryBlack: 'rgb(18, 18, 18)',
    primaryBlackAlpha: 'rgba(18, 18, 18, 0.7)',
    primaryWhite: 'rgb(248, 248, 255)',
    gradientPurple: 'rgba(177,0,255,1)'
}

const onEnter = (color, event, invert=false) => {
    if(!invert) {
        gsap.to(event.currentTarget, {
            color: color,
            duration: 0.35,
            ease: 'power4.out',
        })
    } else {
        gsap.to(event.currentTarget, {
            backgroundColor: event.currentTarget.classList.contains('color') ? colorCodes.primaryBlack : color,
            duration: 0.35,
            ease: 'power4.out',
        })
    }
    
}

const onLeave = ({ currentTarget }, color=null, invert=false) => {
    if(!invert) {
        gsap.to(currentTarget, {
            color: colorCodes.primaryWhite,
            duration: 0.35,
            ease: 'power4.out',
        })
    } else {
        gsap.to(currentTarget, {
            backgroundColor: currentTarget.classList.contains('color') ? color : colorCodes.primaryBlack,
            duration: 0.35,
            ease: 'power4.out',
        })
    }
    

    
}

export { colorCodes, onEnter, onLeave };


export const titleLetter = ['G', 'u', 's', 't', 'a', 'v', 'o']