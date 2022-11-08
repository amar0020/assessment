export const LeftBox = ({products,onclick})=>{
    const  count = 0

    const handleClick1 =(id)=>{
        onclick(id,1)
    }
    const handleClick2 =(id)=>{
        onclick(id,-1)
    }
    return <>
        <div style={{width:"300px", height:"400px", border:"5px solid gray"}}>
            <h1>Products</h1>
            {products.map((e)=>{
                return (
                    <div style={{width:"100%",height:"40px",display:"flex",justifyContent:"space-evenly"}}>
                        <p><b>{e.name}</b></p>
                        <p><b>{e.price}</b></p>
                        <button style={{background:"blue.100"}} onClick={()=>handleClick1(e.id)}>+</button>
                        <p style={{marginTop:"8px"}}>{count}</p>
                        <button style={{background:"blue.100"}} onClick={()=>handleClick2(e.id)}>-</button>
                    </div>
                )
            })}
        </div>
    </>
}