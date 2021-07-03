import React from 'react'
import Data from '../images/Data.jpg'
import ReactTypingEffect from 'react-typing-effect';


const Main = () => {
    return (
            <div className='container-fluid home'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-7 m-auto'>
                            <ReactTypingEffect 
                                            text={["Xpress is creating polymorphic Quantum proof cyber protection - Today!"]}
                                            typingDelay={1000}
                                            eraseDelay={10000}
                                            className='job-title'
                                        />
                              
                               </div>
                          <div className='col-md-5 img-div'>
                              <img src={Data} alt='' className='img-fluid' />
                          </div>

                          
                      </div>
                </div>
            </div>
    )
}

export default Main;

