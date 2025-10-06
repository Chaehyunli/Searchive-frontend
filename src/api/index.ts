// API 클라이언트 및 도메인별 API export
export { default as apiClient } from './client';
export * from './auth.api';

// 기존 API 함수들 (추후 도메인별로 분리 예정)
import apiClient from './client';

export const uploadDocument = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await apiClient.post('/documents/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const getDocuments = async () => {
  const response = await apiClient.get('/documents');
  return response.data;
};
