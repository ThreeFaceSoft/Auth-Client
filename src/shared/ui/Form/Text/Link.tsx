import {Typography} from "antd";

type LinkProps = {
	text: string
}

export const Link = ({text}: LinkProps) => {
	return (
		<Typography.Link>{text}</Typography.Link>
	)
}