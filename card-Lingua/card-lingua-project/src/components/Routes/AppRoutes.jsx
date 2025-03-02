import { Routes, Route } from 'react-router-dom';
import Library from '../Topics/Library';
import MyDictionary from '../MyDictionary/MyDictionary';
import NotFoundPage from '../Structure/NotFoundPage';
import FormCreateTopic from '../Topics/FormCreateTopic';
import Carousel from '../Cards/Carousel';
import PageModule from '../Topics/PageModule';

import Preview from '../Preview/Preview';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/pageModule/:moduleId" element={<PageModule />} />
      <Route path="/home" element={<Preview />} />
      <Route path="/library" element={<Library />} />
      <Route path="formCreateTopic/:moduleId?" element={<FormCreateTopic />} />
      <Route path="/myDictionary" element={<MyDictionary />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
