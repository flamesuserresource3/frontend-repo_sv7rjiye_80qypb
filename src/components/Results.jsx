import { Download, Image, Video } from 'lucide-react'

export default function Results({ items }) {
  if (!items || items.length === 0) return null

  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item, idx) => (
        <div key={idx} className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
          <div className="aspect-video bg-gray-100 overflow-hidden">
            {item.type === 'video' ? (
              <video src={item.url} poster={item.thumbnail || undefined} controls className="w-full h-full object-cover" />
            ) : (
              <img src={item.thumbnail || item.url} alt="preview" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              {item.type === 'video' ? (
                <Video className="h-4 w-4" />
              ) : (
                <Image className="h-4 w-4" />
              )}
              <span className="text-sm font-medium capitalize">{item.type}</span>
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
