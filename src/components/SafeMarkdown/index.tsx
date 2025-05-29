import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

interface SafeMarkdownProps {
  markdown: string
}

export function SafeMarkdown({ markdown }: SafeMarkdownProps) {
  return (
    <>
      <div
        className={clsx(
          'prose prose-slate w-full max-w-none overflow-hidden prose-a:transition prose-a:no-underline prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-img:mx-auto md:prose-lg',
          'prose-headings:text-slate-100',
          'prose-p:text-slate-100',
          'prose-strong:text-slate-100',
          'prose-ul:text-slate-100',
          'prose-td:text-slate-100',
          'prose-code:text-slate-100',
        )}
      >
        <ReactMarkdown
          rehypePlugins={[rehypeSanitize]}
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ node, ...props }) => {
              if (!node?.children) return ''

              return (
                <div className='overflow-x-auto'>
                  <table className='w-full min-w-[600px]' {...props} />
                </div>
              )
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </>
  )
}
