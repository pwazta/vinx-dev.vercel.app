import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageContent from './Components/PageContent';

// Originally used a router because everything wasn't on the same page
function App() {
  return (
    <>
      <Router>
        <Header/>
        <PageContent/>
        <Footer/>
      </Router>
    </>
  );
}
export default App;