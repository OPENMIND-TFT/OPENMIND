import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import List from './pages/List';
import PheedPage from './pages/PheedPage';
import AnswerPage from './pages/AnswerPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="/list" element={<List />} />
          <Route path="/post/$id" element={<PheedPage />} />
          <Route path="/post/$id/answer" element={<AnswerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
