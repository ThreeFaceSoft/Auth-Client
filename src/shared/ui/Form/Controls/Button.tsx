import {FC, useEffect, useState} from "react";
import {Button as AntButton} from "antd";
import {SizeType} from "antd/es/config-provider/SizeContext";
import {ButtonType as AntButtonType} from "antd/es/button";
import {ElementSize} from "../../helpers/UIEnum.ts";

export enum ButtonType {
	Default,
	Primary
}

type ButtonProps = {
	value: string;
	onClick: () => void;
	isActive: boolean;
	type?: ButtonType;
	size?: ElementSize;
}
export const Button: FC<ButtonProps> = ({value, onClick, isActive, type = ButtonType.Default, size = ElementSize.Medium}: ButtonProps) => {
	const [antSize, setAntSize] = useState<SizeType>();
	const [antType, setAntType] = useState<AntButtonType>();

	useEffect(() => {
		let sizeType: SizeType;
		switch (size) {
			case ElementSize.Small: {
				sizeType = 'small';
				break
			}
			case ElementSize.Medium: {
				sizeType = 'middle';
				break
			}
			case ElementSize.Large: {
				sizeType = 'large';
				break
			}
		}
		setAntSize(sizeType);
	}, [size]);

	useEffect(() => {
		let buttonType: AntButtonType;
		switch (type) {
			case ButtonType.Default: {
				buttonType = 'default';
				break
			}
			case ButtonType.Primary: {
				buttonType = 'primary';
				break
			}
		}
		setAntType(buttonType);
	}, [type]);

	return (
		<AntButton
			size={antSize}
			type={antType}
			onClick={onClick}
			disabled={!isActive}
		>
			{value}
		</AntButton>
	)
}