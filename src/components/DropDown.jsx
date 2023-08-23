import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
const DropDown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [response, setResponse] = useState("");
    console.log(isOpen)

    return (
        <div className={`w-full my-5 border-[2px] ${(response === "Choose")? "border-red-600" : "border-gray-300"}  rounded-lg bg-white flex-col`}>
            <div className="flex-col justify-start p-6">
                <p className="text-2xl font-Roboto">{props.data.question}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

            </div>
            <div className=" relative flex flex-col items-center w-80 h-auto rounded-lg p-6 mb-3">
                <button className=" p-4 w-72 bg-white flex items-center justify-between font-Roboto   text-2xl opacity-50 rounded-md tracking-wider border-2  active:bg-gray-300 duration-300 border-gray-700" onClick={() => setIsOpen(!isOpen)}>{response != "" ? response : "Choose"} <AiFillCaretDown className="h-5" /> </button>

                {
                    isOpen && (
                        <div className=" absolute bg-white   w-72 border-2  border-gray-700 border-opacity-50 rounded-lg duration-300" onClick={() => setIsOpen(!isOpen)}>
                            <div className="flex flex-col ">
                                <h3 className="font-Roboto p-4 text-2xl opacity-50 cursor-pointer hover:bg-blue-100 mt-3" onClick={() => setResponse("Choose")}>Choose</h3>

                            </div>
                            <div className="w-full h-[0.5px] bg-gray-300 my-5"></div>
                            {
                                props.data.options.map((item, idx) => (
                                    <h3 className="font-Roboto p-4 text-2xl cursor-pointer hover:bg-gray-100 " key={idx} onClick={() => setResponse(item)}>{item}</h3>
                                ))
                            }

                        </div>
                    )
                }
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

export default DropDown;