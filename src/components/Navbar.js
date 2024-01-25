import React, { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful';
import { MdOutlineColorLens } from "react-icons/md";
import { useColor } from './ColorContext';
import { colorUtils } from '../utils/colorUtils';
import { gsap } from 'gsap/gsap-core';
import { color } from '../utils/constants';

const Navbar = ({ navRef }) => {
    const { primaryColor, setPrimaryColor } = useColor();
    const [colorPickerVisible, setColorPickerVisible] = useState(false);
    const gradientStyle = {
        background: `linear-gradient(to right, ${primaryColor}, ${colorUtils.lightHex(primaryColor)})`,
    };

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: primaryColor,
            duration: 0.2
        })
    }

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            color: color.primaryWhite,
            duration: 0.2
        })
    }

    const handleColorPickerClick = () => {
        setColorPickerVisible(!colorPickerVisible);
    };

    const handleColorChange = (color) => {
        setPrimaryColor(color);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setColorPickerVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);

    return (
        <div className='w-full flex justify-center z-10'>
            <div className='lg:w-10/12 flex justify-between items-center py-4 w-full' ref={navRef}>
                <div className='flex items-center gap-6'>
                    <div className='font-bold text-2xl'>gustavocs</div>
                    <ul className='hidden lg:flex lg:gap-6 list-none'>
                        <li className='cursor-pointer'>Projects</li>
                        <li className='cursor-pointer'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='p-2.5 rounded-lg px-4' style={gradientStyle}>Resume</button>
                    <button onClick={handleColorPickerClick}>
                        <MdOutlineColorLens size={36} onMouseEnter={onEnter} onMouseLeave={onLeave} />
                    </button>
                    {colorPickerVisible && (
                        <div className='absolute top-full right-0 '>
                            <HexColorPicker
                                className='color-picker'
                                color={primaryColor}
                                onChange={handleColorChange}
                                style={{ zIndex: 1000 }}
                            />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Navbar