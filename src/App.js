import './styles.css';
import Store from './Store';
import { Profile, Navbar, Blog } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile store={Store} />} />
          <Route path="/blog" exact element={<Blog store={Store} />} />
        </Routes>
      </Router>
  );
}

export default App;
