import { MousePointer, Download } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <MousePointer className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xl font-semibold tracking-tight">Singgihasu</p>
            <p className="text-xs text-gray-500 -mt-0.5">Instagram downloader</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-indigo-700">
          <Download className="h-4 w-4" />
          <span className="text-sm font-medium">Save videos & photos</span>
        </div>
      </div>
    </header>
  )
}
