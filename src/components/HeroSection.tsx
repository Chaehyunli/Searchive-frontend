"use client"

import { Button } from "./common/Button"
import { MessageSquare, Sparkles } from "lucide-react"
import FeatureCards from "./FeatureCards"

interface HeroSectionProps {
  onGetStarted: () => void
  isLoggedIn?: boolean
}

export default function HeroSection({ onGetStarted, isLoggedIn }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50/50 border border-gray-200/50 text-sm text-gray-900 backdrop-blur-sm mb-10 sm:mb-12">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-medium">AI 기반 문서 지능 플랫폼</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8 sm:mb-10">
            당신의 개인
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
              지식 비서
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed px-4 sm:px-0 mb-10 sm:mb-12">
            고급 AI를 활용하여 문서를 업로드하고, 검색하고, 대화하세요.
            <br className="hidden sm:block" />
            <span className="sm:inline block mt-1 sm:mt-0">지식 베이스를 지능적인 대화로 전환합니다.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto max-w-md sm:max-w-none mb-16 sm:mb-20">
            <Button
              onClick={onGetStarted}
              className="bg-blue-400 hover:bg-blue-500 text-white h-12 sm:h-11 px-6 sm:px-8 text-sm sm:text-base font-medium shadow-lg shadow-blue-400/20 w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {isLoggedIn ? "대시보드로 이동" : "지금 시작하기"}
            </Button>
            <Button
              variant="outline"
              className="border-gray-200 hover:bg-gray-50/50 h-12 sm:h-11 px-6 sm:px-8 text-sm sm:text-base font-medium bg-white w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              작동 방식 보기
            </Button>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 px-4 sm:px-6">
          <FeatureCards />
        </div>
      </div>
    </section>
  )
}
