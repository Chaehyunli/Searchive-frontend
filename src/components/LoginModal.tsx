"use client"

import { useAuthStore } from "../store/authStore"
import { Button } from "./common/Button"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onLoginSuccess?: () => void
}

export default function LoginModal({ open, onOpenChange, onLoginSuccess }: LoginModalProps) {
  const { setUser } = useAuthStore()

  const handleKakaoLogin = () => {
    // TODO: 카카오 OAuth 로그인 구현
    // 임시로 로그인 성공 처리
    setUser({ email: "kakao@user.com", name: "카카오 사용자" })
    onLoginSuccess?.()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => onOpenChange(false)} />

      {/* 모달 콘텐츠 */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl">
        <div className="px-8 py-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Searchive에 오신 것을 환영합니다
          </h2>
          <p className="text-center text-gray-500 mb-12">AI 기반 문서 워크스페이스에 접속하세요</p>

          <Button
            type="button"
            className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 h-8 font-semibold shadow-md flex items-center justify-center gap-2"
            onClick={handleKakaoLogin}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.442 1.443 4.615 3.686 6.143-.203.748-.753 2.784-.868 3.235-.14.548.2.54.422.392.174-.115 2.857-1.937 3.32-2.255A13.28 13.28 0 0012 18c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
            </svg>
            카카오로 시작하기
          </Button>

          <p className="text-center text-xs text-gray-400 mt-8">
            로그인하면 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다
          </p>
        </div>
      </div>
    </div>
  )
}
