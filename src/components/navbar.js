// import { useHistory } from "react-router";
const Navbar = () => {
// const history = useHistory();

return ( <>
  <nav>
    <div className="my-col-10 off-1">
      <div className="my-col-2">
        <div className="my-col-10 off-1">
          <span className="px13 bold">Genebank</span>
        </div>
      </div>
      <div className="my-col-7 centered bold px13">
       <span className="logo"></span>
       <span className="links">Home</span>
       <span className="links">User guides</span>
       <span className="links">Analysis </span>
        <div className="extension">
        <span className="links">About
        <i className="fas fa-angle-down mg-3"></i> 
        <div className="nav-extentions">
          <div className="my-col-10 off-1 down-5">
            <div className="ex-links">Our Publications</div>
            <div className="ex-links">How To Cite Us</div>
            <div className="ex-links">Papers That Cite Us</div>
            <div className="ex-links">Our Team</div>
          </div>
        </div>
        </span>
        </div>
      </div>
      <div className="my-col-3 last-child px13 right ">
       <div className="my-col-12 off-2" >
       {/* <span className="links white bg-color-code-1">Sign Up</span> */}
       <span  className="links white  mg-3 bg-color-code-1">Upload Data</span>
       </div>
      </div>
    </div>
  </nav> 
 </> );
}
 
export default Navbar;