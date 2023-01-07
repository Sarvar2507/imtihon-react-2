import './conutine.css'
import Hbo from '../HboComponent/hbo'
import { NavLink } from 'react-router-dom'

function Conutine() {
    return (
        <>
        <div className="container">
            <div className="box_conutine">
                <h1 className="conutine_title">Continue Watching for nd3r4a</h1>
                <NavLink to="/seemore">
                    <a href="#" className="conutine_link">See more</a>
                </NavLink>
            </div>
            <Hbo/>
        </div>
        </>
    )
}
export default Conutine