import React from 'react'
import { titleLetter } from '../utils/constants'
import LetterAnimate from './LetterAnimate'

const HeroTitle = ({ primaryColor }) => {
  return (
    <h1 className="reveal text-6xl font-bold text-center lg:text-left">
        <span>Hi, I'm  </span>
        {titleLetter.map((letter, index) => {
            return <LetterAnimate color={primaryColor} key={index} letter={letter} />
        })}!
    </h1>
  )
}

export default HeroTitle