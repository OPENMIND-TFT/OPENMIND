import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AnswerPage from './pages/AnswerPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/list" element={<HomePage />} />
          <Route path="/post/$id" element={<HomePage />} />
          <Route path="/post/$id/answer" element={<AnswerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
