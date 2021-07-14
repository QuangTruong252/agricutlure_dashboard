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
                  <p>{general.date.date}-{general.date.month}-{general.date.year}</p>
                </div>
              </td>
              <td className="td-info">
                <div className="tr-info">
                  <p>{general.time.hours}:{general.time.minutes}:{general.time.seconds}</p>
                </div>
              </td>
              <td
                style={{ display: props.history.isTemperature ? "none" : "revert" }}
                className="td-info"
              >
                <div className="tr-info">
                  <p>{parseFloat(general.data.temperature.value).toFixed(2)}</p>
                </div>
              </td>
              <td
                style={{ display: props.history.isHumidity ? "none" : "revert" }}
                className="td-info"
              >
                <div className="tr-info">
                  <p>{parseFloat(general.data.humidity.value).toFixed(2)}</p>
                </div>
              </td>
              <td
                style={{ display: props.history.isPH ? "none" : "revert" }}
                className="td-info"
              >
                <div className="tr-info">
                  <p>{parseFloat(general.data.ph.value).toFixed(2)}</p>
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
                  style={{ display: props.history.isPH ? "none" : "revert" }}
                  className="td-head"
                >
                  <div className="tr-head">
                    <p>ph</p>
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
