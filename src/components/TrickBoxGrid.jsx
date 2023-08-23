import React,{useState} from "react";

const TrickBoxGrid = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const [response, setResponse] = useState("");
    

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    return (
        <div className={`w-full my-5 border-[2px] ${(response === "Choose") ? "border-red-600" : "border-gray-300"}  rounded-lg bg-white flex-col`}>
            <div className="flex-col justify-start p-6">
                <p className="text-2xl font-Roboto">{props.data.question}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

            </div>

        <div className="flex justify-center items-center p-5">

        
            <table className="table-auto  w-[100%]  ">
                <thead>
                    <tr>
                        <th className="w-[25%]"></th>
                        {
                            props.data.columns.map((item, idx) => (
                                <th key={idx} className="text-sm- md:text-2xl font-Roboto w-[255] p-5">{capitalizeFirstLetter(item)}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.rows.map((item, idx) => (
                            <tr className=" bg-gray-100 mb-3 border-b-4 border-white "  key={idx}>
                                <td className="text-sm md:text-2xl font-Roboto font-semibold p-5">{capitalizeFirstLetter(item)}</td>
                                <td className=" text-center">
                                
                                <input  type="checkbox" name={`${item} `} value={item} className="w-8 h-8 border-2 focus:accent-form-top accent-form-top bg-gray-100  cursor-pointer " onClick={(e)=>setResponse(e.target.value)} required/>
                                
                                </td>
                                <td className=" text-center">
                                
                                <input  type="checkbox" name={`${item} `}  value={item} className="w-8 h-8 border-2 focus:accent-form-top accent-form-top bg-gray-100  cursor-pointer " onClick={(e)=>setResponse(e.target.value)} required/>
                                
                                </td>
                                <td className=" text-center">
                                
                                <input  type="checkbox" name={`${item} `}  value={item} className="w-8 h-8 border-2 focus:accent-form-top accent-form-top bg-gray-100  cursor-pointer " onClick={(e)=>setResponse(e.target.value)} required/>
                                
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

</div>


            {
                (response === "Choose") && (
                    <div className=" flex p-6 mb-6  ">
                        <p className=" w-8 h-8 rounded-full text-center  text-red-600 mr-3 text-xl font-bold font-Roboto border-4 border-red-600 ">!</p>
                        <p className=" text-red-600 ml-3 text-lg font-Roboto ">This is a required question</p>
                    </div>
                )
            }


        </div>
    )
}

export default TrickBoxGrid;