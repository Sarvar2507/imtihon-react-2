import './media.css'

import mediaImg from '../../assets/Rectangle 13 (3).png'
import mediaImg2 from '../../assets/Rectangle 14.png'
import mediaImg3 from '../../assets/Rectangle 16 (1).png'
import mediaImg4 from '../../assets/Rectangle 15.png'
import { NavLink } from 'react-router-dom'
function MediaCom() {
    return (
        <>
        <section className="sevice">
            <h1 className="service_title">Media Service</h1>
            <ul className='media_ul'>
                <li className='media_li'>
                    <img src={mediaImg} alt="" />
                    <p className='prime_text'>Prime</p>
                </li>
                <li className='media_li'>
                    <img src={mediaImg2} alt="" />
                    <NavLink to="/HBOmax">
                        <p className='prime_text'>HboMax</p>
                    </NavLink>
                </li>
                <li className='media_li'>
                    <img src={mediaImg3} alt="" />
                    <NavLink to='/netflix'>
                        <a href="#" className='prime_text'>Netflix</a>
                    </NavLink>
                </li>
                <li className='media_li'>
                    <img src={mediaImg4} alt="" />
                    <p className='prime_text'>Disney+</p>
                </li>
            </ul>
            <ul className='media_ul2'>
                <li className='media_li'>
                    <NavLink to="/komediya">
                        <p className='prime_text'>Komediya</p>
                    </NavLink>
                </li>
                <li className='media_li'>
                    <NavLink to="/dramma">
                        <p className='prime_text'>Dramma</p>
                    </NavLink>
                </li>
                <li className='media_li'>              
                    <NavLink to='/triler'>
                        <a href="#" className='prime_text'>Triller</a>
                    </NavLink>
                </li>
            </ul>
        </section>
        </>
    )
}
export default MediaCom