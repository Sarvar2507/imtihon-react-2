import MediaCom from "../../components/MediaComponent/mediaCom"
import Navbar from "../../components/NavbarComponent/navbar"
import Watch from "../../components/WatchComponents/watch"
import Main from "../../components/MainComponent/main"

function Netflix() {
    return (
        <>
    <div className="container">
        <div className="box_main">
            <Navbar/>
            <Main/>
            <MediaCom/>
        </div>
    </div>
        <Watch/>
        </>
    )
}
export default Netflix