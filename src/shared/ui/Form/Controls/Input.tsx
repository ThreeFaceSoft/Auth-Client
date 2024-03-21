import {FC, useEffect, useState} from "react";
import {Input as AntInput} from "antd";
import {SizeType} from "antd/es/config-provider/SizeContext";
import {ElementSize} from "../../helpers/UIEnum.ts";

export enum InputType {
	Default,
	Secret
}

export enum InputStatus {
	Default,
	Error,
	Warning
}

type InputProps = {
	value: string;
	onChange: (value: string) => void;
	type?: InputType;
	size?: ElementSize;
	status?: InputStatus;
}

type AntInputStatus = '' | 'warning' | 'error'

export const Input: FC<InputProps> = ({value, onChange, type = InputType.Default, size = ElementSize.Medium, status = InputStatus.Default}) => {
	const [antSize, setAntSize] = useState<SizeType>();
	const [antStatus, setAntStatus] = useState<AntInputStatus>('');

	useEffect(() => {
		let antSize: SizeType;
		switch (size) {
			case ElementSize.Small: {
				antSize = 'small';
				break
			}
			case ElementSize.Medium: {
				antSize = 'middle';
				break
			}
			case ElementSize.Large: {
				antSize = 'large';
				break
			}
		}
		setAntSize(antSize);
	}, [size]);

	useEffect(() => {
		let antStatus: AntInputStatus;
		switch (status) {
			case InputStatus.Default: {
				antStatus = '';
				break
			}
			case InputStatus.Warning: {
				antStatus = 'warning';
				break
			}
			case InputStatus.Error: {
				antStatus = 'error';
			}
		}
		setAntStatus(antStatus);
	}, [status]);

	const renderInput = () => {
		switch (type) {
			case InputType.Default: return (
				<AntInput
					value={value}
					onChange={(event) => onChange(event.target.value)}
					status={antStatus}
					size={antSize}
				/>
			)
			case InputType.Secret: return (
				<AntInput.Password
					value={value}
					onChange={(event) => onChange(event.target.value)}
					status={antStatus}
					size={antSize}
				/>
			)
		}
	}

	return renderInput()
}