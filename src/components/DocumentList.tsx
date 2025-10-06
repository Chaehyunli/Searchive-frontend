import { FileText, Calendar, Trash2 } from "lucide-react"

interface Document {
  id: string
  name: string
  uploadedAt: string
  size: string
}

export default function DocumentList() {
  // 임시 데이터 (나중에 실제 데이터로 대체)
  const documents: Document[] = []

  if (documents.length === 0) {
    return (
      <div className="w-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">업로드된 문서</h2>
        <div className="text-center py-16 text-gray-400">
          <FileText className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>업로드된 문서가 없습니다</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">업로드된 문서</h2>
      <div className="grid grid-cols-1 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200/60 hover:border-blue-400/40 hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{doc.name}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {doc.uploadedAt}
                    </span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
