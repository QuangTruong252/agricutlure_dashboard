import { useEffect, useContext, Fragment } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const Card = () => {
  const {
    generalState: { averages },
    getGenerals,
  } = useContext(GeneralContext);

  useEffect(() => getGenerals, []);

  const options = [
    {
      title: "Temperature",
      des: "Average temperature of environmental",
      value: averages.aveTemperature,
      icon: "las la-temperature-low",
      colorIcon: "#a86221"
    },
    {
      title: "Humidity",
      des: "Average Humidity of environmental",
      value: averages.aveHumidity,
      icon: "las la-tint",
      colorIcon: "#284c99"
    },
    {
      title: "pH Concentration",
      des: "Average pH Concentration of environmental",
      value: averages.aveph,
      icon: "las la-leaf",
      colorIcon: "#0ba82d"
    },
  ];
  return (
    <div className="cards">
      {options.map((option) => {
        return (
          <Fragment>
            <div className="card-single">
              <div className="card-flex">
                <div className="card-info">
                  <div className="card-head">
                    <span>{option.title}</span>
                    <small>{option.des}</small>
                  </div>
                  <h2>{parseFloat(option.value).toFixed(2)}</h2>
                </div>
                <div className="card-chart">
                  <span className={option.icon} style={{color: option.colorIcon}} />
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Card;
