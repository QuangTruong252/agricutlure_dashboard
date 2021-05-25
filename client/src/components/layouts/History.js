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
                style={{ display: props.history.isHumidity ? "none" : "revert" }}
                className="td-info"
              >
                <div className="tr-info">
                  <p>{general.data.humidity.value}</p>
                </div>
              </td>
              <td
                style={{ display: props.history.isO2 ? "none" : "revert" }}
                className="td-info"
              >
                <div className="tr-info">
                  <p>{general.data.o2.value}</p>
                </div>
              </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      <div className="history">
        <div className="history-head-flex">
          <h3>History</h3>
          <button>Reset</button>
        </div>
        <div className="table-responsive">
          <table className="table-header">
            <tbody>
              <tr>
                <td className="td-head">
                  <div className="tr-head"><p>Date</p></div>
                </td>
                <td className="td-head">
                  <div className="tr-head"><p>Time</p></div>
                </td>

                <td
                  style={{
                    display: props.history.isTemperature ? "none" : "revert",
                  }}
                  className="td-head"
                >
                  <div className="tr-head">
                    <p>Temperature</p>
                  </div>
                </td>
                <td
                  style={{ display: props.history.isHumidity ? "none" : "revert" }}
                  className="td-head"
                >
                  <div className="tr-head">
                    <p>Humidity</p>
                  </div>
                </td>
                <td
                  style={{ display: props.history.isO2 ? "none" : "revert" }}
                  className="td-head"
                >
                  <div className="tr-head">
                    <p>O2</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="scroll-table">
            <table>
              <tbody></tbody>
              {body}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
