import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

interface SafeMarkdownProps {
  markdown: string
}

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <>
      <div>
        <ReactMarkdown
          rehypePlugins={[rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </>
  )
}
