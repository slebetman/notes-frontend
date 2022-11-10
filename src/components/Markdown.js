import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkImages from "remark-images";
import remarkGfm from "remark-gfm";

function Markdown (props) {
    return <ReactMarkdown
        children={props.content}
        linkTarget="_blank"
        remarkPlugins={[
            remarkImages,
            remarkGfm
        ]}
    />
}

export default Markdown;