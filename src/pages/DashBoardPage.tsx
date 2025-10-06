"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"
import { Button } from "../components/common/Button"
import { Sparkles } from "lucide-react"
import FeatureCards from "../components/FeatureCards"
import DocumentList from "../components/DocumentList"

export default function DashboardPage() {
  const { isLoggedIn, user, logout, checkAuth } = useAuthStore()
  const navigate = useNavigate()

  // 페이지 로드 시 인증 상태 확인
  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 로그인하지 않은 경우 메인 페이지로 리다이렉트
  if (!isLoggedIn) {
    navigate("/")
    return null
  }

  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/30 bg-white/60 backdrop-blur-2xl">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 via-blue-300 to-blue-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900 tracking-tight">Searchive</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{user?.nickname}</span>
            <Button size="sm" variant="ghost" onClick={handleLogout} className="text-gray-900 hover:bg-gray-50/50 h-9">
              로그아웃
            </Button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="pt-20 sm:pt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">대시보드</h1>
            <p className="text-sm sm:text-base text-gray-500">문서를 업로드하고 AI와 대화를 시작하세요</p>
          </div>
        </div>

        {/* Feature Cards - 가운데 상단 배치 */}
        <div className="w-full py-8 mb-12 px-4 sm:px-6">
          <FeatureCards />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 구분선 */}
          <div className="w-full border-t border-gray-200 my-12"></div>

          {/* 업로드된 문서 목록 영역 */}
          <div className="w-full px-4 sm:px-8 py-8 mt-12">
            <DocumentList />
          </div>
        </div>
      </div>
    </div>
  )
}
