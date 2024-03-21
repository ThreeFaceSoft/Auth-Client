import React from "react";
import {Form} from "antd";

type ItemProps = {
	label: string
	children: React.ReactElement | React.ReactElement[]
}

export const Item = ({label, children}: ItemProps): React.ReactElement => {
	return (
		<Form.Item
			label={label}
		>
			{children}
		</Form.Item>
	)
}