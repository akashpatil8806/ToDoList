import React, { useState } from 'react'

function ToDoList() {
    const [activity ,setActivity]=useState("")
    const [listdata,setlistData]=useState([]);

    function addActivity(){
        // this is cde work like asyncorinition
        // setlistData([...listdata,activity])
        // console.log(listdata);
        setlistData((listdata)=>{
            const update=[...listdata,activity]
            console.log(update);
            setActivity("")
            return update
        })
    }
        function removeActitvity(i)
        {
           const updateData=listdata.filter((Element,id)=>{
            return i!=id;

           })
           setlistData(updateData)

        }
        function removeall(){
            setlistData([])
        }

    
  return (
    < div className='container'>

    <div className='header' >ToDoList</div>
    <input type='text' placeholder='Add Activity' value={activity} on onChange={(e)=>
    setActivity(e.target.value)}/>
    { addActivity.length>= 0 && <button  className="btn"onClick={addActivity}>add </button>}
    <p className='List-heading'> Here is your list:{")"}</p>
    {listdata!=[] && listdata.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div className='list-data'>{data}</div>
                <div><button onClick={()=>removeActitvity(i)}>Remove</button></div>
                
            </p>
            </>
        )

    })}
    {listdata.length>=1 && <button onClick={removeall}>Remove all</button> }

    
    

    </div>
  )
}

export default ToDoList