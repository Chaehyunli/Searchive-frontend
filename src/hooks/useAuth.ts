import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // TODO: 로컬 스토리지 또는 상태에서 사용자 정보 확인
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthenticated(true);
      // TODO: 토큰으로 사용자 정보 가져오기
    }
  }, []);

  const login = (userData: User, token: string) => {
    localStorage.setItem('accessToken', token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
    setIsAuthenticated(false);
  };

  return { user, isAuthenticated, login, logout };
};
