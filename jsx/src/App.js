import "./App.css";
import FullName from "./Component/profile/FullName";
import ProfilePhoto from "./Component/profile/ProfilePhoto";
import Address from "./Component/profile/Address";
import Tounes from "./Component/profile/images/Tunisia flag-XXL-anim.gif";
function App() {
  return (
    <>
      <div class="rourou">
        <br/>
        <FullName/>
        <Address/>
        <ProfilePhoto />
        <h2 className="ta7yatounes">
            Happy RePublic Day
          </h2> 
          <h3 className="piiiip">
            25 July 2022
          </h3>
          <div className="coucou">
          <img className="mika" src={Tounes} alt="tounes"/>
          </div>
      </div>
    </>
  );
}

export default App;