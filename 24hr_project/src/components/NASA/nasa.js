import React, {useState, useEffect} from "react";


const Nasa = (props) => {
    const [url, setUrl] = useState("https://api.nasa.gov/planetary/earth/imagery");
    const [apiKey, setApiKey] = useState("nVUr5FoFmJLKClcdAVHLm0iBTADCgvGjJoX5nGCL")
    const [img, setImg] = useState("");


    useEffect(() => {

        fetch(`${url}?api_key=${apiKey}&lon=${props.long}&lat=${props.lat}`)
          .then(res => res.blob())
          .then((imgBlob) => 
            setImg(URL.createObjectURL(imgBlob))
          )
      }, [])


    return(
        <div className="main">
            <div className="mainDiv" style={{textAlign: "center"}}>
                <h1>Test Nasa</h1>
                <img style={{width: "500px"}} src={img} />
            </div>  
        </div>
    )
    
}

export default Nasa;