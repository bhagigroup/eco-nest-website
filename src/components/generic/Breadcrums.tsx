import { Link } from "react-router-dom";

interface Props{
  item1:string;
  item2:string;
  item3?:string;
}
export const Breadcrumbs:React.FC<Props> = ({item1,item2,item3}) =>{
    return (
        <nav className="position-relative pt-3 my-3 my-md-4" aria-label="breadcrumb" style={{zIndex: "1021"}}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">{item1}</Link></li>
          <li className={`breadcrumb-item ${item3 ? "" :"active"}`} aria-current="page">{item2}</li>
          {item3 ? <li className="breadcrumb-item active" aria-current="page">{item3}</li> : null}
        </ol>
      </nav>
    )
}