import React, { useContext } from "react";
import './Main.css'
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Fermion</p>
                <img id="proc" src={assets.microprocessor} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greed">
                            <p> <img id="atom" src={assets.quantum_icon} alt="" /></p>
                            <p><span>Hello,Dev</span></p>
                            <p>Fermion AI: Intelligence Redefined.</p>
                        </div>
                        <div className="cards" >
                            <div className="card" id="card1" >
                                <p>Meet Fermion, my groundbreaking AI model developed using Gemini AI's advanced algorithms and cutting-edge technology.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>




                            <div className="card" id="card2">
                                <p>Gemini AI: Harnessing advanced algorithms for data analysis, trend prediction, and optimized decision-making.</p>




                                <img src={assets.bulb_icon} alt="" />
                            </div>



                            <div className="card" id="card3">
                                <p>Explore the fundamentals of AI and machine learning. Learn how algorithms can transform data into insights.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>



                            <div className="card" id="card4">
                                <p>Dive into the world of AI programming. Develop and code advanced AI models to solve complex problems.</p>
                                <img src={assets.code_icon} alt="" />


                            </div>
                        </div>


                    </>
                    : <div className="result">

                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />

                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>

                    </div>
                }

                <div className="main-bottom">

                    <div className="searchbox">
                        {/* <img  id="chato" src={assets.quantum_icon} alt="" /> */}

                        <input placeholder="Enter your Propmt here" onChange={(e) => setInput(e.target.value)} value={input} type="text" />
                        <div className="icons">
                            <img id="gal" src={assets.gallery_icon} alt="" />
                            <img id="mic" src={assets.mic_icon} alt="" />
                            {input ?
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">All &#169;copy rights reserved.  <br />DEV-<a href="https://www.linkedin.com/in/ahmed-pasha070/?originalSubdomain=in">AHMED RAISI</a></p>
                </div>

            </div>
        </div>
    )
}
export default Main