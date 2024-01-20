import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/list" element={<List />} />
          <Route path="/post/$id" element={<HomePage />} />
          <Route path="/post/$id/answer" element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
