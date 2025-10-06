"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import HeroSection from "../components/HeroSection"
import LoginModal from "../components/LoginModal"

export default function MainPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const { isLoggedIn } = useAuthStore()
  const navigate = useNavigate()

  const handleGetStarted = () => {
    if (isLoggedIn) {
      // 로그인 상태면 대시보드로 이동
      navigate("/dashboard")
    } else {
      // 비로그인 상태면 로그인 모달 열기
      setIsLoginModalOpen(true)
    }
  }

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false)
    navigate("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} isLoggedIn={isLoggedIn} />
      <main className="flex-grow">
        <HeroSection onGetStarted={handleGetStarted} isLoggedIn={isLoggedIn} />
      </main>
      <Footer />
      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} onLoginSuccess={handleLoginSuccess} />
    </div>
  )
}
