'use client'
import mainHeaderIcon from "../../public/images/icons/icon-fruit.svg";
import leftArrowIcon from "../../public/images/icons/icon-left-arrow.svg";
import dropdownIcon from "../../public/images/icons/icon-dd.svg";
import walletLeather from "../../public/images/icons/icon-leather-wallet.png";
import walletXverse from "../../public/images/icons/icon-xverse-wallet.png";
import walletAsigna from "../../public/images/icons/icon-asigna-wallet.png";
import innerChart from "../../public/images/inner-chart.png";
import { PoolTabsCard } from "../components/PoolTabsCard";
import { Dropdown } from "@/components/Dropdown";
import { useState } from "react";
import Link from "next/link";

export default function Pool() {
  const [ showWallet, setShowWallet ] = useState(false);
  const [ selected, setSelected ] = useState({ name: 'Total Volume Locked', value: 'tvl' });
  const options  = [
    { name: 'Total Volume Locked', value: 'tvl' },
    { name: 'Price change', value: 'pc' },
    { name: 'Volume', value: 'volume' },
  ];

  return (
    <main className="main">
      <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
           <span>Pool</span>
          </div>
          <div onClick={() => setShowWallet(!showWallet)} className="btn-default btn-lg">Connect Wallet</div>
        </div>
        <div className="box-body">
          <div className="ct-card">
            <div className="ct-card-header">
              <div class="gold-block flex-1">
                <Link href={'/'} className="btn-back">
                  <img className="icon" src={leftArrowIcon.src} alt="" />
                </Link>
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
                <Dropdown 
                  onSelect={(val) => setSelected(val)}
                  selected={selected}
                  options={options} />
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
          <div className="basic-details pool-basic-details">
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

      <div className={(showWallet ? 'show ' : '') + "modal modal-sm modal-connect-wallet"}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Connect Wallet</h5>
              <button onClick={() => setShowWallet(!showWallet)} type="button" class="btn-close">
                X
              </button>
            </div>
            <div class="modal-body">
              <div className="wallet-list">
                <div onClick={() => setShowWallet(!showWallet)} className="item">
                  <img className="icon" src={walletLeather.src} alt="" />
                  <span>Leather Wallet</span>
                </div>
                <div onClick={() => setShowWallet(!showWallet)} className="item">
                  <img className="icon" src={walletXverse.src} alt="" />
                  <span>Xverse</span>
                </div>
                <div onClick={() => setShowWallet(!showWallet)} className="item">
                  <img className="icon" src={walletAsigna.src} alt="" />
                  <span>Asigna</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={(showWallet ? 'show ' : '') + "modal-backdrop"}></div>

    </main>
  );
}
