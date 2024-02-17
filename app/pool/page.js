import mainHeaderIcon from "../../public/images/icons/icon-fruit.svg";
import innerChart from "../../public/images/inner-chart.png";
import { PoolTabsCard } from "../components/PoolTabsCard";

export default function Farm() {
  return (
    <main className="main">
      <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
           <span>Pool</span>
          </div>
          <div className="btn-default btn-lg">Connect Wallet</div>
        </div>
        <div className="box-body">
          <div className="ct-card">
            <div className="ct-card-header">
              <div class="gold-block flex-1">
                <span>STX/xUSD</span>
              </div>
              <div class="gold-block">
                <span>Swap Markets:</span>
                <span>Liquidity Pool</span>
              </div>
              <div class="gold-block">
                <span>UTC</span>
                <span>18:45:12</span>
              </div>
            </div>
            <div className="ct-card-body">
              <div className="w-40 chart-with-dropdown">
                <from>
                  <select className="select-field">
                    <option>Total Volume Locked</option>
                    <option>Total Volume Locked</option>
                    <option>Total Volume Locked</option>
                  </select>
                </from>
                <div className="ct-inner-card flex-1">
                  <div className="inner-tabs-header">
                    <div className="tab-item justify-center">1d</div>
                    <div className="tab-item justify-center active">7d</div>
                    <div className="tab-item justify-center">1M</div>
                    <div className="tab-item justify-center">6M</div>
                    <div className="tab-item justify-center">1Y</div>
                  </div>
                  <div className="inner-chart">
                    <img className="d-block w-100" src={innerChart.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="ct-inner-card w-60">
                <PoolTabsCard />
              </div>
            </div>
          </div>
          <div className="basic-details">
            <div className="item">
              <div class="gold-block">
                <span>Liquidity</span>
              </div>  
              <div class="dark-block block-lg">
                <span>$46.45M</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Volume 24h</span>
              </div>  
              <div class="dark-block block-lg">
                <span>$1.3M</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Fees 24h</span>
              </div>  
              <div class="dark-block block-lg">
                <span>$46.23M</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Transactions 24h</span>
              </div>  
              <div class="dark-block block-lg">
                <span>124,456,964</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Total Volume</span>
              </div>  
              <div class="dark-block block-lg">
                <span>$23.56M</span>
              </div>
            </div>
          </div>
          <div className="full-bars">
            <div className="bar bg-800">
              <span>My position</span>
            </div>
            <div className="bar bg-900">
              <span>STX</span>
              <span>$150</span>
            </div>
            <div className="bar bg-900">
              <span>xUSD</span>
              <span>$120</span>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
