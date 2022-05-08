import React, { useState } from "react";
import "../styles/AddCrop.css";

const AddCrop = () => {
  const [click, setClick] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(false);
  const [selectedCropImage, setSelectedCropImage] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="AddCropSection">
      <h1 className="AddCropHeading">
        {selected ? "Selected Crop" : "ADD A CROP"}
      </h1>
      {click && (
        <>
          <h2>Suggested Crops</h2>
          <div className="AddCropOptions">
            <div className="AddCropOptionContainer">
              <button
                className="AddCropOption"
                onClick={() => {
                  setSelectedCrop("Wheat");
                  setClick(false);
                  setSelectedCropImage(
                    "https://img.freepik.com/free-vector/realistic-wheat-composition_1284-22993.jpg?size=338&ext=jpg"
                  );
                  setSelected(true);
                }}
              >
                <img
                  src="https://img.freepik.com/free-vector/realistic-wheat-composition_1284-22993.jpg?size=338&ext=jpg"
                  alt=""
                />
              </button>
              Wheat
            </div>
            <div className="AddCropOptionContainer">
              <button
                className="AddCropOption"
                onClick={() => {
                  setSelectedCrop("Rice");
                  setClick(false);
                  setSelectedCropImage(
                    "https://img.freepik.com/free-vector/detailed-gopalkala-illustration_23-2149000063.jpg?size=338&ext=jpg"
                  );
                  setSelected(true);
                }}
              >
                <img
                  src="https://img.freepik.com/free-vector/detailed-gopalkala-illustration_23-2149000063.jpg?size=338&ext=jpg"
                  alt=""
                />
              </button>
              RICE
            </div>
            <div className="AddCropOptionContainer">
              <button
                className="AddCropOption"
                onClick={() => {
                  setSelectedCrop("Pulses");
                  setClick(false);
                  setSelectedCropImage(
                    "https://img.freepik.com/free-photo/legumes-beans-assortment-healthy-vegan-protein-food_114579-62653.jpg?size=626&ext=jpg"
                  );
                  setSelected(true);
                }}
              >
                <img
                  src="https://img.freepik.com/free-photo/legumes-beans-assortment-healthy-vegan-protein-food_114579-62653.jpg?size=626&ext=jpg"
                  alt=""
                />
              </button>
              Pulses
            </div>
            <div className="AddCropOptionContainer">
              <button
                className="AddCropOption"
                onClick={() => {
                  setSelectedCrop("Coffee");
                  setClick(false);
                  setSelectedCropImage(
                    "https://img.freepik.com/free-vector/coffee-beans-realistic-set_1284-19869.jpg?size=338&ext=jpg"
                  );
                  setSelected(true);
                }}
              >
                <img
                  src="https://img.freepik.com/free-vector/coffee-beans-realistic-set_1284-19869.jpg?size=338&ext=jpg"
                  alt=""
                />
              </button>
              Coffee
            </div>
          </div>
        </>
      )}
      {!selected && (
        <button
          className="AddCropButton"
          onClick={() => {
            setClick(!click);
          }}
        >
          +
        </button>
      )}
      {selected && (
        <div
          style={{ width: "100px", margin: "auto" }}
          className="AddCropOptionContainer"
        >
          <button style={{ cursor: "default" }} className="AddCropOption">
            <img src={selectedCropImage} alt="" />
          </button>
          <h4>{selectedCrop}</h4>
        </div>
      )}
      <h6 className="AddCropText">
        With this you could get an estimate about your crop yield , best
        practices to follow best fertilisers to buy and get a dynmic analysis of
        the crop health along with its diaonosis
      </h6>
    </div>
  );
};

export default AddCrop;
