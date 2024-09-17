import {useParams} from "react-router-dom";

const SingleProduct = ()=>{
    const {id} = useParams();
    const placeOrder = ()=>{
        window.aptrinsic("track","placed",{"placed":"yes"});
    }
    const sendFeedback = ()=>{
        window.aptrinsic('send', 'feedback', {'category' : 'Feature request', 'subject' : 'feedback feature API', 'description' : 'need opt-in and opt-out feature for product'});
    }
    return(
        <>
            <h2>This is Single Product - {id} </h2>
            <button onClick={placeOrder}>Place Order</button>
            <button onClick={sendFeedback}>Feedback</button>
        </>
    )
}

export default SingleProduct;