import {useParams} from "react-router-dom";

const SingleProduct = ()=>{
    const {id} = useParams();
    return(
        <h2>This is Single Product - {id} </h2>
    )
}

export  default  SingleProduct;