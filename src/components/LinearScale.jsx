import React, { useState } from "react";


const LinearScale = (props) => {


    const [response, setResponse] = useState("");
    let range = props.data.range;
    console.log(response)


    function getRange(range) {
        const elements = [];
        for (let i = 0; i < range; i++) {
            elements.push(
                <div key={i} className="flex flex-row md:flex-col lg:flex-col m-4">
                    <label className="m-3 text-2xl font-Roboto text-gray-900 dark:text-black  ">{i + 1}</label>
                    <input
                        type="radio"
                        name={`radioGroup-${i}`}
                        value={i + 1}
                        className="w-8 h-8 mt-3 border-2 focus:accent-form-top accent-form-top bg-gray-100 cursor-pointer"
                        onChange={(e) => setResponse(e.target.value)}
                    />
                </div>

            )

        }
        return elements;
    }


    return (
        <div className={`w-full my-5 border-[2px] ${(response === "Choose") ? "border-red-600" : "border-gray-300"}  rounded-lg bg-white flex-col`}>
            <div className="flex-col justify-start p-6">
                <p className="text-2xl font-Roboto">{props.data.question}<span className="text-red-600 ml-2">{props.data.required ? "*" : ""}</span></p>

            </div>


            <div className="flex flex-col md:flex-row lg:flex-row    justify-evenly p-5 mb-4">
                <div>
                    <p className=" block font-Roboto text-lg md:mt-20 ">{props.data.fromRange}</p>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-row justify-around">
                    {getRange(range)}
                </div>
                <div>
                    <p className=" block font-Roboto text-lg md:mt-20 ">{props.data.toRange}</p>
                </div>

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

export default LinearScale;