# 🚀 Searchive Frontend

**Searchive**는 AI 기반의 개인 문서 관리 및 지식 탐색 서비스입니다. 이 레포지토리는 사용자가 직접 상호작용하는 프런트엔드 웹 애플리케이션의 코드를 관리합니다.

최신 웹 기술인 **Vite**와 **React**, **TypeScript**를 기반으로 구축되어 빠르고 안정적인 사용자 경험을 제공하는 것을 목표로 합니다.

---

## ✨ 주요 기능 (Features)

-   **간편한 소셜 로그인**: 카카오 로그인을 통한 빠르고 안전한 인증.
-   **직관적인 문서 관리**: 드래그 앤 드롭 방식의 파일 업로드 및 문서 목록 관리.
-   **통합 검색**: 키워드와 의미 기반 검색을 결합한 하이브리드 검색 기능.
-   **AI 기반 기능**:
    -   원클릭 문서 요약.
    -   여러 문서를 선택하여 대화할 수 있는 AI 채팅 인터페이스.
-   **개인화 대시보드**: 사용자 프로필에서 자신의 지식 활용 패턴을 시각적으로 확인.

---

## 🛠️ 기술 스택 (Tech Stack)

-   **Core**: React.js, TypeScript, Vite
-   **API Communication**: Axios
-   **State Management**: Zustand (또는 Redux, Recoil)
-   **Routing**: React Router
-   **Styling**: Styled-components (또는 Tailwind CSS)

---

## 🏁 시작하기 (Getting Started)

### **사전 준비물**

-   [Node.js](https://nodejs.org/) (LTS 버전 권장)
-   npm 또는 yarn

### **설치 및 실행**

1.  **레포지토리 클론:**
    ```bash
    git clone https://github.com/Chaehyunli/Searchive-frontend.git
    cd Searchive-frontend
    ```

2.  **의존성 라이브러리 설치:**
    ```bash
    npm install
    ```

3.  **환경 변수 설정:**
    프로젝트 루트에 `.env` 파일을 생성하고, 백엔드 API 서버의 주소를 입력합니다.
    ```
    VITE_API_URL=http://localhost:8000
    ```

4.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```
    서버가 실행되면 터미널에 나오는 주소(기본: `http://localhost:5173`)로 접속하여 애플리케이션을 확인할 수 있습니다.

---

## 📁 프로젝트 구조

```
Searchive-frontend/
├── public/              # 정적 파일 (favicon, images 등)
├── src/
│   ├── api/             # 🌐 API 요청 함수 및 Axios 인스턴스 관리
│   │   └── index.ts
│   ├── assets/          # 🖼️ 이미지, 폰트 등 정적 에셋
│   ├── components/      # 🧱 재사용 가능한 UI 컴포넌트
│   │   ├── common/      # 버튼, 인풋 등 범용 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   └── layout/      # 헤더, 푸터 등 레이아웃 컴포넌트
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── hooks/           # 🎣 커스텀 훅 (예: useAuth, useDocuments)
│   │   ├── useAuth.ts
│   │   └── useDocuments.ts
│   ├── pages/           # 📄 페이지 단위의 컴포넌트
│   │   ├── LoginPage.tsx
│   │   └── MainPage.tsx
│   ├── store/           # 🏪 전역 상태 관리 (Zustand)
│   │   └── authStore.ts
│   ├── styles/          # 🎨 전역 CSS, 테마 관련 파일
│   │   └── global.css
│   ├── types/           # 🏷️ TypeScript 타입 정의
│   │   └── index.ts
│   ├── App.tsx          # 🏠 애플리케이션 최상위 진입점 (라우팅 설정)
│   └── main.tsx         # 애플리케이션 엔트리 포인트
├── .gitignore
├── eslint.config.js     # ESLint 설정
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 의존성 및 스크립트
├── tsconfig.json        # TypeScript 설정
├── vite.config.ts       # Vite 설정
└── README.md
```

### 📂 폴더별 상세 설명

#### `api/` 🌐
- **역할**: Axios 인스턴스를 생성하고 기본 URL(`VITE_API_URL`), 헤더, 인터셉터 등을 설정하는 파일입니다.
- **내용**: `login()`, `uploadDocument()`, `getDocuments()` 등 백엔드와 통신하는 모든 API 요청 함수를 이곳에 모아 관리합니다.
- **예시**: `src/api/index.ts`

#### `assets/` 🖼️
- **역할**: 로고 이미지, 아이콘, 웹 폰트 등 프로젝트에서 사용하는 정적 파일들을 보관합니다.
- **예시**: 로고 파일, 아이콘 이미지 등

#### `components/` 🧱
- **역할**: 여러 페이지에서 재사용되는 작은 UI 조각들을 만듭니다.
- **하위 폴더**:
  - **`common/`**: `Button`, `Input`, `Modal`처럼 프로젝트 전반에서 사용되는 범용 컴포넌트가 위치합니다.
  - **`layout/`**: `Header`, `Footer`, `Sidebar`처럼 페이지의 전체적인 레이아웃을 구성하는 컴포넌트가 위치합니다.

#### `hooks/` 🎣
- **역할**: 여러 컴포넌트에서 공통으로 사용될 로직을 분리하는 커스텀 훅을 만듭니다.
- **예시**:
  - `useAuth.ts`: 사용자 인증 상태 관리
  - `useDocuments.ts`: 문서 목록 데이터 관리

#### `pages/` 📄
- **역할**: 실제 사용자가 보게 될 페이지 단위의 큰 컴포넌트들을 만듭니다.
- **내용**: `LoginPage.tsx`, `MainPage.tsx` 등이 여기에 해당하며, 여러 `components`들을 조합하여 하나의 페이지를 완성합니다.

#### `store/` 🏪
- **역할**: Zustand 같은 상태 관리 라이브러리를 사용하여 전역 상태를 관리합니다.
- **내용**: 로그인한 사용자 정보, 테마(다크/라이트 모드) 등 여러 컴포넌트가 공유해야 하는 데이터를 이곳에서 관리합니다.
- **예시**: `authStore.ts`

#### `styles/` 🎨
- **역할**: `global.css`나 `theme.ts` 파일 등을 두어 프로젝트의 전반적인 스타일, 색상, 폰트 크기 등을 정의합니다.

#### `types/` 🏷️
- **역할**: TypeScript 프로젝트의 핵심 폴더입니다.
- **내용**: 백엔드 API로부터 받는 `User`, `Document` 같은 데이터의 형태를 `interface`나 `type`으로 미리 정의하여 코드의 안정성을 높입니다.

#### `App.tsx` 🏠
- **역할**: React 애플리케이션의 최상위 진입점입니다.
- **내용**: React Router를 사용하여 각 URL 경로에 어떤 `pages`를 보여줄지 라우팅 설정을 이곳에서 합니다.

---

## 📜 사용 가능한 스크립트 (Available Scripts)

-   **`npm run dev`**: 개발 서버를 실행합니다 (기본 포트: 5173).
-   **`npm run build`**: 프로덕션 빌드를 생성합니다.
-   **`npm run lint`**: ESLint를 실행하여 코드 품질을 검사합니다.
-   **`npm run preview`**: 빌드된 애플리케이션을 미리보기 모드로 실행합니다.

---

## 🤝 기여하기 (Contributing)

이 프로젝트에 기여하고 싶으시다면:

1.  이 레포지토리를 Fork 합니다.
2.  새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3.  변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4.  브랜치에 Push 합니다 (`git push origin feature/amazing-feature`).
5.  Pull Request를 생성합니다.

---

## 📝 라이선스 (License)

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

---

## 📞 문의 (Contact)

프로젝트에 대한 문의사항이나 피드백은 아래로 연락주세요:

-   **Email**: your-email@example.com
-   **GitHub Issues**: [Issues 페이지](https://github.com/your-username/Searchive-frontend/issues)
