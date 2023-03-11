import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { logo, myImg } from './index';


const NavBar = () => {
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('mode'));
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        toggleMode();
        // eslint-disable-next-line
    },[])
    const searchOnEnter = (e) => {
        if (e.target.value === "") return;
        if (e.keyCode === 13) {
            navigate(`/search/${e.target.value}`);
            e.target.blur();
        }
    }
    const searchIt = () => {
        let inputField = document.querySelector(".searchField input").value;
        if (inputField === "") return;
        navigate(`/search/${inputField}`)
    }
    const toggleSideNav = () => {
        if(isSideNavOpen) document.getElementById("mySidenav").style.width="0px";
        else document.getElementById("mySidenav").style.width="35rem";
        setIsSideNavOpen(!isSideNavOpen);
    }
    const toggleMode=()=>{
        let root=document.querySelector(':root');
        // let rootStye=getComputedStyle(root);
        if(currentMode==="Dark"){
            root.style.setProperty('--bgColor','#0f0f0f')
            root.style.setProperty('--fgColor','#f1f1f1')
            root.style.setProperty('--Color1','#c7c7c7')
            root.style.setProperty('--Color2','#0a81ffd8')
            root.style.setProperty('--Color3','#272727')
            setCurrentMode("Light");
            localStorage.setItem('mode','Dark')
        }
        else{
            root.style.setProperty('--bgColor','#f1f1f1')
            root.style.setProperty('--fgColor','#0f0f0f')
            root.style.setProperty('--Color1','#919191')
            root.style.setProperty('--Color2','#0a81ffd8')
            root.style.setProperty('--Color3','#dcdcdc')
            setCurrentMode("Dark");
            localStorage.setItem('mode','Light')
        }
    }
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <i className="fa-solid fa-xmark" onClick={toggleSideNav} style={{marginLeft:"1rem"}}></i>
                <p onClick={()=>{navigate('/');toggleSideNav()}}>Home</p>
                <p onClick={()=>{toggleMode();toggleSideNav();}}>{currentMode} Mode</p>
                <p onClick={()=>{navigate('/history');toggleSideNav()}}>Recently Watched</p>
            </div>
            <div className="masterHead">
                <i className="fa-solid fa-bars" onClick={toggleSideNav}></i>
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <div className="mokoTubeIcon">
                        <img src={logo} alt="logo" />
                        Moko Tube
                    </div>
                </Link>
                <div className="searchField">
                    <input type="text" placeholder='Search' onKeyDown={(e) => { searchOnEnter(e) }} />
                    <i className="fa-solid fa-magnifying-glass" onClick={() => { searchIt() }}></i>
                </div>
                <img src={myImg} alt="logo" />
            </div>
        </>
    )
}
export default NavBar;