import PropTypes from "prop-types";

export default function Navbar(props) {
  let colorNav = (mode) =>
  {
    if(mode==="light")
    {
      return "#d1d1d1";
    }
    else if(mode==="redDark")
    {
      return "#2a0101";
    }
    else if(mode==="greenDark")
    {
      return "#012a01";
    }
    else if(mode==="blueDark")
    {
      return "#01012a";
    }
  }

  const colorBg = (mode) =>
  {
    if(mode==="light")
    {
      return "white"
    }
    else if(mode==="blueDark")
    {
      return "#040445"
    }
    else if(mode==="redDark")
    {
      return "#450404"
    }
    else if(mode === "greenDark")
    {
      return "#044504"
    }
  }
  return (
    <nav
      className={`navbar navbar-expand-lg`} style={{backgroundColor:colorNav(props.mode)}}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:(props.mode==="light")?"black":"white"}}>
          {props.title}
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active " aria-current="page" href="/" style={{color:(props.mode==="light")?"black":"white"}}>
                Home
              </a>
            </li>
          </ul>
          <div className="rounded bg-white mx-2" style={{height:"30px", width:"30px", backgroundColor:"white"}} onClick={()=>{props.toggleMode("light",colorBg("light"))}}></div>
          <div className="rounded bg-primary mx-2" style={{height:"30px", width:"30px",backgroundColor:"#01012a"}} onClick={()=>{props.toggleMode("blueDark",colorBg("blueDark"))}}></div>
          <div className="rounded bg-success mx-2" style={{height:"30px", width:"30px",backgroundColor:"#012a01"}} onClick={()=>{props.toggleMode("greenDark",colorBg("greenDark"))}}></div>
          <div className="rounded bg-danger mx-2" style={{height:"30px", width:"30px",backgroundColor:"#2a0101"}} onClick={()=>{props.toggleMode("redDark",colorBg("redDark"))}}></div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title here",
  mode: "light"
};
