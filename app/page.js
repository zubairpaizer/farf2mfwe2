import mainHeaderIcon from "../public/images/icons/icon-fruit.svg";
import dangerWarm from "../public/images/warm-success.png";
import successWarm from "../public/images/warm-danger.png";
import innerChart from "../public/images/inner-chart.png";
import Link from "next/link";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="main">
      <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
           <span>Food Farm</span>
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
              <div className="ct-inner-card">
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
              <div className="ct-inner-card">
                <div className="inner-tabs-header">
                  <div className="tab-item active">Stake</div>
                  <div className="tab-item">Unstake</div>
                  <div className="tab-item">My Rewards</div>
                </div>
                <div className="inner-tabs-content">
                  <div className="tab-pane">
                    <div>
                      <from>
                        <input class="searchbar" placeholder="Search Pools" type="search" />
                      </from>
                      <div className="balance-bar">
                        <p className="balance">
                          Balance: <span>123.456 Velar <span>•</span></span>
                        </p>
                        <div className="use-max">USE MAX</div>
                      </div>
                    </div>
                    <div className="full-white-bar">
                      <span>You will receive</span>
                      <span>120 Velar</span>
                    </div>
                    <div className="text-end">
                      <div class="btn-default d-inline-flex">Stake Vekar</div> 
                    </div>
                    <div className="full-bars">
                      <div className="bar bg-800">
                        <span>Staking Details</span>
                      </div>
                      <div className="bar bg-900">
                        <span>Staked</span>
                        <span>$150</span>
                      </div>
                      <div className="bar bg-900">
                        <span>Pool share</span>
                        <span>0.25%</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                <span>100,000 Velar/day</span>
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
      {/* <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
           <span>Food Farm</span>
          </div>
          <div className="btn-default btn-lg">Connect Wallet</div>
        </div>
        <div className="box-body">
          <from>
            <input className="searchbar" type="search" placeholder="Search Pools" />
          </from>
          <Link href={'/'} className="d-block decoration-none">
            <div className="table">
              <div className="table-header">
                <div className="gold-block flex-1">
                  <span>Pools</span>
                </div>
                <div className="gold-block">
                  <span>Swap Markets: </span>
                  <span>Bitcoin</span>
                </div>
                <div className="gold-block">
                  <span>UTC </span>
                  <span>18:45:12</span>
                </div>
              </div>
              <div className="table-body">
                <div className="table-col">
                  <div className="col-header">
                    <span>Token pair</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>7d Change</span>
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={successWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={successWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>TVL</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Volume 24h</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Fees 24h</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Fees 7d</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>APR</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={'/'} className="d-block decoration-none">
            <div className="table">
              <div className="table-header">
                <div className="gold-block flex-1">
                  <span>Farm</span>
                </div>
                <div className="gold-block">
                  <span>Swap Markets: </span>
                  <span>Bitcoin</span>
                </div>
                <div className="gold-block">
                  <span>UTC </span>
                  <span>18:45:12</span>
                </div>
              </div>
              <div className="table-body">
                <div className="table-col">
                  <div className="col-header">
                    <span>Token pair</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                  <div className="col-cell text-gold">
                    <span>STX / xUSD</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>7d Change</span>
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={successWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={successWarm.src} alt="" />
                  </div>
                  <div className="col-cell">
                    <img className="w-100" src={dangerWarm.src} alt="" />
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>TVL</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                  <div className="col-cell text-white">
                    <span>$62,321,567</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Volume 24h</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Fees 24h</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>Fees 7d</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>$396.39k</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>$396.39k</span>
                  </div>
                </div>
                <div className="table-col">
                  <div className="col-header">
                    <span>APR</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-negative">
                    <span>10.24%</span>
                  </div>
                  <div className="col-cell text-positive">
                    <span>10.24%</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="table">
            <div className="table-header">
              <div className="gold-block flex-1">
                <span>Latest and Breaking news about memecoins</span>
              </div>
              <div className="gold-block">
                <span>Swap Markets: </span>
                <span>Bitcoin</span>
              </div>
              <div className="gold-block">
                <span>UTC </span>
                <span>18:45:12</span>
              </div>
            </div>
            <div className="news">
              <div className="time">
                <span>18:45</span>
              </div>
              <div className="text flex-1">
                <span>Bitcoin climbs the chart and makes its way up $1Tri Market cap</span>
              </div>
            </div>
          </div>
        </div>
      </article> */}
    </main>
  );
}
