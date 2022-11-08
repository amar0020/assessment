export const RightBox = ({products})=>{

    const count = 0
    return <div style={{width:"300px", height:"400px", border:"5px solid gray"}}>
    <h1>Cart</h1>
    {products.length===0 ? "No item added to cart" :products.map((e)=>{
        return (
            <div style={{width:"100%",height:"40px",display:"flex",justifyContent:"space-evenly"}}>
                <p><b>{e.name}</b></p>
                <p><b>{e.price}</b></p>
                    <button style={{background:"blue.100"}}>+</button>
                    <p style={{marginTop:"8px"}}>{count}</p>
                    <button style={{background:"blue.100"}}>-</button>
            </div>
        )
    })}
</div>
}