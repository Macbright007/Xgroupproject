import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <div>
            <Container>
                <h1>About Us</h1>
                <em>Our Founders Technical Experience</em>
                <p>Floyd I. Harper III co-founder of  Xpress Software, created Xpress Group, Inc. to acquire Xpress Software, Inc. in 1998,  
                He has served as a  member on 36 Federal, State and Industry Committees dealing with the transfer of personal information and  data security for over 21 years.  Federal Committees included the IRS,  IRS ETA  (Electronic Taxation Administration), US Department of  Treasury, CID (Criminal Investigation Division of Treasury), SSA (Social  Security Administration) and INS (US Immigration and Naturalization  Service) as well as South Carolina State Department of Revenue and 6  other States. He was a founding member of many of these committees,
                including the committees that created e-file and the Internet.</p>

                <h3>The Company </h3>
                <h4>Xpress Software was established in 1981, and was the first firm to perfect "form based input" income tax preparation software on the new PC format.  Xpress was involved with the creation of the new e-file process, and became a major e-file processor.  Xpress also acted as the Industry partner for other forms of filing income tax and other tax documents.  This included FAXION, 1040PC, PIPER, Telefile, and Magnetic Media Filing.  </h4>
                <h5>As an outgrowth of that business , Xpress developed proprietary technology to secure their customer's data.  Xpress processed tens of millions of e-file returns, hundreds of millions of transactions and $5 Billion in e-commerce.  Xpress also detected (our 'Edits') identified and helped successfully prosecute over 200 'bad actors - hackers, tax filing fraud rings and more.  We are all told this is "impossible" today, but it was MUCH harder to accomplish this beginning in 1985 .... 
                <br />Xpress is considered an expert in taxation,  technology and especially cyber and data protection.  Xpress analyzed all major tax law changes from 1986 to 2000.  Mr. Harper was invited to make 80+ conference presentations.  Xpress offered hundreds of Professional seminars and was one of the first Firms to be allowed to offer Automatic CPE (Continuing Professional Education) for all attendees.</h5>

                <h3 className="xfam">The Xpress Family</h3>
                <h4 className="xfamm">A most difficult for most to understand.  We all understand the concept of family, many of us have challenging family dynamics at times, but we NEVER associate the concept of family with the Business that employees us or that provides us goods of services.  At Xpress June Conference with our clients  at Jacksonville Beach Florida, June 2002, Xpress Clients coined the name the Xpress Family - to include all our clients and Xpress employees and valued partners. Why?  Because Xpress involved our clients at every step.  We listened and spent large portions of our limited resources to create marketing materials, an e-commerce platform, secure communications and most important - due diligence, SSN and fraud detection and more to PROTECT their small businesses!  In the short-term it cost Xpress hundres of thousands of dollars but it was the  right thing to do.  Without the help of our clients and the EXPERTS in the few systems that proved to be Absolutely secure, Xpress would not have accomplished what we did and we would not be here today, preparing to re-launch software that will allow our Client to begin to WIN the Cyber War that is raging around us.
                <br /> <br /> Xpress, if we are able to successfully re-launch in the coming months, will always be here for our clients.  You may actually tire of our constant requests for suggestions, for beta sites and more.  Mr. Harper, will focus on helping each of our clients achieve their goals while protecting their families, their loved ones and their friends.</h4>
            </Container>
            
        </div>
    )
}

export default About;

const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        width: 100vh;
        color: #ba873e;
        font-size: 35px;
        line-height: 1.2em;
        margin: 30px 0 10px 300px;
        font-weight: 400;
    }

    em{
        position: absolute;
        bottom: 0;
        color: hsl(255, 11%, 22%);
        font-size: 20px;
        line-height: 1.2em;
        letter-spacing: 3px;
        margin: 20px 0 10px 400px;
        margin-bottom: -23px;
        font-weight: 300;
        color: whitesmoke;
    }
    p{
        position: absolute;
        bottom: 0;
        color: #5e5e5e;
        font-size: 18px;
        line-height: 1.7em;
        margin: 10px 150px 10px 190px;
        margin-bottom: -250px;
        font-weight: 500;  
    }

    h3{
        position: absolute;
        bottom: 0;
        color: whitesmoke;
        font-size: 18px;
        line-height: 1.2em;
        letter-spacing: 3px;
        margin: 10px 0 10px 500px;
        margin-bottom: -290px;
        font-weight: 900;
    }

    h4{
        position: absolute;
        bottom: 0;
        color: #5e5e5e;
        font-size: 18px;
        line-height: 1.7em;
        margin: 10px 150px 10px 190px;
        margin-bottom: -450px;
        font-weight: 500;  
    }
    
    h5 {
        position: absolute;
        bottom: 0;
        color: #5e5e5e;
        font-size: 18px;
        line-height: 1.7em;
        margin: 5px 100px 5px 90px;
        margin-bottom: -750px;
        font-weight: 500; 
    }

    .xfam {
        position: absolute;
        color: whitesmoke;
        font-size: 18px;
        line-height: 1.2em;
        letter-spacing: 3px;
        margin: 10px 0 10px 500px;
        margin-bottom: -900px;
        font-weight: 900;
    }
    .xfamm{
        position: absolute;
        bottom: 0;
        color: #5e5e5e;
        font-size: 18px;
        line-height: 1.7em;
        margin: 10px 150px 10px 190px;
        margin-bottom: -74em;
        font-weight: 500;  
    }
`;
