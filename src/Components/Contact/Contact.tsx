import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ContactInput from './ContactInput'
import { isEmpty, isValidEmail } from "../../utils/formValidate";

const errorMessages = {
    required: 'Este campo é obrigatório.',
    invalidEmail: 'O email não é válido.',
};

const shakeDuration = 200;  // in milliseconds
const successDuration = 500; // in milliseconds

function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [shake, setShake] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const validateForm = () => {
        const form = formRef.current;
        if (!form) return false;

        const name = form['from_name'].value.trim();
        const email = form['from_email'].value.trim();
        const message = form['message'].value.trim();

        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (isEmpty(name)) {
            newErrors.name = errorMessages.required;
        }

        if (isEmpty(email)) {
            newErrors.email = errorMessages.required;
        } else if (!isValidEmail(email)) {
            newErrors.email = errorMessages.invalidEmail;
        }

        if (isEmpty(message)) {
            newErrors.message = errorMessages.required;
        }

        setErrors(newErrors);

        const hasErrors = Object.keys(newErrors).length > 0;

        if (hasErrors) {
            setShake(true);
            setTimeout(() => setShake(false), shakeDuration);
        }

        return !hasErrors;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;
        if (!validateForm()) return;

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, formRef.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY!,
        })
            .then(() => {
                    setShake(false);
                    setSuccess(true);
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                    setTimeout(() => setSuccess(false), successDuration);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="p-8">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary contactTitle">Contato</h2>
            <div className="max-w-lg mx-auto contactForm">
                <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                    <div>
                        <ContactInput placeholder="Nome" name="from_name" id="from_name" className={errors.name ? 'border-red-500' : ''}/>
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <ContactInput placeholder="Email" name="from_email" id="from_email" className={errors.email ? 'border-red-500' : ''}/>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <ContactInput placeholder="Mensagem" name="message" id="message" className={errors.message ? 'border-red-500' : ''}/>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-3 px-6 bg-primary text-white font-bold rounded-md shadow-sm duration-300 ease-in-out hover:opacity-80 ${shake ? 'animate-shake' : ''} ${success ? 'animate-success' : ''}`}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
