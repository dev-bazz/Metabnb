import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../assets/icons/Icons";

export default function Nav({handleModal}) {


        return (
                <nav className="nav">
                        <div className="container--global nav-container">
                                <Icons name='brand' className='nav__logo' />
                                <ul className="nav-link__list" role={'list'}>
                                        <li><NavLink to={'/'}>Home </NavLink>  </li>
                                        <li><NavLink to={'/'}>Place to Stay </NavLink>  </li>
                                        <li><NavLink to={'NFTs'}>NFTs </NavLink>  </li>
                                        <li><NavLink to={'/'}>Community </NavLink>  </li>
                                </ul>
                                <button className="btn" onClick={() => handleModal()}> Connect Wallet</button>
                        </div>
                </nav>
        )
}
