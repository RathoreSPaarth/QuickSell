import React, { useState } from 'react';
import Buy from './buy';
import Sell from './sell';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <div className="tabs">
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('buy')}>Buy</button>
        <button onClick={() => setActiveTab('sell')}>Sell</button>
      </div>

      <div className="tab-content">
        {activeTab === 'buy' && <Buy />}
        {activeTab === 'sell' && <Sell />}
      </div>
    </div>
  );
};

export default Tabs;
