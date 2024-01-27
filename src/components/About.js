import React, { useEffect, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useColor } from './ColorContext';
import p5 from 'p5';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { primaryColor } = useColor();
    const textShadow = {
        textShadow: `7px 4px 15px ${primaryColor}`,
        color: primaryColor
    }
    useGSAP(() => {

        gsap.to(".sentence", {
            y: 0,
            duration: 0.3,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".title-start",
                start: "top 65%",
                once: true,
            }
        })
        
    }, []);

    useEffect(() => {

        const sketch = (p) => {

            const createGrid = (cols, rows) => {
                let arr = new Array(cols);
                for(let i = 0; i < arr.length; i++) {
                    arr[i] = new Array(rows);
                    for(let j = 0; j < arr[i].length; j++) {
                        arr[i][j] = 0;
                    }
                }
                return arr;
            }
            let grid;
            let width = 10;
            let cols, rows;

            let parent = p.select('.canvas-parent')
            p.setup = () => {
                let canvas = p.createCanvas(500, 400);
                canvas.class('border-2 border-zinc-600 self-center')
                canvas.parent(parent);
                p.background(0);
                console.log(p.width)
                cols = Math.floor(p.width / width) 
                rows = Math.floor(p.height / width)
                grid = createGrid(cols, rows);
               

                for(let i = 0; i < cols; i++) {
                    for(let j = 0; j < rows; j++) {
                        grid[i][j] = 0;
                    }
                }

            };

            p.mouseDragged = () => {
                let row = p.floor(p.mouseX / width);
                let col = p.floor(p.mouseY / width);
                grid[row][col] = 1;
            }

            p.draw = () => {
                p.background(0);
                
                for(let i = 0; i < cols; i++) {
                    for(let j = 0; j < rows; j++) {
                        p.stroke(255);
                        p.fill(grid[i][j] * 255);
                        let x = i * width;
                        let y = j * width;
                        p.square(x, y, width);
                    }
                }
                let nextGrid = createGrid(cols, rows);
                for(let i = 0; i < cols; i++) {
                    for(let j = 0; j < rows; j++) {
                        let current = grid[i][j];
                        
                        if(current === 1) {
                            let below = grid[i][j + 1];
                            let bottomR = grid[i + 1][j + 1];
                            let bottomL = grid[i - 1][j + 1];
                            if(j === rows - 1) {
                                nextGrid[i][j] = 1;
                            } else if(below === 0) {
                                nextGrid[i][j + 1] = 1;
                            } else if(bottomR === 0) {
                                nextGrid[i + 1][j + 1] = 1;
                            } else if(bottomL === 0) {
                                nextGrid[i - 1][j + 1] = 1
                            } else {
                                nextGrid[i][j] = 1;
                            }
                        }
                    }
                }
                grid = nextGrid;
            };

            // p.windowResized = () => {
            //     parent = p.select('.canvas-parent')
            //     console.log(parent.width)
            //     p.resizeCanvas(parent.width, parent.height);
            // }
        };
        const myP5 = new p5(sketch);        
        return () => {
            myP5.remove();
        };
    }, [])

    return (
        <div className='flex items-center justify-center px-10 lg:my-12'>
            <div className='lg:w-8/12'>
                <div className='flex flex-col text-left text-wrap font-bold text-xl gap-8'>
                    <div className='title-start clip'>
                        <div className='sentence text-5xl font-bold text-left md:text-6xl'>About Me</div>
                    </div>

                    <div className='clip'>
                        <div className='sentence'>
                            Currently working as a&nbsp;
                            <span style={textShadow}>Computer Lab Assistant&nbsp;</span> at&nbsp;
                            <span style={textShadow}>Langara College</span>, where I graduated with a&nbsp;
                            <span style={textShadow}>Diploma in Computer Studies</span>&nbsp; and a &nbsp;
                            <span style={textShadow}>citation in Full Stack Web Development</span>.
                        </div>
                    </div> {/**remember put class sentence in sentence */}
                    <div className='clip'>
                        <div className='sentence'>
                            Pursuing a bachelor's degree in &nbsp;
                            <span style={textShadow}>Computer Science</span>&nbsp; at Estácio University.
                        </div>
                    </div>
                    <div className='clip'>
                        <div className='sentence'>
                            Aside from coding, I really enjoy&nbsp;
                            <span style={textShadow}>exploring new musical instruments </span> —
                            I'm currently learning how to play the&nbsp;
                            <a href="https://en.wikipedia.org/wiki/Cavaquinho"
                                className='underline decoration-2 underline-offset-4 hover:decoration-zinc-50'
                                target="_blank"
                                rel='noreferrer'
                                style={textShadow}>
                                cavaquinho
                            </a> — watching and playing&nbsp;
                            <span style={textShadow}>soccer</span>&nbsp;
                            and <span style={textShadow}>gaming with friends</span>.
                        </div>
                    </div>
                    <div className='clip'>
                        <div className='sentence'>
                            Also, I really like&nbsp;
                            <span style={textShadow}>animating </span> —
                            things! Try dragging your mouse below: &nbsp;

                        </div>
                    </div>
                    <div className='self-center canvas-parent w-11/12 h-96'>
                        {/* <canvas id='mycanvas' className='w-full h-96 border-2 border-zinc-600'></canvas> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About