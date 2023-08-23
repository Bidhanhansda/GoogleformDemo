import React, { useContext } from "react";
import { AppContext } from "../context/appContext"
import { BsCloudCheck } from "react-icons/bs";

const Task = () => {

    const { data } = useContext(AppContext)
    return (
        <div className="w-full my-5 border-[2px] border-gray-300 rounded-lg bg-white ">
            <div className="w-full  border-t-[15px] border-form-top rounded-t-lg ">
            </div>

            <div className=" p-7 flex-col justify-start  ">
                <h2 className="text-5xl font-Roboto">{data.form.formHeading}</h2>
            </div>

            <div className="w-full h-[0.5px] bg-gray-300"></div>

            <div className="  flex-col justify-between  p-6 ">
                <div className=" lg:flex flex-col">
                    <div className="flex">
                        <p className="  text-2xl font-Roboto font-semibold text-gray-600">bidhanhansda1997@gmail.com </p>
                        <button className=" text-blue-500 text-2xl font-Roboto mx-2" >Switch account</button>
                    </div>
                    <div className="flex  items-start my-3">
                        <BsCloudCheck className="text-gray-600 text-3xl font-bold mr-2" />
                        <p className="text-gray-600 text-lg font-Roboto">Draft saved</p>
                    </div>
                </div>
                <p className=" text-xl font-Roboto text-gray-600">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
                
            </div>
            <div className="w-full h-[0.5px] bg-gray-300"></div>

            <p className="text-red-500 p-6 text-xl font-Roboto"> *Indicates required question</p>


        </div>
    )
}

export default Task;