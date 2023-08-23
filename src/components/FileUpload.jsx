import React,{useState} from "react";
import { FiUpload } from "react-icons/fi";

const FileUpload = (props)=>{

    
    const [response, setResponse] = useState(false);
    const [doc, setDoc] = useState(null);
    

    function handleUpload(e){
        const file = e.target.files[0];
        setDoc(file.name);
        setResponse(false)
        
    }

    function clearFile(){
        setDoc(null);
        setResponse(!response)
    }

    return (
        <div className={`w-full my-5 border-[2px] ${(response )? "border-red-600" : "border-gray-300"}  rounded-lg bg-white flex-col`}>
            <div className="flex-col justify-start p-6">
                <p className="text-2xl font-Roboto">{props.data.heading}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

            </div>
            <div className="  flex flex-col items-start w-80 h-auto rounded-lg p-6 mb-3">
                <label htmlFor='file-upload' className={`p-3 w-42 flex items-center justify-between font-Roboto   text-xl ${doc != null ? "text-black" : "text-blue-600" }   rounded-md tracking-wider border-2    hover:border-blue-200  border-gray-700 border-opacity-50 cursor-pointer`}> 

                {
                    doc != null ? doc : <> <FiUpload className="h-6 mr-3 w-6" />  Add File</>
               

                }
                 {
                    doc != null ? <span className="text-2xl  text-black opacity-50 ml-3 cursor-pointer p-3" onClick={clearFile} >X</span> : <></>
                 }
                
                </label>

                <input type="file" id="file-upload" hidden required accept="application/pdf,application/vnd.ms-excel" onChange={handleUpload} />
            </div>
            {
                (response  ) && (
                    <div className=" flex p-6 mb-6  ">
                        <p className=" w-8 h-8 rounded-full text-center  text-red-600 mr-3 text-xl font-bold font-Roboto border-4 border-red-600 ">!</p>
                        <p className=" text-red-600 ml-3 text-lg font-Roboto ">This is a required question</p>
                    </div>
                )
            }


        </div>
    )
}

export default FileUpload;