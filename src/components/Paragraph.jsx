import React,{useState} from "react";


const paragraph =(props)=>{

    const [response, setResponse] = useState("")
    const [scrollbarHeight,setScrollbarHeight] = useState(40)
    console.log(response)
    function handleChange(e){
        setResponse(e.target.value);
        setScrollbarHeight(e.target.scrollHeight);
    }


    return (
        <div className="w-full my-5 border-[2px] border-gray-300 rounded-lg bg-white flex-col ">

            <div className="flex-col justify-start p-6">
                <p className="text-2xl font-Roboto">{props.data.question}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

            </div>
            <div className="flex items-center mb-4 p-6" >
            <textarea style={{height:`${scrollbarHeight}px`}} className={`w-full text-2xl   border-b-4  border-gray-300 focus:outline-none focus:border-form-top delay-300 ease-in  resize-none scrollbar`} type="text" placeholder="Your answer" required value={response} onChange={(e)=>{handleChange(e)}} />

            </div>
            

        </div>
    )
}

export default paragraph;