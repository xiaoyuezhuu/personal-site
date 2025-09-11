# Personal Website Design Document

## Overview
A simple, elegant personal website for a data scientist + founder, inspired by Andrej Karpathy's clean design at https://karpathy.ai/

## Design Philosophy
- **Minimalist**: Clean, uncluttered layout focusing on content
- **Typography-first**: Strong emphasis on readable typography
- **Professional**: Elegant but not flashy
- **Fast**: Lightweight and performant
- **Responsive**: Works beautifully on all devices

## Tech Stack

### Frontend Framework: Next.js 14
- **Why**: Server-side rendering, excellent performance, great developer experience
- **Benefits**: SEO-friendly, fast loading, easy deployment to Vercel
- **TypeScript**: For better code quality and developer experience

### Styling: Tailwind CSS
- **Why**: Utility-first CSS framework for rapid development
- **Benefits**: Consistent design system, responsive design utilities, small bundle size
- **Custom theme**: Minimal color palette inspired by Karpathy's site

### Deployment: Vercel
- **Why**: Seamless Next.js integration, automatic deployments, global CDN
- **Benefits**: Zero-config deployment, custom domain support, excellent performance

### Additional Tools
- **Fonts**: Inter or similar clean sans-serif font
- **Icons**: Lucide React (minimal, consistent icons)
- **Analytics**: Vercel Analytics (optional, privacy-friendly)

## Site Structure

```
/
├── Header Section
│   ├── Professional photo
│   ├── Name & Title
│   └── Social links (GitHub, LinkedIn, Email, etc.)
├── About Section
│   ├── Brief background paragraph
│   ├── Current focus/interests
│   └── Professional philosophy
├── Timeline Section (Karpathy-style)
│   ├── Year markers on the left
│   ├── Experience/achievements on the right
│   ├── Chronological order (newest first)
│   └── Education, work, projects mixed
└── Achievements Section
    ├── Project cards layout
    ├── Featured projects
    ├── Publications/papers
    ├── Awards/recognition
    └── Open source contributions
```

## Design Elements

### Color Palette
- **Primary**: Near-black (#1a1a1a) for text
- **Secondary**: Medium gray (#666666) for secondary text
- **Accent**: Subtle blue (#2563eb) for links and highlights
- **Background**: Pure white (#ffffff) or very light gray (#fafafa)

### Typography
- **Headings**: Bold, clean sans-serif (Inter 600-700)
- **Body**: Regular sans-serif (Inter 400)
- **Code**: Monospace font for any technical content
- **Hierarchy**: Clear size and weight differences

### Layout
- **Max width**: ~800px for optimal readability
- **Spacing**: Generous whitespace, consistent vertical rhythm
- **Grid**: Simple single-column layout with sections
- **Navigation**: Minimal, possibly just anchor links to sections

### Interactive Elements
- **Links**: Subtle underlines, color change on hover
- **Buttons**: Minimal styling, clear hover states
- **Animations**: Subtle, purposeful (fade-ins, smooth scrolling)

## Content Strategy

### Hero Section
- Name prominently displayed
- Current role: "Data Scientist & Founder"
- One-line description of what you do/focus on

### About Section
- Brief professional background
- Current projects/company
- Key expertise areas
- Personal touch (interests, philosophy)

### Experience Section
- Current role with brief description
- 2-3 previous significant roles
- Education (degree, institution)
- Key achievements or metrics

### Projects Section
- 3-5 featured projects
- Brief description, tech stack, links
- Mix of professional and personal projects
- Open source contributions

## Performance Goals
- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Bundle Size**: <100KB initial load

## SEO Considerations
- Semantic HTML structure
- Meta tags and Open Graph
- Structured data for professional info
- Clean URLs and sitemap

## Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation
- Color contrast ratios

## Development Phases

### Phase 1: Foundation
1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS
3. Create basic layout and routing
4. Implement responsive navigation

### Phase 2: Content
1. Build hero section
2. Create about section
3. Add experience timeline
4. Implement projects showcase

### Phase 3: Polish
1. Add animations and interactions
2. Optimize performance
3. Test accessibility
4. SEO optimization

### Phase 4: Deployment
1. Configure Vercel deployment
2. Set up custom domain
3. Add analytics (optional)
4. Final testing and launch

## Inspiration Elements from Karpathy's Site
- Clean typography hierarchy
- Generous whitespace
- Simple navigation
- Content-focused design
- Professional but personal tone
- Chronological experience layout
- Featured projects section
- Minimal color palette
