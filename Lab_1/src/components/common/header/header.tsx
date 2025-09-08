import image from "../../../assets/RRC-Logo.png"

function Header() {
    return(
        <header>
            <img src={image} alt="RRC Logo" width="200" height="100"/>
            <h1> Employee List </h1>
            <span> Welcome to my Page! This page serves as a list of 
                employees in each department of PiXELL River </span>
        </header>
    )
}

export default Header;