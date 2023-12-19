import { useState } from "react";

function Todo() {

    let [currentValues, updateValues] = useState("")
    
    let [allValues,updateAll]=useState([])

   
  
    function updateInput(event) {
        const res = event.target.value
        updateValues(res)
    }
    function submitData(event) {
    //    let res=[...allValues,currentValues]
    allValues.push(currentValues)
       updateAll(allValues)
       console.log(allValues)
       updateValues("")
    }
  
    return (
        <>
            <div className="todo">
                <h1>TodoApp</h1>
                <div className="test">
                    <input type="text" className="form-control  w-25" placeholder="Enter Note" value={currentValues} onChange={updateInput} />
                    <button type="button" className="btn btn-primary " onClick={submitData}>Submit</button>
                </div> <br></br>

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">S.NO.</th>
      <th scope="col">Todo</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
   {
    allValues.map((item,index)=>{
        return(
            <tr>
                <td>{index}</td>
                <td>{item}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        )
    })
   }
  </tbody>
</table>

            </div>
        </>
    )





}

export default Todo;