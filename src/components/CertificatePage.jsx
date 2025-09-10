import React from 'react';
import "./Certificate.css"
import { useNavigate } from 'react-router-dom';
function CertificatePage() {
  let Navigate=useNavigate()
    const images = [
      { src: "/images/img1.jpg", title: "Java certificate" },
    { src: "/images/img2.jpg", title: "Java + Web Development Certificate" },
    { src: "/images/img3.jpg", title: "Java certificate" },
    { src: "/images/img4.jpg", title: "Java + Web Development Certificate" },
    { src: "/images/img5.jpg", title: "Java + Web Development Certificate" },
 
  ];

  return (
<div className="gallery-container">
      <h2>📜 My Certificates</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img src={img.src} alt={img.title}  />
       
          </div>
        ))}
      </div>
        <button  style={{backgroundColor:"black",color:"white",width:"236px", marginTop:"9px", textAlign:"center"}} onClick={()=>{Navigate('/')}}>Go-Back</button>
    </div>


  );
}

export default CertificatePage;
