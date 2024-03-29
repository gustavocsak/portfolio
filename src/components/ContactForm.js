import React, { useRef, useState, useEffect } from 'react'
import { onEnter, onLeave } from '../utils/constants'
import Alert from './Alert'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = ({ color }) => {
    const recaptchaRef = useRef();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null)
    const [formError, setFormError] = useState(false)
    const formRef = useRef();
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const borderStyle = {
        borderColor: color
    }

    const handleSubmit = async (e) => {
        setFormSubmitted(false);
        e.preventDefault();
        
        try {
            const token = await recaptchaRef.current.executeAsync()
            if (token) {
                const result = await emailjs.send(
                    process.env.REACT_APP_EMAILJS_SERVICE,
                    process.env.REACT_APP_EMAILJS_TEMPLATE,
                    { ...form, 'g-recaptcha-response': token },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                setForm({ name: '', email: '', message: '' });
                setFormSubmitted(true);
                setRecaptcha(false)
            } else {
                setFormError(true)
                
            }

        } catch (error) {
            console.error(error.text)
        }

    }

    const handleRecaptchaChange = (value) => {
        setRecaptcha(value)
    }
    const handleChange = (e) => {
        setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
    } 

    const handleClose = () => {
        setFormSubmitted(false);
        setFormError(false);
    };

    // Reset border color for focus and blur when primary website color changes
    useEffect(() => {
        const inputs = [...document.getElementsByClassName('input')]
        inputs.forEach((element) => {
            element.addEventListener('focus', () => {
                element.style.borderColor = color
            })
            element.addEventListener('blur', () => {
                element.style.borderColor = ''
                element.classList.add('border-gray-700')
            })
        })
    }, [color])

    return (
        <form className='flex flex-col' onSubmit={handleSubmit} name='contact' ref={formRef}>
            <section>
                <p className='flex flex-col gap-2 mb-12'>
                    <label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='input rounded-lg p-2.5 text-zinc-100 border-0
                        bg-gray-900 border-2 border-gray-700 outline-none'
                        type='text'
                        id='name'
                        name='name'
                        value={form.name || ''}
                        onChange={handleChange}
                        required
                    ></input>
                </p>
                <p className='flex flex-col gap-2 mb-12'>
                    <label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='input rounded-lg p-2.5 text-zinc-100
						bg-gray-900 border-2 border-gray-700 outline-none'
                        type='email'
                        id='email'
                        name='email'
                        value={form.email || ''}
                        onChange={handleChange}
                        required
                    ></input>
                </p>
                <p className='flex flex-col gap-2 mb-12'>
                    <label className='font-semibold text-lg leading-6 text-zinc-100' htmlFor='message'>
                        Message
                    </label>
                    <textarea
                        className='input rounded-lg p-2.5 text-zinc-100 border-0 h-32
                        bg-gray-900 border-2 border-gray-700 outline-none'
                        type='textarea'
                        id='message'
                        name='message'
                        value={form.message || ''}
                        onChange={handleChange}
                        required
                    ></textarea>
                </p>
            </section>
            <section className='flex flex-col gap-2 mb-12'>
                <button className='w-full h-16 bg-gray-950 rounded-lg text-xl font-semibold border-2'
                    onMouseEnter={(e) =>
                        onEnter(color, e, true)}
                    onMouseLeave={(e) => onLeave(e, color, true)}
                    style={borderStyle}
                    type='submit'
                >
                    Send Message
                </button>
                <p className='text-center text-xs'>
                    This site is protected by reCAPTCHA and the Google&nbsp;
                    <a
                        href="https://policies.google.com/privacy"
                        className='text-blue-700 underline'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Privacy Policy
                    </a>&nbsp; and&nbsp;
                    <a
                        href="https://policies.google.com/terms"
                        className='text-blue-700 underline'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Terms of Service
                    </a>&nbsp; apply.
                </p>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size='invisible'
                    sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                    onChange={handleRecaptchaChange}
                />
            </section>
            {formSubmitted && 
                <Alert message='Thank you for sending a message!' onClose={handleClose}  color='green'/>
            }
            {formError && 
                <Alert message='Something went wrong, please try again later' onClose={handleClose}  color='red'/>
            }
            
        </form>
    )
}

export default ContactForm