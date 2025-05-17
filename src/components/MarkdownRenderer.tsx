import MarkdownIt from "markdown-it";
// @ts-ignore
import mdKatex from "markdown-it-katex";
import "katex/dist/katex.min.css";

const md = new MarkdownIt().use(mdKatex);

export const MarkdownRenderer = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />;
};
