import mainHeaderIcon from "../../public/images/icons/icon-fruit.svg";
import innerChart from "../../public/images/inner-chart.png";
import { FarmTabsCard } from "../components/FarmTabsCard";

export default function Farm() {
  return (
    <main className="main">
      <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
           <span>Farm</span>
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
              <div className="ct-inner-card w-40">
                <div className="inner-tabs-header">
                  <div className="tab-item dummy-item flex-1">Price change</div>
                  <div className="tab-item w-auto">1d</div>
                  <div className="tab-item w-auto active">7d</div>
                  <div className="tab-item w-auto">1M</div>
                  <div className="tab-item w-auto">6M</div>
                  <div className="tab-item w-auto">1Y</div>
                </div>
                <div className="inner-chart">
                  <img className="d-block w-100" src={innerChart.src} alt="" />
                </div>
              </div>
              <div className="ct-inner-card w-60">
                <FarmTabsCard />
              </div>
            </div>
          </div>
          <div className="basic-details">
            <div className="item">
              <div class="gold-block">
                <span>Current EPOCH</span>
              </div>  
              <div class="dark-block block-lg">
                <span>156 <span className="text-gold">•</span></span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Reward Balance</span>
              </div>  
              <div class="dark-block block-lg">
                <span>100,000 Sushi/day</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Next Epoch Starts in</span>
              </div>  
              <div class="dark-block block-lg">
                <span>12d 24h 34m 12s</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>Total staked</span>
              </div>  
              <div class="dark-block block-lg">
                <span>$23.56M</span>
              </div> 
            </div>
            <div className="item">
              <div class="gold-block">
                <span>24h Volume</span>
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
