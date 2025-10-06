"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export default function KakaoCallback() {
  const navigate = useNavigate()
  const { checkAuth } = useAuthStore()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // 백엔드에서 카카오 콜백 처리 후 세션이 생성됨
        // 사용자 정보를 가져와서 store에 저장
        await checkAuth()

        // 대시보드로 이동
        navigate("/dashboard")
      } catch (error) {
        console.error("카카오 로그인 콜백 처리 실패:", error)
        // 로그인 실패 시 메인 페이지로 이동
        navigate("/")
      }
    }

    handleCallback()
  }, [checkAuth, navigate])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">로그인 처리 중...</p>
      </div>
    </div>
  )
}
