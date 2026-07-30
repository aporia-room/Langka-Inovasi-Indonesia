import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'LII — Langkah Inovasi Indonesia',
  description: 'Think tank independen berbasis di Kalimantan Tengah yang berkomitmen menghasilkan riset, kajian, dan rekomendasi kebijakan untuk Indonesia yang lebih baik.',
  keywords: 'Langkah Inovasi Indonesia, LII, riset kebijakan, Kalimantan Tengah, think tank',
  openGraph: {
    title: 'LII — Langkah Inovasi Indonesia',
    description: 'Think tank independen berbasis di Kalimantan Tengah.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
