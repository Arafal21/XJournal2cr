'use client';

import styles from './LoginForm.module.scss';

import Image from 'next/image';

import { useRef, useState } from 'react';
import { useActionState } from 'react';

import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';

import { LoginSubmitButton } from '../LoginSubmitButton/LoginSubmitButton';
import { LoginOtherButton } from '../LoginOtherButton/LoginOtherButton';
import { SimpleInfoModal } from '../SimpleInfoModal/SimpleInfoModal';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { LoginInput } from '../LoginInput/LoginInput';

import { type FormState } from '../../types/loginProps';
import logoDefault from '/public/icons/logo-default-size.svg';
import { loginUser } from '../../api/loginApi';
import { modalForgotPassword, modalSignUp } from '../../constants/other';

export function LoginForm({ children }: { children: React.ReactNode }) {
	const [state, formAction] = useActionState(handleSubmit, {});

	const isForgotOrSignUp = useRef('');

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [formData, setFormData] = useState({
		username: state.username || '',
		password: state.password || '',
	});

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};

	const isFormValid = !!formData.username && !!formData.password;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	function handleSubmit(_previousState: FormState, formData: FormData): FormState | Promise<FormState> {
		const state: FormState = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
		};

		if (state.username.length === 0) {
			state.nameError = true;
		}

		if (state.password.length === 0) {
			state.passwordError = true;
		}

		if (state.nameError || state.passwordError) {
			return state;
		} else {
			return loginUser(formData)
				.then(() => state)
				.catch(() => {
					state.formError = true;
					return state;
				});
		}
	}

	const toggleModal = (modalType: string) => {
		setIsModalOpen((prevState) => !prevState);
		isForgotOrSignUp.current = modalType;
	};

	const handleForgotPasswordBtn = () => toggleModal(modalForgotPassword);
	const handleSignUpMobileBtn = () => toggleModal(modalSignUp);
	const handleSignUpDesktopBtn = () => toggleModal(modalSignUp);

	return (
		<section className={styles.loginForm}>
			<SimpleInfoModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				modalText={isForgotOrSignUp.current}
			/>
			{children}
			<form action={formAction} className={styles.form}>
				<Image src={logoDefault} alt='XJournal Logo' />

				<h2 className={styles.headingDesktop}>Welcome back!</h2>
				<h3 className={styles.infoNoAccount}>
					Don’t have an account yet?
					<LoginOtherButton role='signUpDesktopBtn' onClick={handleSignUpDesktopBtn}>
						Sign up
					</LoginOtherButton>
				</h3>

				<h2 className={styles.headingMobile}>Your Gateway to Smarter Education Management</h2>

				{state.formError && <p className={styles.error}>Błąd zapisu</p>}
				<div className={styles.required}>
					<label htmlFor='user-input'>Username</label>
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='user-input' className={styles.iconContainer}>
						<EmailIcon className={styles.inputIcon} />
					</label>

					<LoginInput defaultValue={state.username} onChange={handleInputChange} />
				</div>

				<div className={styles.required}>
					{state.nameError && <p className={styles.error}>Please, provide valid username to continue.</p>}
				</div>

				<div className={styles.required}>
					<label htmlFor='password-input'>Password</label>
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='password-input' className={styles.iconContainer}>
						<LockIcon className={styles.inputIcon} />
					</label>

					<PasswordInput
						defaultValue={state.password}
						type={isPasswordVisible ? 'text' : 'password'}
						onChange={handleInputChange}
					/>

					<span
						className={styles.toggleVisibility}
						aria-label='show or hide password button'
						tabIndex={0}
						onClick={togglePasswordVisibility}>
						{isPasswordVisible ? '🔓' : '🔒'}
					</span>
				</div>

				<div className={styles.required}>
					{state.passwordError && <p className={styles.error}>Please, provide valid password to continue.</p>}
				</div>
				<div className={styles.buttonContainer}>
					<LoginOtherButton role='forgotPasswordBtn' onClick={handleForgotPasswordBtn}>
						Forgot your password
					</LoginOtherButton>

					<LoginSubmitButton isFormValid={isFormValid} />

					<LoginOtherButton role='signUpMobileBtn' onClick={handleSignUpMobileBtn}>
						sign up
					</LoginOtherButton>
				</div>
			</form>
		</section>
	);
}
