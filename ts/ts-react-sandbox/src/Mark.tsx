import ReactMarkdown from "react-markdown";

const Mark = () => {
	const markdown = "## A paragraph with *emphasis* and **strong importance**. ";

	return (
		<div>
			<ReactMarkdown children={markdown} />
		</div>
	);
};

export default Mark;
