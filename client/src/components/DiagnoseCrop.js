import React, { useState } from "react";
import "../styles/DiagnoseCrop.css";

const DiagnoseCrop = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [url, setUrl] = useState("");
  console.log(url);
  return (
    <div className="DiagnoseCropContainer">
      <h1 className="DiagnoseCropHeading">Diagnose Your Crop</h1>

      <div className="DiagnoseCropCardContainer">
        <div className="DiagnoseCropCard-1">
          Upload Photo of your plants
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
              setUrl(URL.createObjectURL(event.target.files[0]));
            }}
          />
        </div>
        <div className="DiagnoseCropCard-2">See Results</div>
        <div className="DiagnoseCropCard-3">
          Buy Pesticides and Insecticides
        </div>
      </div>
      {url && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "20px 0", color: "white" }}>Images of Crop</h2>
          <img alt="not found" width={"250px"} src={url} />
        </div>
      )}
    </div>
  );
};

export default DiagnoseCrop;
