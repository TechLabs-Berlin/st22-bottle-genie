import Scan from '../../components/Scan/Scan';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import logo from '../../asset/logo.png';

function Scanpage() {


    return (
        <div className="container-fluid" id="main-container">
            <img src={logo} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
            <h3 id="heading">SCAN YOUR BOTTLE</h3>
            <Scan className="webcam" />
            <NavigationBar />
        </div>
    );
};

export default Scanpage;
