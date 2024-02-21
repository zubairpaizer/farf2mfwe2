'use client'
import mainHeaderIcon from "../public/images/icons/icon-fruit.svg";
import walletLeather from "../public/images/icons/icon-leather-wallet.png";
import walletXverse from "../public/images/icons/icon-xverse-wallet.png";
import walletAsigna from "../public/images/icons/icon-asigna-wallet.png";
import dangerWarm from "../public/images/warm-success.png";
import successWarm from "../public/images/warm-danger.png";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const [ showWallet, setShowWallet ] = useState(false);

  return (
    <main className="main">
      <article className="box">
        <div className="box-header">
          <div className="title">
            <img className="icon" src={mainHeaderIcon.src} alt="" />
            <span>Food Farm</span>
          </div>
          <div onClick={() => setShowWallet(!showWallet)} className="btn-default btn-lg">Connect Wallet</div>
        </div>
        <div className="box-body">
          <div className="search-suggestions opened">
            <from>
              <input className="field searchbar" type="search" placeholder="Search Pools" />
            </from>
            <div className="suggestions">
              <div className="item">xUSD - STX</div>
              <div className="item">xUSD - STX</div>
            </div>
          </div>
          <Link href={'/pool'} className="d-block decoration-none">
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
          <Link href={'/farm'} className="d-block decoration-none">
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
      </article>

      <div className={(showWallet ? 'show ' : '') + "modal modal-sm modal-connect-wallet"} onClick={() => setShowWallet(!showWallet)}>
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
