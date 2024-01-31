import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import ListPage from './pages/ListPage';
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/post/:id" element={<QuestionPage />} />
          <Route path="/post/:id/answer" element={<AnswerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
