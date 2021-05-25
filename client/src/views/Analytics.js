import React from 'react'
import History from '../components/layouts/History'

const Analytics = () => {
  const historyStatus = {
    isTemperature: false,
    isHumidity: true,
    isO2: true,
  };
    return (
        <main>
        <div className="page-header">
          <div>
            <h1>Agriculture Analytics Dashboard</h1>
            <small>Monitoring of environmental indicators in agriculture</small>    
          </div>
        </div>
        <div className="detail-chard-grid">
          <div className="analytics-chart">
            <div className="analytics-chart-head">
              <h3>Temperature monitoring chart</h3>
              <small>Monitor the ambient temperature by cycle, shown in the chart below</small>
            </div>
            <div className="analytics-chart-main">
              <span className="las la-chart-area" />
            </div>
          </div>
          <History history={historyStatus}/>
        </div>
      </main>
    )
}

export default Analytics;
