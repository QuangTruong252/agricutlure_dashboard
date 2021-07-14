import React from "react";
import HighCharts from "../components/layouts/HighCharts";
import ph from "../assets/ph.png";
import temperature from "../assets/temperature.png";
import humidity from "../assets/humidity.png";

const Analytics = () => {
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
            <h3>Monitoring chart</h3>
            <small>Chart visualization environmental parameters</small>
          </div>
          <div className="analytics-chart-main">
            <HighCharts />
          </div>
        </div>
      </div>
      <div className="analytics-chart-head">
        <h3>Enviroment Information and Predict</h3>
        <small>
          Information about the influence of environmental factors on plants.
          Predict temperature, humidity and ph in the wrong month
        </small>
      </div>
      <div className="info-and-predict">
        <div className="general-info-grid">
          <div className="general-info">
            <h4>Temperature</h4>
            <p>
              Temperature has a significant impact on plant growth. It
              determines up to 70% of the cultivation's quality and output. The
              limiting temperature for the existence of organisms is between -35
              and +75 degrees Celsius. Most agricultural crops require a
              specific temperature range to grow and develop. than; can range
              between 15 and 40 degrees Celsius Growth will be drastically
              reduced at temperatures that are higher or lower than this range.
            </p>
          </div>
          <div className="general-info">
            <h4>Humidity</h4>
            <p>
              The plant requires adequate moisture in the soil. Make sure the
              soil's water holding capacity is always less than the plant's
              water absorption capacity, and that the soil has good water
              permeability so that moisture can be transferred to plants
              quickly. The appropriate soil moisture in the active root system
              of the soil layer varies depending on the physiological
              requirements of each crop. The maximum moisture content of the
              soil usually coincides with the upper limit of suitable moisture.
              It varies between 70 and 85 percent depending on the soil texture
              and mechanical composition. The appropriate lower limit is around
              60-70 percent of the maximum soil moisture content.
            </p>
          </div>
          <div className="general-info">
            <h4>ph</h4>
            <p>
              Plants require oxygen for respiration to release energy that
              powers all of the body's life processes. As a result, oxygen is a
              crucial element in plant growth and development. The concentration
              of oxygen in the atmosphere is around 21%, which is sufficient for
              the aboveground sections of the plant to thrive. If the
              concentration is surpassed, the growth of the aboveground
              components is impeded (Pfeffer, late 19th century). Plant roots
              require oxygen to thrive because they develop in anoxic soil,
              particularly in deep or saturated soil layers. Plant roots, on the
              other hand, are a significant center of living activity and so
              require appropriate oxygen.
            </p>
          </div>
        </div>
        <div className="predict">
          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>Temperature</span>
                  <small>Temperature forecast for next month</small>
                </div>
                <h2>35C</h2>
              </div>
              <div className="card-chart red">
                <img src={temperature} alt="temperature" />
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head ">
                  <span>Humidity</span>
                  <small>Forecast humidity next month</small>
                </div>
                <h2>20%</h2>
              </div>
              <div className="card-chart blue">
                <img src={humidity} alt="humidity" />
              </div>
            </div>
          </div>
          <div className="card-single">
            <div className="card-flex">
              <div className="card-info">
                <div className="card-head">
                  <span>pH</span>
                  <small>pH prediction next month</small>
                </div>
                <h2>
                  <span>7.6</span>
                </h2>
              </div>
              <div className="card-chart yellow">
                <img src={ph} alt="ph" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Analytics;
