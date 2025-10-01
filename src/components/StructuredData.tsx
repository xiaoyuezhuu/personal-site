export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Xiaoyue Zhu',
    jobTitle: 'Data Scientist & Founder',
    description: 'Data scientist, AI researcher, and founder specializing in machine learning and technology innovation',
    url: 'https://xiaoyuezhu.xyz',
    sameAs: [
      'https://github.com/xiaoyuezhuu',
      'https://www.linkedin.com/in/xiaoyue-zhu',
      'https://twitter.com/xiaoyuezhuu',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'University (PhD)',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

