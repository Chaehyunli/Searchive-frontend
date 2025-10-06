import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키 기반 세션 인증을 위해 필요
});

// 응답 인터셉터: 에러 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 Unauthorized 처리
    if (error.response?.status === 401) {
      // 세션 만료 시 로그인 페이지로 리디렉션 등의 처리
      console.error('인증 오류: 세션이 만료되었습니다.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
