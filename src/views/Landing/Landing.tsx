import "./Landing.css";
import { RiFirebaseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const navigateToSignUp = (): void => {
    navigate("/signup");
  };
  const navigateToSignIn = (): void => {
    navigate("/login");
  };

  return (
    <div className="landing">
      <div className="header">
        <div className="title">
          <RiFirebaseFill className="icon" />
          <h1>NOX</h1>
        </div>

        <div className="buttons">
          <button onClick={navigateToSignUp}>Sign Up</button>
          <button onClick={navigateToSignIn}>Log In</button>
        </div>
      </div>

      {/* <div className="body"> */}
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="image">
        <img
          src="https://www.zegna.com/content/dam/zegna-commerce/editorials/ratio0628/hp/fw24/holiday/zegna-cashmere-scarves-wall-01-M13-mobile-ratio0628.webp.editorialImage.R7.png"
          alt="img"
        />
        <div className="message">
          <h2>FALL 2024</h2>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="card-container">
        <h1>hola</h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Landing;