import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { logo, myImg } from './index';


const NavBar = ({ searchedTerm, setSearchedTerm }) => {
    const navigate=useNavigate();
    
    const searchIt = () => {
        let inputField = document.querySelector(".searchField input").value;
        if (inputField === "") return;
        setSearchedTerm(inputField);
        navigate(`/search/${inputField}`)
    }
    return (
        <div className="masterHead">
            <i className="fa-solid fa-bars"></i>
            <Link to={'/'} style={{ textDecoration: "none" }}>
                <div className="mokoTubeIcon">
                    <img src={logo} alt="logo" />
                    Moko Tube
                </div>
            </Link>
            <div className="searchField">
                <input type="text" placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass" onClick={() => { searchIt() }}></i>
            </div>
            <img src={myImg} alt="logo" />
        </div>
    )
}
export default NavBar;