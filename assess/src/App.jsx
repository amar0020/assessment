import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Post } from './assets/Post'
import { LeftBox } from './assets/LeftBox'
import { RightBox } from './assets/RightBox'
function App() {
  const allData = useRef([])
  const [postData,setPostData] = useState([])
  const text = useRef("")

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((r)=>r.json()).then((r)=>{
      console.log(r)
      allData.current = r
      setPostData(allData.current)
    })
  },[])

  const handleChange = (e)=>{
    text.current =  e.target.value
  }

  const handleSearch = ()=>{
    if(!text) return
    const newPostData = allData.current.filter((e)=>{
      const Ititle = e.title.split(" ")
      if(Ititle.includes(text.current)) return e
    })
    console.log(newPostData)
    setPostData(newPostData)

  }

  return (
    <div className="App">
      <div style={{display:"flex",width:"300px",justifyContent:"center"}}>
        <div style={{width:"150px",height:"30px"}}>
          <input onChange={(e)=>handleChange(e)} type="text" />
        </div>
      
        <button style={{border:"1px solid blue",marginLeft:"30px"}} onClick={handleSearch}>Search</button>
      </div>
      <div style={{marginTop:"20px"}}>
        {postData.map((e,i)=><Post key={i} ele={e}></Post>)}
      </div>
    </div>
  )
}

// 2nd question:
// function App() {

//   const product = [

//     {id: 1, name: "Product-1", price:100,count:0},
    
//     {id: 2, name: "Product-2", price:200,count:0},
    
//     {id: 3, name: "Product-3", price:300,count:0}
    
//     ]
//     const [cartProduct,setCartProduct] = useState([])

//     const handleClick = (id,value)=>{
//      const newCartProduct= product.folter
//     }


//   return (
//     <div className="App">
//       <LeftBox onclick={handleClick} products={product}></LeftBox>
//       <RightBox products={cartProduct}></RightBox>
//     </div>
//   )
// }

// export default App
