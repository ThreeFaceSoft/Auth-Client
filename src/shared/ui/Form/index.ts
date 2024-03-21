import {Item} from "./Item.tsx";
import {Label} from "./Text/Label.tsx";
import {Input} from "./Controls/Input.tsx";
import {Button} from "./Controls/Button.tsx";
import {Link} from "./Text/Link.tsx";

export const Form = {
	Item: Item,
	Text: {
		Label: Label,
		Link: Link
	},
	Controls: {
		Input: Input,
		Button: Button
	}
}