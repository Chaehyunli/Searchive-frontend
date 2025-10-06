const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Searchive</h3>
            <p className="text-sm mb-4">
              문서 기반 AI 검색 및 대화 플랫폼
            </p>
            <p className="text-sm text-gray-400">
              여러분의 문서를 더욱 스마트하게 관리하고 검색하세요.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  주요 기능
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  소개
                </a>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">고객 지원</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#help" className="hover:text-white transition-colors">
                  도움말
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  문의하기
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2025 Searchive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
