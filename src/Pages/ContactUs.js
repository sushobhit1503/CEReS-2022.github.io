import React from "react"
import Contact from "../Assets/Contact.png"
import Bar from "../Components/Bar"
import BottomCard from "../Components/BottomCard"
import ACM from "../Assets/acm.png"
import IEEE from "../Assets/ieee.png"
import PHOENIX from "../Assets/phoenix.png"
import CSA from "../Assets/csa.png"
import { Input } from "reactstrap"

class ContactUs extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }} >
                            KNOW ABOUT ORGANIZERS
                        </div>
                        <div style={{ color: "var(--yellow-color)", width: "400px", textAlign: "center", fontWeight: "600" }}>
                            Lorem Ipsum
                        </div>
                    </div>
                    <div>
                        <img src={Contact} style={{ width: "500px" }} alt="CERES" />
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    OUR ORGANIZERS
                </div>
                <Bar />
                <div style={{ margin: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <BottomCard width="250px" height="250px">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={ACM} style={{ width: "200px", height: "200px", alignItems: "center", margin: "10px 0px 0px 0px" }} />
                        </div>
                        <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "800", color: "var(--blue-color)" }}>
                            ACM - BITS HYDERABAD
                        </div>
                    </BottomCard>
                    <BottomCard width="250px" height="250px">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={CSA} style={{ width: "200px", height: "200px", alignItems: "center", margin: "10px 0px 0px 0px" }} />
                        </div>
                        <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "800", color: "var(--blue-color)" }}>
                            COMPUTER ASSOCIATION
                        </div>
                    </BottomCard>
                    <BottomCard width="250px" height="250px">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={IEEE} style={{ width: "200px", height: "200px", alignItems: "center", margin: "10px 0px 0px 0px" }} />
                        </div>
                        <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "800", color: "var(--blue-color)" }}>
                            IEEE - BITS HYDERABAD
                        </div>
                    </BottomCard>
                    <BottomCard width="250px" height="250px">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={PHOENIX} style={{ width: "200px", height: "200px", alignItems: "center", margin: "10px 0px 0px 0px" }} />
                        </div>
                        <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "800", color: "var(--blue-color)" }}>
                            ELECTRONICS ASSOCIATION
                        </div>
                    </BottomCard>
                </div>
                <div style={{ marginTop: "100px" }}></div>
                <div style={{ color: "var(--blue-color)", textAlign: "center", fontSize: "32px", fontWeight: "900" }}>
                    HAVE ANY QUERY?
                </div>
                <Bar />
                <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin: "30px 0px 30px 0px", padding: "10px", width: "80%", borderRadius: "10px", alignSelf: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input placeholder="FULL NAME" style={{ width: "47%" }} type="text" />
                        <Input placeholder="EMAIL ID" style={{ width: "47%" }} type="email" />
                    </div>
                    <div style={{ marginTop: "20px" }}></div>
                    <Input rows="8" placeholder="MESSAGE" type="textarea" />
                    <div style={{ marginTop: "20px" }}></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button style={{ border: "none", outline: "none", backgroundColor: "var(--blue-color)", padding: "10px", width: "max-content", borderRadius: "10px", color: "white", fontWeight: "600", alignSelf: "center" }}>
                            SUBMIT QUERY
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs