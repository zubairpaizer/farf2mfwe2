'use client'
import editIcon from "../../public/images/icons/icon-edit.svg";
import { useState } from "react";

const PoolTabs = [
    { name: 'AddLiquidity', value: 'addLiquidity' },
    { name: 'RemoveLiquidity', value: 'removeLiquidity' },
  ]

export const PoolTabsCard = (props) => {
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
                      <div className="btn-edit">
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
                  <div class="btn-default d-inline-flex">Add liquidity</div> 
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
                  <div class="btn-default d-inline-flex">Remove liquidity</div> 
                </div>
              </div>
            )}
        </div>
      </>
    )
}