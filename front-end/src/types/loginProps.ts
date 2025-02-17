import { MouseEventHandler, ReactNode } from "react";

export interface FormState {
	username: string;
	password: string;
	nameError?: boolean;
	passwordError?: boolean;
	formError?: boolean;
}

export interface LoginOtherButtonProps {
	children: ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	role: string;
}

export interface PasswordInputProps {
	type: 'text' | 'password';
	defaultValue?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginInputProps {
	defaultValue?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
