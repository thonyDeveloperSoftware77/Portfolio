// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from '../../styles/Contact.module.css';
function ContactForm() {
    const [state, handleSubmit] = useForm("xoqzdovb");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>


            <div class={style.inputBox}>
                <input
                    id="email"
                    type="email"
                    name="email"

                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <span>Correo Electronico</span>
            </div>

            <div class={style.inputBox} style={{marginTop: "50px"}}>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <span>
                    Mensaje
                </span>
            </div>

            <center><button style={{marginTop:"20px"}} className='btn' type="submit" disabled={state.submitting}>
                Enviar Mensaje
            </button></center>

        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;
