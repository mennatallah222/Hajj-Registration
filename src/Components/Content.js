<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export default function Content(props){
    return <div style={{flexWrap:"wrap"}} className={"content"}>
        <img src={props.img} alt="img"></img>
        <br/>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"0"}}>
        
        <h2>{props.title}</h2>
        <h4 style={{color:"#717171"}}>{props.rating} <i className="fa-solid fa-star" style={{color:"gold"}}></i></h4>
            
        </div>
        <h3>{props.details}</h3>
       
        <h4>{props.price} $</h4>


    </div>;
}