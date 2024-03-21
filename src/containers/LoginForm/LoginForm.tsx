import React, {useState} from "react";
import {InputType} from "../../shared/ui/Form/Controls/Input.tsx";
import {Form} from "../../shared/ui/Form";
import {Link} from "react-router-dom";
import {RoutesPath} from "../../config/routes.config.ts";
import {ButtonType} from "../../shared/ui/Form/Controls/Button.tsx";

export const LoginForm: React.FC = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleEmailChange = (email: string): void => {
		setEmail(email);
	};

	const handlePasswordChange = (password: string): void => {
		setPassword(password);
	};

	const handleLogIn = () => {
		//TODO: Обработать
	}

	return (
		<>
			<h1>Войти:</h1>
			<div className={`email`}>
				<Form.Text.Label text={'Почта:'}/>
				<Form.Controls.Input
					value={email}
					onChange={handleEmailChange}
				/>
			</div>
			<div className={`password`}>
				<Form.Text.Label text={'Пароль:'}/>
				<Form.Controls.Input
					value={password}
					onChange={handlePasswordChange}
					type={InputType.Secret}
				/>
			</div>
			<div className={'controls'}>
				<div className={'submit'}>
					<Form.Controls.Button
						value={'Войти'}
						type={ButtonType.Primary}
						onClick={handleLogIn}
						isActive={true}
					/>
				</div>
				<div>
					<Link to={`/${RoutesPath.signUp}`}>Регистрация</Link>
				</div>
			</div>
		</>
	)
}