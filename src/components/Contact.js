import React from 'react'
import styled from 'styled-components'
import { GoLocation } from 'react-icons/go'

const Contact = () => {
    return (
        <div>
            <Container>
                <div className='container-fluid' id='contactme'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 reach-out'>
                                <h2>Reach Out</h2>
                                <p>Need our services? Reach out to us and let's work together.</p>
                                <p><a className="hero-link" href="#">Tel: (803) 553-9469</a></p>                            
                                <p className='location'> <GoLocation style={{color: 'orange'}}/> Lagos, Nigeria </p>
                            </div>
                            <div className='col-md-6'>
                                    <div className="form-group"> 
                                        <form>
                                            <input type="text" placeholder="name" name="name"/>
                                            <input type="text" placeholder="Email*" name="email"/>
                                            <textarea name="message" id="message" cols="30" rows="10" 
                                            placeholder="Message" required></textarea>
                                        </form>                            
                                        <button>Send</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;

const Container = styled.div`
    
    h1{
        position: absolute;
        width: 100vh;
        color: #ba873e;
        font-size: 35px;
        line-height: 1.2em;
        margin: 30px 0 10px 270px;
        font-weight: 400;
        margin-bottom: 400px;
    }

    .form-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding: 50px;
        padding-top: 70px;
        margin: 0 auto;
    }
    form div {
        position: relative;   
    }

    form input,form textarea {
        background: transparent;
        border: none;
        border-bottom: 2px solid #e2e2e2;
        color: black;
        width: 100%;
        font-size: 1.3em;
        padding: 8px;
        transition: all 0.5s;
    }
    form textarea{
        height: 200px;
    }
    

    button {
        position: absolute;
        bottom: 0;
        color: #5e5e5e;
        font-size: 12px;
        letter-spacing: 1px;
        margin: 10px 0 0 100px;
        font-weight: 900;
        font-size: 15px;
        background: #ba873e;
        border: none;
        padding: 0.37rem 3.7rem;
        color: #fff;
        border-radius: 3rem; 
        font-weight: 500;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
            background: #fc9e1b;
        }
    }

    @media only screen and (max-width: 414px) {
       button {
        text-align: center;
        }
      
`;