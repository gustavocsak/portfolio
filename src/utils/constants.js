import gsap from "gsap"

/**
 * TODO: REFACTOR ON ENTER - TAKE BACKGROUND COLOR OR COLOR/TAKE PARAMETER COLOR TO FROM
 */

const colorCodes = {
    primaryPurple: 'rgb(193, 51, 255)',
    // primaryBlack: 'rgb(18, 18, 21)',
    primaryBlack: '#030712',
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

const projects = [
	{
		title: "Tricky",
		oneLiner: "Ticket tracking system.",
		description: `Allows you to create, update, delete and track tickets/tasks for your various projects.
					 Tricky makes you more productive by giving you a view of your tasks and tickets that needs to be worked on.`,
		techStack: ["tailwind", "next", "prisma", "mongodb"],
		liveSource: "tricket",
		github: "https://github.com/gustavocsak/tricket",
		image: "tricky.png"
	},
	{
		title: "cornerBet",
		oneLiner: "Automated bot for scrapping socccer matches.",
		description: `Automated scrapper for soccer matches statistics and make predictions for possible end time corners.
					Powered by cheerio, a library for parsing and manipulating HTML and XML.`,
		techStack: ["javascript", "mongodb"],
		liveSource: "cornerbet",
		github: "https://github.com/gustavocsak/cornerbet",
		image: "cornerbet.png"
	},

]

export { colorCodes, onEnter, onLeave, projects };


export const titleLetter = ['G', 'u', 's', 't', 'a', 'v', 'o']