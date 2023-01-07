import { NavLink } from 'react-router-dom'
import './komediya.css'

function Komediya() {
    return (
        <>
        <div className="container">
        <ul className='con_ul1'>
                <li className='con_li'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWUvzK_RnsWEJHwFLOSILMTuZAUdwr9lCSg&usqp=CAU" alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src="http://asilmedia.org/uploads/mini/shortstory/5d/6f2cac8babbb5c9c986edc57796dae.jpg" alt="" />
                    <p className='conutine_text'>Inbetween 2022</p>
                    <NavLink to="/more">
                        <button className='more_button'>More Info</button>
                    </NavLink>
                </li>
                <li className='con_li'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJVJEIRSSEYLgHOqEodkqGml3CEHcVW2KhhA&usqp=CAU" alt="" />
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
export default Komediya