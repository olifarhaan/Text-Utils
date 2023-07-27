import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    return (
        <>
            <div className="container my-5" id="about" style={myStyle}>
                <h2> Few Words About Us</h2>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Our Vision
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                At Text Utils, our vision is to empower users with a versatile and efficient text manipulation tool that simplifies the process of converting text while maintaining utmost accuracy and ease of use. We envision a world where individuals, students, professionals, and writers can effortlessly transform their texts into various formats, thereby enhancing their productivity and enabling seamless communication across platforms. Our aim is to become the go-to application for all text conversion needs, setting new standards for user convenience and reliability.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Our Mission
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Our mission at Text Utils is to provide a comprehensive and user-friendly platform that offers a diverse range of text conversion functionalities. We are committed to delivering exceptional results through cutting-edge technology and innovative algorithms, ensuring that users can swiftly convert text to uppercase, lowercase, capitalize text, and even invert text with just a few clicks. Our relentless focus on user feedback and continuous improvement drives us to stay ahead of the curve and consistently enhance our app's capabilities.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" style={myStyle}>
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Our Objectives
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>User-Centric Experience:</strong> Our primary objective is to prioritize user satisfaction by designing an intuitive and straightforward interface that ensures a seamless experience for users of all backgrounds and expertise levels. We aim to provide a clutter-free and responsive app that focuses on the core functionalities of text conversion.
                                <br />
                                <strong>Accuracy and Reliability:</strong> We are committed to maintaining the highest level of accuracy in text conversion processes. Our objective is to develop robust algorithms that deliver precise results, allowing users to trust Text ConvertMaster for error-free conversions.
                                <br />
                                <strong>Expand Functionality:</strong> As part of our future objectives, we plan to continually expand the range of text conversion features offered by the app. This includes exploring additional transformation options such as leetspeak, ROT13, and more, catering to a broader audience with diverse text manipulation needs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
