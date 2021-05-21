import { useEffect, useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import spinner from "../../assets/spinner.svg";
const History = (props) => {
  const {
    generalState: { generals, isLoading },
    getGenerals,
  } = useContext(GeneralContext);

  useEffect(() => getGenerals, []);

  let body = null;

  if (isLoading) {
    body = <img src={spinner} alt="spinner" />;
  } else if (generals.length === 0) {
    body = <h1>Don't have data</h1>;
  } else {
    body = (
      <>
        {generals.map((general) => (
          <tr>
            <td className="td-info">
              <div className="tr-info">
                <p>{general.date}</p>
              </div>
            </td>
            <td className="td-info">
              <div className="tr-info">
                <p>{general.time}</p>
              </div>
            </td>
            <td
              style={{ display: props.history.isTemperature ? "none" : "revert" }}
              className="td-info"
            >
              <div className="tr-info">
                <p>{general.data.temperature.value}</p>
              </div>
            </td>
            <td
              style={{ display: props.history.isOil ? "none" : "revert" }}
              className="td-info"
            >
              <div className="tr-info">
                <p>{general.data.oil.value}</p>
              </div>
            </td>
            <td
              style={{ display: props.history.isCo2 ? "none" : "revert" }}
              className="td-info"
            >
              <div className="tr-info">
                <p>{general.data.co2.value}</p>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      <div classNameName="history">
        <div classNameName="history-head-flex">
          <h3>History</h3>
          {/* <a href="/generality/history">
            <small>
              See all the history
              <span classNameName="las la-arrow-right" />
            </small>
          </a> */}
        </div>
        <div classNameName="table-responsive">
          <table>
            <tbody>
              <tr>
                <td classNameName="td-head">
                  <div classNameName="tr-head"><p>Date</p></div>
                </td>
                <td classNameName="td-head">
                  <div classNameName="tr-head"><p>Time</p></div>
                </td>

                <td
                  style={{
                    display: props.history.isTemperature ? "none" : "revert",
                  }}
                  classNameName="td-head"
                >
                  <div classNameName="tr-head">
                    <p>Temperature</p>
                  </div>
                </td>
                <td
                  style={{ display: props.history.isOil ? "none" : "revert" }}
                  classNameName="td-head"
                >
                  <div classNameName="tr-head">
                    <p>Oil Moiture</p>
                  </div>
                </td>
                <td
                  style={{ display: props.history.isCo2 ? "none" : "revert" }}
                  classNameName="td-head"
                >
                  <div classNameName="tr-head">
                    <p>CO2 Connectration</p>
                  </div>
                </td>
              </tr>
              {body}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default History;
