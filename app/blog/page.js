import Footer from '@/components/Footer'
import BlogContent from '@/components/BlogContent'
import { getArtikel } from '@/lib/sanity'

export const metadata = {
  title: 'Publikasi & Berita',
}

export const revalidate = 60

export default async function Blog() {
  let posts = []
  try {
    posts = await getArtikel()
  } catch (e) {
    console.error('Gagal fetch artikel:', e)
  }

  return (
    <div className="page">
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="label-outline">Publikasi & Berita</div>
          <h1 className="display">
            Ide & <em>Gagasan</em>
            <br />dari LII
          </h1>
          <p className="lead">
            Kumpulan opini, policy brief, laporan riset, dan berita terkini
            dari Langkah Inovasi Indonesia.
          </p>
        </div>
      </section>
      <BlogContent posts={posts} />
      <Footer />
    </div>
  )
}
