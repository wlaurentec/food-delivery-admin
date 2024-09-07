import { assets } from "../../assets/assets"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <img className="profile-image" src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
