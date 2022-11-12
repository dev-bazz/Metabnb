import { NavLink } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import Button from "../component/Button";

export default function Nav() {
        return (
                <nav className="nav">
                        <div className="container--global nav-container">
                                <Icons name='brand' className='nav__logo' />
                                <ul className="nav-link__list" role={'list'}>
                                        <li><NavLink to={'/'}>Home </NavLink>  </li>
                                        <li><NavLink to={'/'}>Place to Stay </NavLink>  </li>
                                        <li><NavLink to={'/'}>NFTs </NavLink>  </li>
                                        <li><NavLink to={'/'}>Community </NavLink>  </li>
                                </ul>
                                <Button text={`Connect Wallet`} />
                        </div>
                </nav>
        )
}
