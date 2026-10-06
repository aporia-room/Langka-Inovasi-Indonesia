import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: {
    default: 'Langkah Inovasi Indonesia',
    template: '%s | Langkah Inovasi Indonesia',
  },
  description: 'Perkumpulan pemuda berbasis di Palangka Raya, Kalimantan Tengah, yang menghimpun dan memberdayakan pemuda Indonesia untuk berperan aktif dalam pembangunan.',
  keywords: 'Langkah Inovasi Indonesia, LII, perkumpulan pemuda, Kalimantan Tengah, Palangka Raya',
  openGraph: {
    title: 'Langkah Inovasi Indonesia',
    description: 'Perkumpulan pemuda berbasis di Palangka Raya, Kalimantan Tengah.',
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
