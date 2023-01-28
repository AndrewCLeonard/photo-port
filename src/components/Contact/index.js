import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
	const [errorMessage, setErrorMessage] = useState(""); // hook to manage form data
	const [formState, setFormState] = useState({ name: "", email: "", message: "" }); // hook to manage form data, initialize state to empty strings
	const { name, email, message } = formState; // destructure `formState` object into its named props.

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid); // isValid conditional statement
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			// state will only update when there's no error message
			setFormState({ ...formState, [e.target.name]: e.target.value }); // spread operator retains other values by preventing them from being overwritten. // `setFormState` fn updates `formState` value for `name` prop. // `e.target.name` attribute value will match `formState.name`, `formState.email`, or `formstate.message`
		}
	}
	// console.log(formState); // if this were in function body of `handleChange`, it would be one character behind because of asynchronous nature of `setFormState`.

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	console.log(`errorMessage = ${errorMessage}`);
	return (
		<section>
			<h1>Contact me</h1>
			<form id='contact-form' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' defaultValue={name} onBlur={handleChange} name='name' />
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input type='email' defaultValue={email} name='email' onBlur={handleChange} />
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' defaultValue={message} rows='5' onBlur={handleChange} />
				</div>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button type='submit'>Submit</button>
			</form>
		</section>
	);
}

export default ContactForm;
