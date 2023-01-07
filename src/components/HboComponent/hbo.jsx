import './hbo.css'

import conutineImg from '../../assets/Rectangle 5.png'
import conutineImg2 from '../../assets/unsplash_UC0HZdUitWY.png'
import conutineImg3 from '../../assets/unsplash_V0zU9A_Zq9A.png'
import { NavLink } from 'react-router-dom'
function Hbo() {
    return (
        <>
        <div className="container">
        <ul className='con_ul'>
                <li className='con_li'>
                    <img src={conutineImg} alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src={conutineImg2} alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src={conutineImg3} alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}
export default Hbo