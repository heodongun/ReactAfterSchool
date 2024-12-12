import { useState } from 'react'

function counter() {
    const [count, setCount] = useState(0)
  
    return (
     <div>
      <h1>counter</h1>
      <h2>{count}번 클릭했음</h2>
      <button onClick={()=>{setCount(count+1)}}>증가</button>
      <button onClick={()=>{setCount(count-1)}}>감소</button>
      <button onClick={()=>{setCount(0)}}>리셋</button>
     </div>
    )
  }
  
  export default counter
  