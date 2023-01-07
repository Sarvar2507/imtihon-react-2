import Hbo from "../../components/HboComponent/hbo"
import MediaCom from "../../components/MediaComponent/mediaCom"
import Navbar from "../../components/NavbarComponent/navbar"
import Main from "../../components/MainComponent/main"

function Hbopage() {
    return (
        <>
            <div className="container">
         <div className="box_main">
            <Navbar/>
                <Main/>
                <MediaCom/>
            </div>
        </div>
        <Hbo/>
        </>
    )
}
export default Hbopage