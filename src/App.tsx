import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuthStore } from "./store/authStore"
import MainPage from "./pages/MainPage"
import DashboardPage from "./pages/DashBoardPage"
import KakaoCallback from "./pages/KakaoCallback"
import "./styles/global.css"

function App() {
  const { checkAuth } = useAuthStore()

  // 앱 최초 로드 시 세션 쿠키 확인 및 인증 상태 복원
  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
