import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComponentAtPath } from './ComponentAtPath';
import { ComponentList } from './ComponentList';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo/:componentName" element={<ComponentAtPath prefix='./demo' />} />
        <Route path="/404" element={<h1>Page Not Found</h1>} />
        <Route path="/" element={<ComponentList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
