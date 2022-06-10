import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

function Markdown (props) {
    return <ReactMarkdown
        children={props.content}
        linkTarget="_blank"
        remarkPlugins={[remarkGfm]}
    />
}

export default Markdown;