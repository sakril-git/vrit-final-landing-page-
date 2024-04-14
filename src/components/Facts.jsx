import React from 'react';

const Facts = () => {
  return (
    <section className="facts">
        <div className="container mx-auto">
            <div className="fact-wrap grid grid-cols-4">
                <div className="fact-card">
                    <strong>200+</strong>
                    <small>Clients Worldwide</small>
                </div>
                <div className="fact-card">
                    <strong>100+</strong>
                    <small>Client Satisfaction</small>
                </div>
                <div className="fact-card">
                    <strong>99K+</strong>
                    <small>Numbers of Sales</small>
                </div>
                <div className="fact-card">
                    <strong>24H</strong>
                    <small>Team Support</small>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Facts;
