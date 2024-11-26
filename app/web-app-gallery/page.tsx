import Header from '../components/Header'
import Footer from '../components/Footer'

export default function WebAppGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a2329] to-[#4d5a68]">
      <Header />
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white">Web App Gallery</h1>
      </main>
      <Footer />
    </div>
  )
}

