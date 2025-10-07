"use client"

import { Button } from "../common/Button"
import { Sparkles } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../../store/authStore"

interface HeaderProps {
  onLoginClick?: () => void
}

export default function Header({ onLoginClick }: HeaderProps) {
  const navigate = useNavigate()
  const { isLoggedIn, user, logout } = useAuthStore()

  const handleLogout = async () => {
    await logout()
    navigate("/")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/30 bg-white/60 backdrop-blur-2xl">
      <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 via-blue-300 to-blue-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-base sm:text-lg font-semibold text-gray-900 tracking-tight">Searchive</span>
          </div>
        </div>

        {!isLoggedIn && (
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              기능
            </a>
            <a href="#about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              소개
            </a>
          </nav>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2">
          {!isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                onClick={onLoginClick}
                className="text-gray-900 hover:bg-gray-50/50 h-9 sm:h-10 px-6 sm:px-8 py-2 text-sm"
              >
                로그인
              </Button>
              <Button
                onClick={onLoginClick}
                className="bg-blue-400 hover:bg-blue-500 text-white h-9 sm:h-10 px-7 sm:px-9 py-2 text-sm font-medium"
              >
                시작하기
              </Button>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-500">{user?.nickname}</span>
              <Button
                variant="ghost"
                onClick={handleLogout}
                className="text-gray-900 hover:bg-gray-50/50 h-9 sm:h-10 px-5 sm:px-6 py-2 text-sm"
              >
                로그아웃
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
