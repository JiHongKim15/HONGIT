import './App.css';
import './Button.scss';
// import $ from 'jquery';

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="mainLogo">
        HONGIT
      </div>
      <div className="address">
        서울특별시 영등포구 도림천로 11길 26-8 103호
      </div>
      <div classsName="name-number">
        주인장 김지홍 0.7202.2282 <br />
        예약관리 장은지 0.9666.2863
      </div>

      <div className="wrap">
        <button class="btn draw-border">
          Reservation
        </button>
        <button class="btn draw-border">
          Confirm
        </button>

        <Footer/>
      </div>

     
    </div>
  );
}

export default App;
