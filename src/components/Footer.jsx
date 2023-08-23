import React from "react";

const Footer = () => {

    return (
        <div className="w-full my-5   flex-col">
            <div className="w-full flex justify-between items-center">
                <div>
                    <button className=" py-3 px-6 bg-form-top hover:bg-opacity-90 rounded-lg text-2xl font-Roboto text-white">Submit</button>
                </div>

                <div className="flex justify-between items-center ">
                    
                        <div className=" bg-color1 w-[300px] h-3 rounded-xl ">
                            <div style={{ width: `100%` }} className=" h-4 rounded-xl bg-green-600"></div>
                        </div>
                    
                    <p className="ml-2 text-2xl font-Roboto">Page 1 of 1</p>
                </div>

                <p className="ml-2 text-2xl font-Roboto text-form-top cursor-pointer">Clear form</p>
            </div>

            <div className="my-6">
                <p className="text-lg font-Roboto opacity-90">Never submit passwords through Google Forms.</p>
            </div>

            <div className="my-6 flex justify-center items-center">
                <p className="text-lg font-Roboto opacity-90">This content is neither created nor endosed by Google. <span className="underline">Report Abuse</span> - <span className="underline">Terms of Service</span> - <span className="underline">Privacy Policy</span>. </p>
            </div>
            
            <div className="my-6 flex justify-center items-center cursor-pointer">
                <p className="text-4xl font-Roboto opacity-50 "><span className=" font-semibold">Google</span> Forms</p>
            </div>
        </div>
    )
}

export default Footer;