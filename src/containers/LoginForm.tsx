import React, {useState} from "react";
import {Button} from "../shared/ui/Button.tsx";
import {Input, InputType} from "../shared/ui/Input.tsx";

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
/*	const [lastName, setLastName] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');*/

	const handleEmailChange = (email: string): void => {
		console.log(email);
		setEmail(email);
	};

	const handlePasswordChange = (password: string): void => {
		setPassword(password);
	};

/*	const handleLastNameChange = (lastName: string): void => {
		setLastName(lastName);
	}

	const handleFirstNameChange = (firstName: string): void => {
		setFirstName(firstName);
	}

	const handleSurnameChange = (surname: string): void => {
		setSurname(surname);
	}*/

	return (
		<>
			<h1>Войти:</h1>
			<div className={`email`}>
				<Input
					value={email}
					onChange={handleEmailChange}
				/>
			</div>
			<div className={`password`}>
				<Input
					value={password}
					onChange={handlePasswordChange}
					type={InputType.Secret}
				/>
			</div>
			<div>
				<Button
					value={'Войти'}
					onClick={() => ''}
					isActive={true}
				/>
			</div>
		</>
	)
}