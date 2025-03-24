import { useState } from "react";

export const QrCode = () => {
    const[img, setImg] = useState("");
    const[loading,setLoding]=useState(false);
    const[qrdata, setQrdata]=useState("QR CODE GENERATOR")
    const[qrsize,setQrsize]=useState("150")
    async function generateQR(){
        setLoding(true);
        try{
            const url = `http://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)}&size=${qrsize}x${qrsize}`;
            setImg(url);
        }catch(error){
            console.error("Error generating QR Code",error);
        }finally{
            setLoding(false);
        }
        
    }
    function downlaodQR(){
        fetch(img)
        .then((response) => response.blob()).then((blob)=>{
            const link =document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="Qr.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error)=>{
            console.error("Error downloading QR Code", error);
        })
    }
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-code-image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR Code</label>
            <input type="text" id="dataInput"  placeholder="Enter data for QR Code" value={qrdata} onChange={(e)=>setQrdata(e.target.value)}/>
            <label htmlFor="sizeInput" className="input-label">Image Size (eg.150)</label>
            <input type="text" id="sizeInput"  placeholder="Enter Image Size" value={qrsize} onChange={(e)=>setQrsize(e.target.value)}/>
            <button className="generate-button" onClick={generateQR} disabled={loading}>Generate QR Code</button>
            <button className="download-button" onClick={downlaodQR}>Download QR Code</button>
        </div>
        <p className="footer">Designed By <a href="http://www.linkedin.com/in/ahmath-nafees-910023285" target="_blank">Ahmath Nafees</a></p>
    </div>
  );
};
