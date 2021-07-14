import History from '../components/layouts/History';
import Card from '../components/layouts/Card';
import CropRecomentation from '../components/layouts/CropRecomentation';



const Generality = () => {
    const historyStatus = {
      isTemperature: false,
      isHumidity: false,
      isPH: false,
    };
    return (
      <main>
      <div className="page-header">
        <div>
          <h1>Agriculture Generality Dashboard</h1>
          <small>Monitoring of environmental indicators in agriculture</small>    
        </div>
      </div>
      <Card/>
      <div className="detail-grid">
        <div className="analytics-card">
          <CropRecomentation/>
        </div>
        <History history={historyStatus}/>
      </div>
    </main>
    )
}

export default Generality
