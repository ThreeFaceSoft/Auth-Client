import {FC, useState} from "react";
import {Form} from "../../shared/ui/Form";
import {Input, InputType} from "../../shared/ui/Form/Controls/Input.tsx";

export const RegistrationForm: FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [surname, setSurname] = useState<string>('');

	const handleEmailChange = (email: string): void => {
		setEmail(email);
	};

	const handlePasswordChange = (password: string): void => {
		setPassword(password);
	};

	const handleLastNameChange = (lastName: string): void => {
		setLastName(lastName);
	}
	const handleFirstNameChange = (firstName: string): void => {
		setFirstName(firstName);
	}
	const handleSurnameChange = (surname: string): void => {
		setSurname(surname);
	}

	return (
		<>
			<h1>Регистрация:</h1>
			<div className={`email`}>
				<Form.Text.Label text={'Почта:'}/>
				<Input
					value={email}
					onChange={handleEmailChange}
				/>
			</div>
			<div className={`password`}>
				<Form.Text.Label text={'Пароль:'}/>
				<Input
					value={password}
					onChange={handlePasswordChange}
					type={InputType.Secret}
				/>
			</div>
			<div className={`lastName`}>
				<Form.Text.Label text={'Фамилия:'}/>
				<Input
					value={lastName}
					onChange={handleLastNameChange}
				/>
			</div>
			<div className={`firstname`}>
				<Form.Text.Label text={'Имя:'}/>
				<Input
					value={firstName}
					onChange={handleFirstNameChange}
				/>
			</div>
			<div className={`surname`}>
				<Form.Text.Label text={'Отчество:'}/>
				<Input
					value={surname}
					onChange={handleSurnameChange}
				/>
			</div>
		</>
	)
}