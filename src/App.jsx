import { useState } from 'react'
import Header from './components/Header'
import UrlForm from './components/UrlForm'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (url) => {
    setLoading(true)
    setError('')
    setItems([])
    try {
      const base = import.meta.env.VITE_BACKEND_URL || ''
      const res = await fetch(`${base}/api/instagram/inspect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.detail || 'Failed to process this link')
      }
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <Header />

      <main className="mx-auto max-w-5xl px-4">
        <section className="py-12 sm:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Download Instagram videos and photos
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Paste a post or reel link and get direct media files instantly.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur border border-gray-200 shadow-sm rounded-2xl p-5">
            <UrlForm onSubmit={handleSubmit} loading={loading} />
            {error && (
              <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg p-3">
                {error}
              </div>
            )}
            <Results items={items} />
          </div>
        </section>

        <section className="py-4">
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-indigo-50 text-indigo-900">
              1. Copy the Instagram post or reel URL
            </div>
            <div className="p-4 rounded-xl bg-indigo-50 text-indigo-900">
              2. Paste the link and tap Get Media
            </div>
            <div className="p-4 rounded-xl bg-indigo-50 text-indigo-900">
              3. Preview and download the files
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
