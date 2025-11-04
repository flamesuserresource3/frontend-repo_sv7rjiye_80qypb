import { useState } from 'react'
import { Link as LinkIcon, Download } from 'lucide-react'

export default function UrlForm({ onSubmit, loading }) {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!url.trim()) return
    onSubmit(url.trim())
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <LinkIcon className="h-5 w-5" />
          </div>
          <input
            type="url"
            required
            placeholder="Paste Instagram post or reel link..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Download className="h-5 w-5" />
          {loading ? 'Processing...' : 'Get Media'}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Example: https://www.instagram.com/reel/XXXXXXXXX/
      </p>
    </form>
  )
}
