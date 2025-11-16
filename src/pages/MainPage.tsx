"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import HeroSection from "../components/HeroSection"
import LoginModal from "../components/LoginModal"
import DocumentUploadModal from "../components/DocumentUploadModal"

export default function MainPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
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

  const handleFeatureClick = () => {
    if (isLoggedIn) {
      // 로그인 상태면 대시보드로 이동
      navigate("/dashboard")
    } else {
      // 비로그인 상태면 로그인 모달 열기
      setIsLoginModalOpen(true)
    }
  }

  const handleUploadClick = () => {
    if (isLoggedIn) {
      // 로그인 상태면 업로드 모달 열기
      setIsUploadModalOpen(true)
    } else {
      // 비로그인 상태면 로그인 모달 열기
      setIsLoginModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <main className="flex-grow">
        <HeroSection
          onGetStarted={handleGetStarted}
          isLoggedIn={isLoggedIn}
          onFeatureClick={handleFeatureClick}
          onUploadClick={handleUploadClick}
        />
      </main>
      <Footer />
      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
      <DocumentUploadModal open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen} />
    </div>
  )
}
