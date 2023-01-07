import axios from "axios"
import { useEffect, useState } from "react"

import Navbar from '../../components/NavbarComponent/navbar'
function More() {
    const [more, setMore] = useState([])
    const Moredata = async() => {
        const datasmore = await axios.get("http://localhost:8000/netflix")
        setMore(datasmore.data)
    }
    useEffect(() => {
        Moredata()
    }, [Moredata])
    
    return (
        <>
        <Navbar/>
        <div className="container">
            {more.map((elem, index) => 
                <>
                <h1 key={index}>{elem.title}</h1>
                <p key={index}>{elem.text}</p>
                </>
            )}
        </div>
        </>
    )
}
export default More