import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import IntroductionPage from './components/pages/IntroductionPage';
import HomePage from './components/pages/HomePage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/introuduction" element={<IntroductionPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>

  )
}
