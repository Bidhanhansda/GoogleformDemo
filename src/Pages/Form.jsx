import React, { useContext } from "react";
import { AppContext } from "../context/appContext";
import Task from "../components/Task";
import Mcq from "../components/Mcq";
import CheckBox from "../components/CheckBox";
import ShortAnswer from "../components/ShortAnswer";
import Paragraph from "../components/Paragraph";
import DropDown from "../components/DropDown";
import FileUpload from "../components/FileUpload";
import LinearScale from "../components/LinearScale";
import MultichoiceGrid from "../components/MultichoiceGrid";
import TrickBoxGrid from "../components/TrickBoxGrid";
import Footer from "../components/Footer";

const Form = () => {

    const { data } = useContext(AppContext);

    return (
        <div className=" w-screen h-full bg-form-background flex justify-center items-center">
            <div className="xl:w-[60vw] w-[85vw] h-full   border-green-950 m-3">
                <Task />
               
                
                {
                    data.questions.map((item,idx) => 
                    
                    item.type === "mcq" ? 

                    <Mcq data = {item} key={idx}/>
                    
                    : item.type === "checkBox" ?

                     <CheckBox data = {item}  key={idx}/> 
                     
                     :item.type === "shortAnswer" ?
                     <ShortAnswer data = {item}  key={idx}/>


                     :item.type === "dropDown" ?
                     <DropDown data = {item}  key={idx}/>


                     :item.type === "paragraph" ?
                     <Paragraph data = {item}  key={idx}/>


                     :item.type === "fileUpload" ?
                     <FileUpload data = {item}  key={idx}/>


                     :item.type === "linearScale" ?
                     <LinearScale data = {item}  key={idx}/>


                     :item.type === "multiChoiceGrid" ?
                     <MultichoiceGrid data = {item}  key={idx}/>


                     :item.type === "trickBoxGrid" ?
                     <TrickBoxGrid data = {item}  key={idx}/>


                     : "invalid question")
                }

                <Footer/>
            </div>
        </div>
    )
}

export default Form;