export type TimelineEntry = {
  period: string
  title: string
  description?: string
  links?: {
    url: string
    text: string
  }[]
  images?: { src: string; alt?: string }[]
}

export const timelineEntries: TimelineEntry[] = [
  {
    period: '2025',
    title: 'Started Amooze.ai',
    description:
      "Living in NYC, frustrated by how absurdly hard it is to book reservations that balance preferences, exploration and availability, I built [Amooze.ai](https://amooze.ai), an AI concierge that handles restaurant discovery, recommendation and cross-platform reservation with one prompt. It turns 'cozy French bistro in SoHo for 4 tonight' into instantly bookable options across Resy and OpenTable.\n\nOver five months, fully leveraging AI and vibe coding, I designed and shipped a full AI-native consumer product end-to-end, integrating 4000+ NYC restaurants across multiple platforms. I learned product design, database architecture, backend development, API integration, and engineered a full text-to-recommendation LLM search pipeline. The product is currently in beta with early users reporting 'habit-forming' experiences.",
    links: [
      {
        url: 'https://vimeo.com/1115923085/6b5d4f3179?share=copy',
        text: 'See Amooze in action'
      }
    ],
    images: [
      { src: '/amooze-1.png', alt: 'Demo 1' },
      { src: '/amooze-2.png', alt: 'Demo 2' },
      { src: '/amooze-3.png', alt: 'Demo 3' },
    ]
  },
  {
    period: '2022–2025',
    title: 'Data Scientist, GoGuardian (EdTech)',
    description:
      "I joined [GoGuardian](https://www.goguardian.com/) to lead ML/AI solutions protecting 13 million K-12 students online. My work contributed to an 18-point increase in the Net Promoter Score (NPS) in 2023. \n\n I led a team to win the company's first AI Hackathon and developed [Smart Alerts for Proxies](https://www.goguardian.com/blog/how-schools-can-stay-ahead-of-evolving-online-threats-and-proxies-with-goguardian-admin-smart-alerts) — our fastest-adopted feature ever, which earned unprompted coverage in [EdTech Magazine](https://edtechmagazine.com/k12/article/2025/04/new-tech-helps-schools-defend-against-student-built-proxies).\n\n Beyond product development, I led research initiatives exploring the societal impact of our platform, including studies on youth suicide prevention through digital monitoring and the relationship between student browsing patterns and academic performance.",
    links: [
      {
        url: 'https://www.medrxiv.org/content/10.1101/2025.04.22.25326214v1',
        text: 'Suicide Prevention Study'
      }
    ]
  },
  {
    period: '2016–2022',
    title: 'PhD in Systems and Behavioral Neuroscience, NYU & NYU Shanghai',
    description:
      "My PhD focused on the neurobiology and computational modeling of economic decision-making in rats and humans. My advisor was [Jeffrey Erlich](https://www.sainsburywellcome.org/web/people/jeffrey-erlich), and [Paul Glimcher](https://www.neuroeconomicslab.org/), the father of neuroeconomics, was on my thesis committee.\n\nI self-taught programming (MATLAB, R, Python, SQL) and was trained in Bayesian statistics. Developed high-throughput behavioral systems, and used hierarchical Bayesian models to analyze risk parameters, resulting in a [Nature Neuroscience paper](https://www.nature.com/articles/s41593-023-01461-x) showing how value is computed in the brain during economic decisions.\n\n Along the way, I TAed for Intro for Neural Science, self-transitioned into [Data Science via MOOCs](https://www.coursera.org/account/accomplishments/specialization/certificate/P9RSB6J7MZFB), deepened my yoga practice, and somehow became the [first PhD in Neural Science](https://shanghai.nyu.edu/news/nyu-shanghai-awards-first-phd-neural-science) from NYU Shanghai.",
    links: [
      {
        url: 'https://www.proquest.com/openview/b425a01207d329982c74bfed01c7306c/1?pq-origsite=gscholar&cbl=18750&diss=y',
        text: 'PhD Thesis'
      },
      {
        url: 'https://www.sainsburywellcome.org/web/blog/decoding-confidence-lessons-lab',
        text: 'Blog on my other works: Decoding confidence during choice'
      },
    ]
  },
  // {
  //   period: '2014–2015',
  //   title: 'Bachelor (Exchange), University of California, Irvine',
  //   description:
  //     "Exchange one-year abroad program, where I deepened my systems and computational neuroscience knowledge, and conducted research in [Bruce McNaughton's](https://sites.uci.edu/mcnaughtonlab/people/bruce/) lab on enrichment and cognition in mice.",
  // },
  {
    period: '2012–2016',
    title: 'BSc in Neuroscience, University of St. Andrews',
    description:
      "Majored in neuroscience, dabbled in philosophy and German. My Honours thesis project on the mechanisms of concussion resulted in a [publication](https://www.eneuro.org/content/4/2/ENEURO.0073-17.2017.short) in eNeuro. Took a swing at the Old Course, sadly did not retain any Scottish accent.",
  },
]
