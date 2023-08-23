import React,{useEffect, useState} from "react";
import Form from "./Pages/Form";
import { AppContext } from "./context/appContext";

function App() {

  const [data,setData] = useState({});
  const [loading, setLoading] = useState(true);

  let formData = {
    "_id" : 1,
    "form" : {
      "formHeading":"Assignment Task",

      "formContent":""
    },
    "questions":[
      {
        "type":"mcq",
        "question":"MCQ",
        "required": true,
        "options":[
          "option 1","option 2", "option 3"
        ]
      },
     
      {
        "type":"checkBox",
        "question":"Checkbox",
        "required": true,
        "options":[
          "option 1","option 2", "option 3"
        ]
      },
      {
        "type":"shortAnswer",
        "question":"Short Answer",
        "required": true,
        
      },
      {
        "type":"paragraph",
        "question":"ParaGraph",
        "required": true,
      },
      {
        "type": "dropDown",
        "question":"Drop down",
        "required": true,
        "options":[
          "option 1","option 2", "option 3"
        ]
      },
      {
        "type": "fileUpload",
        "heading": "File Upload",
        "required" : true,
      },
      {
        "type": "linearScale",
        "question": "Linear Scale",
        "required" : true,
        "fromRange": "Worst",
        "toRange":"Best",
        "range":5
      },
      {
        "type":"multiChoiceGrid",
        "question":"Multi choice Grid",
        "required":true,
        "columns":["column 1", "column 2", "column 3"],
        "rows":["row 1", "row 2", "row 3"],
      },
      {
        "type":"trickBoxGrid",
        "question":"Tick box Grid",
        "required":true,
        "columns":["column 1", "column 2", "column 3"],
        "rows":["row 1", "row 2", "row 3"],
      }
    ]

  }


  useEffect(()=>{
    setTimeout(() => {
      setData(formData);
      setLoading(false);
    }, 1000);
  },[])


  

  return (
    <>
      <AppContext.Provider value={{data}}>

      {loading ? <p>Loading...</p> : <Form />}

      </AppContext.Provider>
    </>
  )
}

export default App
