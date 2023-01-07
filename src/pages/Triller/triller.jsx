import MediaCom from '../../components/MediaComponent/mediaCom'
import Navbar from '../../components/NavbarComponent/navbar'
import Triller from '../../components/TrillerComponent/triller'
import Main from '../../components/MainComponent/main'

function TrillerPage() {
    return (
        <>
        <div className="container">
        <div className="box_main">
            <Navbar/>
            <Main/>
            <MediaCom/>
        </div>
        </div>
        <Triller/>
        </>
    )
}
export default TrillerPage