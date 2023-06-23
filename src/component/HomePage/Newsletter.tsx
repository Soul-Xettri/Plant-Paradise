import { Link } from "react-router-dom";


export default function Newsletter() {
  return (
    <footer className="footer" style={{marginRight:"40px",marginLeft:"40px"}}>
    <div className="container">
    <div className="form text-center">
    <h5 className="title-h5">NEWSLETTER<br/>TO GET IN TOUCH</h5>
    <form action="#">
        <input name="email" placeholder="Enter your e-mail" className="form-control" type="text" style={{width:"100%"}}/>
    </form>
    <div className="btn-web btn-web-1 " style={{display:"flex",justifyContent:"center"}}>
        <Link to="#" title="" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>All Products</Link>
    </div>
</div>
</div>
</footer>
  )
}
