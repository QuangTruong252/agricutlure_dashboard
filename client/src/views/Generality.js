import History from '../components/layouts/History';
import {Link} from 'react-router-dom';


const Generality = () => {
    const historyStatus = {
      isTemperature: false,
      isHumidity: false,
      isO2: false,
    };
    return (
      <main>
      <div className="page-header">
        <div>
          <h1>Agriculture Generality Dashboard</h1>
          <small>Monitoring of environmental indicators in agriculture</small>    
        </div>
      </div>
      <div className="cards">
        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>Temperature</span>
                <small>Average temperature of environmental</small>
              </div>
              <h2>35C</h2>
            </div>
            <div className="card-chart red">
              <span className="las la-temperature-low" />
            </div>
          </div>
        </div>
        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head ">
                <span>Soil Moisture</span>
                <small>Average soil moisture of environmental</small>
              </div>
              <h2>20%</h2>
            </div>
            <div className="card-chart blue">
              <span className="las la-tint" />
            </div>
          </div>
        </div>
        <div className="card-single">
          <div className="card-flex">
            <div className="card-info">
              <div className="card-head">
                <span>CO2 Concentration</span>
                <small>Average CO2 concentration of environmental</small>
              </div>
              <h2><span>40%</span></h2>
            </div>
            <div className="card-chart yellow">
              <span className="las la-leaf" />
            </div>
          </div>
        </div>
      </div>
      <div className="detail-grid">
        <div className="analytics-card">
          <div className="analytics-head">
            <h3>Analytics infomations</h3>
            <span className="las la-ellipsis-h" />
          </div>
          <div className="analytics-chart">
            <div className="chart-circle">
              <h1>75%</h1>
            </div>
            <div className="analytics-note">
              <span>The quality of the plant's habitat is okay</span>
            </div>
          </div>
          <div className="analytics-btn">
            <Link to="/analytics">
              <button>Detail Report</button>
            </Link>
          </div>
        </div>
        <History history={historyStatus}/>
      </div>
    </main>
    )
}

export default Generality
