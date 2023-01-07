
import { NavLink } from 'react-router-dom'
import conutineImg4 from '../../assets/Rectangle 2.png'
import conutineImg5 from '../../assets/Rectangle 6.png'
function Watch() {
    return (
        <>
        <div className="container">
        <ul className='con_ul1'>
                <li className='con_li'>
                    <img src={conutineImg5} alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src="https://ixbt.online/live/images/original/20/93/55/2021/09/18/9f3dfa396f.jpg" alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src={conutineImg4} alt="" />
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
export default Watch