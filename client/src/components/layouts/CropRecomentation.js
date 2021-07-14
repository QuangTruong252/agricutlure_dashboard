import { useEffect, useContext } from "react";
import { PredictContext } from "../../contexts/PredictContext";

const CropRecomentation = () => {

  const { predict, getPredict} = useContext(PredictContext);

  useEffect(() => getPredict, []);
  
  return (
    <>
      <div className="analytics-head">
        <h3>Crop Recomentation</h3>
        <span className="las la-ellipsis-h" />
      </div>
      <div className="analytics-chart">
        <div className="chart-circle">
          <h1>Rice</h1>
        </div>
        <div className="analytics-note">
          <span>
            The proposed crop is suitable for environmental conditions
          </span>
        </div>
      </div>
    </>
  );
};

export default CropRecomentation;
