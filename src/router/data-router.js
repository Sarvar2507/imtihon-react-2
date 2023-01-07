import DrammaPage from "../pages/Dramma/dramma";
import Hbopage from "../pages/Hbomax/hbomax";
import Home from "../pages/Home/home";
import Komediyapage from "../pages/Komediya/komediya";
import More from "../pages/More/more";
import Netflix from "../pages/netflix/netflix";
import SeeMore from "../pages/Seemore/inde";
import TrillerPage from "../pages/Triller/triller";


export const DataRouter = [
    {
        id : 1,
        path : "/",
        Element : <Home/>
    },
    {
        id : 2,
        path : "/netflix",
        Element : <Netflix/>
    },
    {
        id : 3,
        path : "/HBOmax",
        Element : <Hbopage/>
    },
    {
        id : 4,
        path : "/komediya",
        Element : <Komediyapage/>
    },
    {
        id : 4,
        path : "/dramma",
        Element : <DrammaPage/>
    },
    {
        id : 5,
        path : "/triler",
        Element : <TrillerPage/>
    },
    {
        id : 6,
        path : "/seemore",
        Element : <SeeMore/>
    },
    {
        id : 7,
        path : "/more",
        Element : <More/>
    }
]