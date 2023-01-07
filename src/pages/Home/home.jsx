import './home.css'

import Conutine from '../../components/ConutineComponents/conutine'
import Main from "../../components/MainComponent/main"
import Navbar from "../../components/NavbarComponent/navbar"
import MediaCom from '../../components/MediaComponent/mediaCom'

function Home() {
    return (
        <>
        <div className="container">
        <div className="box_main">
            <Navbar/>
            <Main/>
            <MediaCom/>
        </div>
        </div>
        <Conutine/>
        </>
    )
}
export default Home