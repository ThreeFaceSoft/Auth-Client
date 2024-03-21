import {Typography} from "antd";

type LabelProps = {
	text: string
}

export const Label = ({text}: LabelProps) => {
	return (
		<Typography.Text>{text}</Typography.Text>
	)
}