import { useBlockProps, RichText } from "@wordpress/block-editor";
import { TextareaControl } from "@wordpress/components";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: `block-toolbar-ab967f-align-${attributes.alignment}`,
	});
	return (
		<div {...blockProps}>
			<RichText.Content tagName="h2" value={attributes.headingText} />

			<RichText.Content tagName="p" value={attributes.text} />
			<p>{attributes.displayType}</p>
		</div>
	);
}
