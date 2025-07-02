import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import '../css/Home.css'; 
import drinksImage from '../assets/images/cocktails-removebg-preview.png'; // Adjust the path as necessary 
const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/face-recognition');
  };

  return (
    <div className="home">
      <Navbar />
      
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              WELCOME TO <br />
              <span className="highlight">BARBOT</span>
            </h1>
            
            <p className="home-subtitle">
              Your personal robot bartender, mixing the perfect drink every time!
            </p>
            
            <button className="btn btn-primary home-button" onClick={handleGetStarted}>
              GET STARTED!
            </button>
          </div>
          
          {/* <div className="home-drinks">
            <div className="drink-glass yellow-drink">
              <div className="drink-content"></div>
            </div>
            <div className="drink-glass red-martini">
              <div className="drink-content"></div>
              <div className="martini-stem"></div>
            </div>
            <div className="drink-glass red-cocktail">
              <div className="drink-content"></div>
            </div>
          </div> */}
          <div className="home-drinks">
            <img 
              src={drinksImage} 
              alt="BarBot Drinks" 
              className="home-drinks-image"
              style={{ maxWidth: '100%', height: '350px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;