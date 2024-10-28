import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";

const OurAdministrative = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get("https://amina-azif.az/api/v1/administrative");
    setData(res.data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="about-us">
      <div className="tittle-icra">
        <h3 style={{ color: "#CCB892" }}>İnzibati İşlər</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="normalBox">
              {data &&
                data.map((item) => (
                  <div className="peopleBox">
                    <div className="frontTextBox">
                      <span>{item.position}</span>
                      <p>{item.title}</p>
                    </div>
                    <img src={item.image} alt="" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAdministrative;
