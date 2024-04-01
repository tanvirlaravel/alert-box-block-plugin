import {
	useBlockProps,
	RichText,
	AlignmentToolbar,
	BlockControls,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarButton,
	TextareaControl,
	SelectControl,
} from "@wordpress/components";
import {
	external,
	paragraph,
	formatBold,
	formatItalic,
	link,
} from "@wordpress/icons";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

const urlBlockDevelopmentExamples = `https://github.com/wptrainingteam/block-development-examples`;
const redirectToMoreExamples = () =>
	window.confirm('Want to redirect to "Block Development Examples" repo?') // eslint-disable-line no-alert
		? (window.location = urlBlockDevelopmentExamples)
		: null;

export default function Edit({ className, attributes: attr, setAttributes }) {
	const onChangeHeading = (newContent) => {
		setAttributes({ headingText: newContent });
	};

	const onChangeContent = (newContent) => {
		console.log(newContent);
		setAttributes({ text: newContent });
	};

	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? "none" : newAlignment,
		});
	};

	return (
		<div {...useBlockProps()}>
			<BlockControls>
				<ToolbarGroup>
					<AlignmentToolbar
						value={attr.alignment}
						onChange={onChangeAlignment}
					/>
					<ToolbarButton
						icon={external}
						label="Redirect to more examples"
						onClick={redirectToMoreExamples}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon={formatBold} label="Bold" />
					<ToolbarButton icon={formatItalic} label="Italic" />
					<ToolbarButton icon={link} label="Link" />
				</ToolbarGroup>
			</BlockControls>

			{/* this section should goes setting control */}

			<SelectControl
				label="Display Type"
				value={attr.displayType}
				options={[
					{ label: "Alert Box", value: "alertBox" },
					{ label: "Note", value: "note" },
					{ label: "Note With Icon", value: "noteWithIcon" },
					{ label: "Explanation", value: "explanation" },
					{ label: "Dual Box Notice", value: "dualBoxNotice" },
					{ label: "Block Notice", value: "blockNotice" },
				]}
				onChange={(val) => setAttributes({ displayType: val })}
				__nextHasNoMarginBottom
			/>

			<RichText
				tagName="h2"
				onChange={onChangeHeading}
				value={attr.headingText || ""}
			/>

			<RichText
				tagName="p"
				value={attr.text || ""}
				onChange={onChangeContent}
			/>
		</div>
	);
}
