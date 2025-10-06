import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  isLoggedIn: boolean
  user: {
    email: string
    name?: string
  } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: { email: string; name?: string }) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      login: async (email: string, _password: string) => {
        // TODO: 백엔드 API 호출
        // 임시로 로그인 성공 처리
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set({ isLoggedIn: true, user: { email } })
      },
      logout: () => {
        set({ isLoggedIn: false, user: null })
      },
      setUser: (user: { email: string; name?: string }) => {
        set({ user, isLoggedIn: true })
      },
    }),
    {
      name: "auth-storage",
    },
  ),
)
