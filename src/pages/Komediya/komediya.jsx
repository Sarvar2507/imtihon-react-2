import Komediya from "../../components/komediyaComponent/komediya"
import MediaCom from "../../components/MediaComponent/mediaCom"
import Navbar from "../../components/NavbarComponent/navbar"
import Main from "../../components/MainComponent/main"

function Komediyapage() {
    return (
        <>
                <div className="container">
        <div className="box_main">
            <Navbar/>
            <Main/>
            <MediaCom/>
        </div>
        </div>
        <Komediya/>
        </>
    )
}
export default Komediyapage