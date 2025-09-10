import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import { useNavigate } from "react-router-dom";

function Certificate() {
    const navigate=useNavigate()
    const page=(id)=>{
      if(id==1){
        navigate('/CertificatePage')

      }
else{
   navigate('/Resume')
}
    }
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    }
  ];
  return (
    <div
      name="Certificate"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Achivements</h1>
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[100px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
            
          
              <div className=" px-6 py-5 space-x-2 justify-around">
                {id==1?   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 mx-20  rounded vv" onClick={()=>{page(id)}}>
                 <span style={{color:"black"}}>Certificate</span>
                </button>:   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 mx-20  rounded vv" onClick={()=>{page(id)}}>
                   <span style={{color:"black"}}>Resume</span>
                </button>}
           
               
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
