import React from 'react'

export default function Allcards({data}) {
    console.log(data);
  return (
    <div className="allCards" style={{display:"flex",flexWrap:"wrap",gap:"20px",justifyContent:"center" ,marginTop:"30px",paddingBottom:"70px"} }>
        {data.map((item)=>(<div key={item.id} className="card" style={{backgroundColor: '#35ffb3',width:"300px" ,borderRadius:"10px",padding:"20px",boxShadow:"0 0 10px #000"}}>
        <img src={item.thumbnail} alt="" style={{backgroundColor:"black"}}/>
        <h3>{item.title}</h3>
        <p>$ {item.price}</p>
        <p>{item.description}</p>
    </div>))}
    </div>
  )
}
