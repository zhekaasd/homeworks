import React, {useState} from 'react'
import {HashRouter} from 'react-router-dom'
import Header from './comonents/Header/Header'
import RoutesComponent, { PATH } from './comonents/RoutesComponent/RoutesComponent'
import Sidebar from "./comonents/Sidebar/Sidebar";

/*--- styles ---*/
import icon1 from "./assets/icons/frown-solid.svg";
import icon2 from "./assets/icons/frown-open-solid.svg";
import icon3 from "./assets/icons/sad-tear-solid.svg";



function HW5() {

    let [isTrue, setIsTrue] = useState<boolean>(false);

    let data = [
        {id: '01', nameLink: 'pre junior', path: PATH.PRE_JUNIOR, icon: icon1},
        {id: '02', nameLink: 'junior', path: PATH.JUNIOR, icon: icon2},
        {id: '03', nameLink: 'junior +', path: PATH.JUNIOR_PLUS, icon: icon3}
    ]

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header isTrue={isTrue} changeIsTrue={setIsTrue} />


                <div  style={{paddingTop: '100px'}}>
                    <Sidebar isTrue={isTrue} changeIsTrue={setIsTrue} data={data} />
                    <RoutesComponent isTrue={isTrue} />
                </div>

            </HashRouter>
        </div>
    )
}

export default HW5
