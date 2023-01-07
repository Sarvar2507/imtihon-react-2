import Dramma from "../../components/DrammaComponents/dramma"
import MediaCom from "../../components/MediaComponent/mediaCom"
import Navbar from "../../components/NavbarComponent/navbar"
import Main from "../../components/MainComponent/main"

function DrammaPage() {
    return (
        <>
        <div className="container">
        <div className="box_main">
            <Navbar/>
            <Main/>
            <MediaCom/>
        </div>
        </div>
        <Dramma/>
        </>
    )
}
export default DrammaPage