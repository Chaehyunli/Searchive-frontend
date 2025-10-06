import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useDocuments } from '../hooks/useDocuments';

const MainPage: React.FC = () => {
  const { documents, loading, error } = useDocuments();

  return (
    <div className="main-page">
      <Header />
      <main>
        <h2>문서 목록</h2>
        {loading && <p>로딩 중...</p>}
        {error && <p>{error}</p>}
        <ul>
          {documents.map((doc: any) => (
            <li key={doc.id}>{doc.title}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
