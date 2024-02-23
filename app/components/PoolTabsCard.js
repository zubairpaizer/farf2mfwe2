'use client'
import editIcon from "../../public/images/icons/icon-edit.svg";
import successIcon from "../../public/images/icons/icon-success.svg";
import { useState } from "react";

const PoolTabs = [
  { name: 'AddLiquidity', value: 'addLiquidity' },
  { name: 'RemoveLiquidity', value: 'removeLiquidity' },
]

export const PoolTabsCard = (props) => {
  const [ showTransaction, setShowTransaction ] = useState(false);
  const [ showEditSlippage, setShowEditSlippage ] = useState(false);
  const [settings, setSettings] = useState({ tab: 'addLiquidity' });

  return (
    <>
      <div className="inner-tabs-header">
        {PoolTabs.map((t, index) => {
            return <div key={index} onClick={() => setSettings({ ...settings, tab: t.value })} className={"tab-item justify-center" + (settings.tab == t.value ? ' active' : '')}>{t.name}</div>
        })}
      </div>
      <div className="inner-tabs-content">
        {settings.tab === 'addLiquidity' ? (
          <div className="tab-pane">
            <div>
              <label className="label">Deposit STX</label>
              <from>
                <input class="field" placeholder="Enter STX Amount" type="text" />
              </from>
              <div className="balance-bar">
                <p className="balance">
                  Balance: <span>123.456 STX <span>•</span></span>
                </p>
                <div className="use-max">USE MAX</div>
              </div>
            </div>
            <div>
              <label className="label">Deposit xUSD</label>
              <from>
                <input class="field" placeholder="Enter xUSD Amount" type="text" />
              </from>
              <div className="balance-bar">
                <p className="balance">
                  Balance: <span>123.456 xUSD <span>•</span></span>
                </p>
                <div className="use-max">USE MAX</div>
              </div>
            </div>
            <div className="full-bars">
              <div className="bar bg-900">
                <span>Slippage</span>
                <div className="d-flex items-center">
                  <span>04%</span>
                  <div className="btn-edit" onClick={() => setShowEditSlippage(!showEditSlippage)}>
                    <img className="icon" src={editIcon.src} alt="" />
                    <span>EDIT</span>
                  </div>
                </div>
              </div>
              <div className="bar bg-900">
                <span>LP Token Output</span>
                <span>130,232</span>
              </div>
            </div>
            <div className="text-end">
              <div class="btn-default d-inline-flex" onClick={() => setShowTransaction(!showTransaction)}>Add liquidity</div> 
            </div>
          </div>
        ) : (
          <div className="tab-pane">
            <div className="my-rewards">
              <h4 className="key">My Liquidity</h4>
              <h6 className="value">$120.23</h6>
            </div>
            <div>
              <label className="label">Enter a percentage</label>
              <from>
                <input class="field" placeholder="00%" type="text" />
              </from>
              <div className="balance-bar">
                <div className="use-max">Remove MAX</div>
              </div>
            </div>
            <div className="full-bars">
              <div className="bar bg-900">
                <span>STX Fees Earned</span>
                <span>12.34</span>
              </div>
              <div className="bar bg-900">
                <span>xUSD Fees Earned</span>
                <span>12.34</span>
              </div>
            </div>
            <div className="text-end">
              <div class="btn-default d-inline-flex" onClick={() => setShowTransaction(!showTransaction)}>Remove liquidity</div> 
            </div>
          </div>
        )}
      </div>

      {/* Transaction Modal */}
      <div className={(showTransaction ? 'show ' : '') + "modal modal-lg modal-transaction"}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Transaction in progress</h5>
              <button onClick={() => setShowTransaction(!showTransaction)} type="button" class="btn-close">
                X
              </button>
            </div>
            <div class="modal-body">
              <div className="icon-container">
                <div class="ring-loader">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                {/* <img className="icon" src={successIcon.src} alt="" /> */}
              </div>
              <h6 className="title">Verify your identity</h6>
              <p className="desc">Sign trx in you wallet. Transactions may take some time. You can close this window</p>
            </div>
          </div>
        </div>
      </div>

      <div className={(showTransaction ? 'show ' : '') + "modal-backdrop"}></div>

      {/* Slippage Modal */}
      <div className={(showEditSlippage ? 'show ' : '') + "modal modal-lg modal-slippage"}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Slippage</h5>
              <button onClick={() => setShowEditSlippage(!showEditSlippage)} type="button" class="btn-close">
                X
              </button>
            </div>
            <div class="modal-body">
              <div>
                <h6 className="title">Set Slippage</h6>
                <p className="desc">Your transaction will revert if the price changes unfavourably by this percentage.</p>
              </div>
              <input className="value" type="text" placeholder="0.5%" />
              <div class="slippage-percent">
                <div className="item">0.5%</div>
                <div className="item active">1%</div>
                <div className="item">2%</div>
                <div className="item">5%</div>
                <div className="item">10%</div>
              </div>
              <div className="btn-container">
                <div class="btn-default btn-lg" onClick={() => setShowEditSlippage(!showEditSlippage)}>Save Slippage</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={(showEditSlippage ? 'show ' : '') + "modal-backdrop"}></div>

    </>
  )
}