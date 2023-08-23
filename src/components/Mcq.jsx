import React,{ useState} from "react";




const Mcq = (props) => {
    const [response,setResponse] = useState("")
    
    console.log(response);

    return (
        <div className="w-full my-5 border-[2px] border-gray-300 rounded-lg bg-white flex-col ">

        <div className="flex-col justify-start p-6">
        <p className="text-2xl font-Roboto">{props.data.question}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

        </div>

        {
            props.data.options.map((item,idx)=>
            <div className="flex items-center mb-4 p-6" key={idx}>
                <input  type="radio" name={props.data.question} value={item} className="w-8 h-8 border-2 focus:accent-form-top accent-form-top bg-gray-100  cursor-pointer " onClick={(e)=>setResponse(e.target.value)} required/>

                <label  className="ml-2 text-2xl font-Roboto text-gray-900 dark:text-black  ">{item}</label>

            </div>
            )
        }


        </div>
    )
}

export default Mcq;