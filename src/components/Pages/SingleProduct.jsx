import {useParams} from "react-router-dom";

const SingleProduct = ()=>{
    const {id} = useParams();
    const placeOrder = ()=>{
        window.aptrinsic("track","placed",{"placed":"yes"});
    }
    return(
        <>
            <h2>This is Single Product - {id} </h2>
            <button onClick={placeOrder}>Place Order</button>
        </>
    )
}

export default SingleProduct;