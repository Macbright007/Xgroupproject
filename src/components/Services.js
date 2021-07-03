import React from 'react'
import styled from 'styled-components'

const Services = () => {
    return (
        <div>
            <Container>
                <h1>Services</h1>
                <div className="row">
                    <section className="middle">
                    <div className="middle-grid white">
                    <h2>APPs for Everyone</h2>
                        <p>Xpress' data and breach protection technologies are all modular.  
                        We are creating the engine to allow s to offer low-cost protection that virtually 
                        everyone can afford to offer a series of additional Cyber protections for many devices.  Check back later.</p>
                    </div>
                    <div className="middle-grid white">
                    <h2>IP & Critical File Protection</h2>
                        <p>The Cyber Security Industry is highly competitive and Billions are spent each year, while the number of breaches and costs of each breach grows.  
                        Basically, too many have tens of millions invested in software and technology and they do not know where to turn and who to believe.  
                        Xpress is testing LOW COST software that will allow most to save IP and other Critical files without changing their core technologies.  
                        A series of Smart Add-ons to significantly increase your level of Cyber Protection arein development.</p>
                    </div>
                    <div className="middle-grid white">
                    <h2>Small Businesses</h2>
                        <p>The most neglected and the most critical to the survival of our Western way of Life.  
                        Xpress will never forget your unique needs. The APPs and the IP & Critical File Protections will offer your business a level of protection, you have not been able to afford in the past.  
                        Xpress will be expanding our offerings specifically for YOUR business needs.  </p>
                    </div>
                </section>
                </div>
            </Container>
        </div>
    )
}

export default Services;

const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    padding: 30px; 
    
   
    h1{
        position: absolute;
        width: 100vh;
        color: #ba873e;
        font-size: 35px;
        line-height: 1.2em;
        margin: 20px 0 10px 150px;
        font-weight: 400;
        margin-bottom: 500px;
        text-align: center;
    }
    h2{
        color: #eeece8;
    }
    
    p{
        color: whitesmoke;
    }
    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 50px;
        padding-top: 100px;
        margin: 0 auto;
        width: 100%;
    }
    
`;