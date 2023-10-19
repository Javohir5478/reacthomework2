
import "./header.scss";

export default function Header() {
  return (
        <div className="header_container"> 
         <img className="logo" src="/logo.png" alt="" />
         <img className="menu" src="/menu.png" alt="" />   
         <input  type="text" placeholder="search products.." />
         <img className="pic6" src="/pic6.png"  alt="Избранное" />
         <img className="pic5" src="/pic5.png"  alt="Избранное" />
         <img className="pic3" src="/pic3.png"  alt="Избранное"  />
         <button className="btn ">Login</button>

        </div>
  )
}
