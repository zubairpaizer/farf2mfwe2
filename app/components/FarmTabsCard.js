'use client'
import rightArrow from "../../public/images/icons/icon-right-arrow.svg";
import { useState } from "react";

const FarmTabs = [
    { name: 'Stack', value: 'stack' },
    { name: 'Unstack', value: 'unstack' },
    { name: 'Rewards', value: 'rewards' },
  ]

export const FarmTabsCard = (props) => {
    const [settings, setSettings] = useState({ tab: 'stack' });

    return (
      <>
        <div className="inner-tabs-header">
            {FarmTabs.map((t, index) => {
                return <div key={index} onClick={() => setSettings({ ...settings, tab: t.value })} className={"tab-item" + (settings.tab == t.value ? ' active' : '')}>{t.name}</div>
            })}
        </div>
        <div className="inner-tabs-content">
            {settings.tab === 'stack' ? (
              <div className="tab-pane">
                <div>
                  <from>
                    <input class="field" placeholder="Enter Sushi Amount" type="text" />
                  </from>
                  <div className="balance-bar">
                    <p className="balance">
                      Balance: <span>123.456 Sushi <span>•</span></span>
                    </p>
                    <div className="use-max">USE MAX</div>
                  </div>
                </div>
                <div className="full-white-bar">
                  <span>You will receive</span>
                  <span>120 Sushi</span>
                </div>
                <div className="text-end">
                  <div class="btn-default d-inline-flex">Stake Sushi</div> 
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
            ) : settings.tab === 'unstack' ? (
              <div className="tab-pane">
                <div>
                  <from>
                    <input class="field" placeholder="Enter Sushi Amount" type="text" />
                  </from>
                  <div className="balance-bar">
                    <p className="balance">
                      Balance: <span>556.456 Sushi <span>•</span></span>
                    </p>
                    <div className="use-max">USE MAX</div>
                  </div>
                </div>
                <div className="full-white-bar">
                  <span>You will receive</span>
                  <span>860 Sushi</span>
                </div>
                <div className="text-end">
                  <div class="btn-default d-inline-flex">Unstake Sushi</div> 
                </div>
                <div className="full-bars">
                  <div className="bar bg-800">
                    <span>Unstaking Details</span>
                  </div>
                  <div className="bar bg-900">
                    <span>Unstaked</span>
                    <span>$150</span>
                  </div>
                  <div className="bar bg-900">
                    <span>Pool share</span>
                    <span>0.25%</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="tab-pane">
                <div className="my-rewards">
                  <h4 className="key">My Rewards</h4>
                  <h6 className="value">$0.00</h6>
                </div>
                <from>
                  <select className="select-field">
                    <option>Select an Epoch</option>
                    <option>Epoch #12897</option>
                    <option>Epoch #14567</option>
                  </select>
                </from>
                <div className="full-bars">
                  <div className="bar bg-900">
                    <span>Reward Share %</span>
                    <span>$0</span>
                  </div>
                  <div className="bar bg-900">
                    <span>Block #145960</span>
                    <img src={rightArrow.src} alt="" />
                    <span>Block #145960</span>
                  </div>
                </div>
                <div className="full-white-bar">
                  <span>No Rewards to claim, Start Staking to earn Rewards</span>
                </div>
                <div className="text-end">
                  <div class="btn-default d-inline-flex">Claim Rewards</div> 
                </div>
              </div>
            )}
        </div>
      </>
    )
}