import './App.css';
import './Button.scss';
import $ from 'jquery';

function App() {

  {
    $('.btn-6')
      .on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
      })
      .on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
        $(this).find('span').css({ top: relY, left: relX })
      });
    $('[href=#]').click(function () { return false });
  }


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
        <div className="btn-6">
          Reservation
        </div>
        <div>
          Confirm
        </div>
      </div>

      <hr />
      <div className="questions">
        문의사항 KaKaoTalk <a href="https://open.kakao.com/o/sceJXnGc">https://open.kakao.com/o/sceJXnGc</a>
      </div>
    </div>
  );
}

export default App;
