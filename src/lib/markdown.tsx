import { Link } from '@/components/Typography'

// Function to parse markdown-style links and line breaks in text
export function parseMarkdownLinks(text: string) {
    // First split by double line breaks for paragraphs
    const paragraphs = text.split('\n\n')

    return paragraphs.map((paragraph, paragraphIndex) => {
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
        const parts: (string | JSX.Element)[] = []
        let lastIndex = 0
        let match

        // Split by single line breaks within paragraph
        const lines = paragraph.split('\n')

        lines.forEach((line, lineIndex) => {
            linkRegex.lastIndex = 0 // Reset regex
            lastIndex = 0

            while ((match = linkRegex.exec(line)) !== null) {
                // Add text before the link
                if (match.index > lastIndex) {
                    parts.push(line.slice(lastIndex, match.index))
                }

                // Add the link
                parts.push(
                    <Link key={`${paragraphIndex}-${lineIndex}-${match.index}`} href={match[2]} external className="font-medium">
                        {match[1]}
                    </Link>
                )

                lastIndex = match.index + match[0].length
            }

            // Add remaining text
            if (lastIndex < line.length) {
                parts.push(line.slice(lastIndex))
            }

            // Add line break if not last line
            if (lineIndex < lines.length - 1) {
                parts.push(<br key={`${paragraphIndex}-${lineIndex}-br`} />)
            }
        })

        return (
            <span key={paragraphIndex}>
                {parts.length > 0 ? parts : [paragraph]}
                {paragraphIndex < paragraphs.length - 1 && <><br /><br /></>}
            </span>
        )
    })
}

// Additional markdown utilities you might need for blog posts
export function parseMarkdownBold(text: string) {
    const boldRegex = /\*\*(.*?)\*\*/g
    return text.replace(boldRegex, '<strong>$1</strong>')
}

export function parseMarkdownItalic(text: string) {
    const italicRegex = /\*(.*?)\*/g
    return text.replace(italicRegex, '<em>$1</em>')
}

// Simple markdown parser for blog content (you can extend this)
export function parseMarkdown(text: string) {
    // This is a basic implementation - you can extend it with more features
    let parsed = text
    parsed = parseMarkdownBold(parsed)
    parsed = parseMarkdownItalic(parsed)
    return parsed
}
