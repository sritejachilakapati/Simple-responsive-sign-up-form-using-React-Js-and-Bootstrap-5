import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
