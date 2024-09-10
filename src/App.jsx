import LandingPage from "./components/LandingPage";
import TodoList from "./components/TodoList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

       
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
