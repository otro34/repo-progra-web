import { HomePage, EnrollmentPage } from './components/pages'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="enrollment" element={<EnrollmentPage/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
