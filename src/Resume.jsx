import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Resume.css"
function Resume() {
  const Navigate=useNavigate()
  return (
 <div className="p-4">
      <h1 className="text-xl font-bold mb-4">View PDF</h1>

      <iframe
        src="/assests/Vivek_Sharma_Resume_1Page (1).pdf"
        width="100%"
        height="700px"
        title="PDF Viewer"
      ></iframe>
      <button  style={{backgroundColor:"black",color:"white",width:"236px", marginTop:"9px", textAlign:"center"}} onClick={()=>{Navigate('/')}}>Go-Back</button>
    </div>
  );
}

export default Resume;


