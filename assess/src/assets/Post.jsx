export const Post = ({ele})=>{
    return(
        <>
        <div style={{marginBottom:"10px",border:"2px solid blue"}}>
            <h3>
                {ele.title}
            </h3>
            <div>
                {ele.body}
            </div>
        </div>
        </>
    )
}