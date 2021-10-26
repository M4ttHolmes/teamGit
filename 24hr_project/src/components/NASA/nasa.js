import React, {useState, useEffect} from "react";
import Radium from "radium"

const styles = {
    border: {
        margin: "auto",
        width: "40%",
        border: "2px solid darkblue",
        marginBottom: "100px",
        paddingBottom: "50px"
    },
}


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
          .catch(err => console.log(err))
      }, [])


    return(
        <div style={styles.border} className="main">
            <div className="mainDiv" style={{textAlign: "center"}}>
                <h1>Your Current Location:</h1>
                <h4>Latitude: {props.lat}</h4>
                <h4>Longitude: {props.long}</h4>
                <img style={{width: "80%"}} src={img} />
            </div>  
        </div>
    )
     
}

export default Radium(Nasa);