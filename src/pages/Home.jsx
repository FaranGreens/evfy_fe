import { useState } from "react";
import data from "../example-data.js";
import "../styles/Home.css";
import Accordion_FAQ from "../components/Accordion_FAQ.jsx";
import Semi_Collapsible from "../components/Semi_collapsible.jsx";
import Prod_cards from "../components/Prod_card.jsx";

// console.log(data);

const Home = () => {
  const [currImage, setCurrImage] = useState(data.images[0]);
  const [approvedLoan, setApprovedLoan] = useState(100000);
  const selectImage = (e) => {
    // console.log(e);
    setCurrImage(e);
  };
  const handleLoanChange = (event) => {
    // console.log(event.target.value);
    setApprovedLoan(event.target.value);
  };
  return (
    <div>
      {/* breadcrumbs */}

      {/* hero */}
      <section className="hero">
        <div className="vertical-image-slider">
          {data.images.map((e, i) => {
            return (
              <img
                src={e}
                key={i}
                height="120"
                className="slider-images"
                onClick={() => selectImage(e)}
              />
            );
          })}
        </div>
        <div className="image-window">
          <img
            src={currImage || data.images[0]}
            alt={data.images[0]}
            className="main-image"
          />
        </div>
        <div className="hero-details">
          <p className="details-brand-name">{data.make}</p>
          <h2 className="details-model-name">{data.model}</h2>
          <small className="small-text">6 Variants</small>
          <small className="small-text">5 Colors</small>
          <h3 className="details-price">Starting from Rs. {data.price}.00</h3>
          <h4 className="road-price">Check On Road Price</h4>
          <button className="request-call-button">Request a Call Back</button>
        </div>
      </section>

      {/* emi calculator */}
      <section className="emi-section">
        <article className="article-title">
          <span className="yellow-underline">{data.make.split(" ")[0]}</span>
          {" " + data.make.split(" ")[1] + " " + data.model} EMI Calculator
        </article>
        <article className="emi-calculator floated-right">
          <div className="justify-left">
            <select className="select-tag">
              <option>Select from Options</option>
              <option>ICICI</option>
              <option>HDFC</option>
            </select>
            <h1 className="emi-amount">EMI Rs. 15490</h1>
            <p className="sub-text">For 5 years @7% interest rate</p>
            <small className="sub-text">
              Please get in touch with us to know more.
            </small>
          </div>
          <div className="justify-right">
            <div>
              <label className="input-label-flex">
                <p className="sub-text">Loan Approved</p>
                <div><p className="sub-text-bold">Rs. {approvedLoan}</p></div>
              </label>
              <input
                type="range"
                min="0"
                max="1000000"
                step="100"
                className=" loan-input range-input"
                value={approvedLoan}
                onChange={(e) => handleLoanChange(e)}
              />
              <label className="input-label-flex">
                <p className="sub-text">Tenure(in years)</p>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="10"
                className="range-input"
              />
            </div>
          </div>
        </article>
      </section>

      {/* variants */}
      <section className="variant-section">
        <div className="article-title">
          <span className="yellow-underline">{data.make.split(" ")[0]}</span>
          {" " + data.make.split(" ")[1] + " " + data.model} Variants
        </div>
        <article className="variants-name-section floated-right">
          <p className="fuel-type article-title">
            <span className="yellow-underline">Petrol</span>
          </p>
          <table className="variants-table">
            <thead>
              <tr>
                <td className="sub-text">Variants</td>
                <td className="sub-text">Price</td>
                <td className="sub-text">Select</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>{data.model} 1.2 Sigma</p>
                  <span className="sub-text">
                    9 color, custom interior options
                  </span>
                </td>
                <td>
                  <span className="sub-text">Starts at</span> Rs. 7.47 lakhs
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>{data.model} 1.2 Delta</p>
                  <span className="sub-text">
                    9 color, custom interior options
                  </span>
                </td>
                <td>
                  <span className="sub-text">Starts at</span> Rs. 7.47 lakhs
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>{data.model} 1.2 Delta Plus</p>
                  <span className="sub-text">
                    9 color, custom interior options
                  </span>
                </td>
                <td>
                  <span className="sub-text">Starts at</span> Rs. 7.47 lakhs
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>{data.model} 1.2 Ultra</p>
                  <span className="sub-text">
                    9 color, custom interior options
                  </span>
                </td>
                <td>
                  <span className="sub-text">Starts at</span> Rs. 7.47 lakhs
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>{data.model} 1.2 Alpha</p>
                  <span className="sub-text">
                    9 color, custom interior options
                  </span>
                </td>
                <td>
                  <span className="sub-text">Starts at</span> Rs. 7.47 lakhs
                </td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
      {/* features section */}
      <section className="features-section">
        <article className="article-title">
          <span className="yellow-underline">{data.make.split(" ")[0]}</span>
          {" " + data.make.split(" ")[1] + " " + data.model} Features and Specs
        </article>
        <article className="floated-right features-container">
          <div className="feature-left-div">
            <select className="select-tag">
              <option>Select variant</option>
              <option>Delta</option>
              <option>Ultra</option>
            </select>
            <div className="features-column-container">
              <div className="features-column">
                <div>
                  <small className="sub-text">Capacity</small>
                  <p>{data.engine}cc</p>
                </div>
                <div>
                  <small className="sub-text">Mileage</small>
                  <p>{data.mileage} kmpl</p>
                </div>
                <div>
                  <small className="sub-text">Power</small>
                  <p>{data.bhp} bhp</p>
                </div>
                <div>
                  <small className="sub-text">L-W-H</small>
                  <p>3995/1765/1550</p>
                </div>
              </div>
              <div className="features-column">
                <div>
                  <small className="sub-text">Fuel</small>
                  <p>{data.fuel_type}</p>
                </div>
                <div>
                  <small className="sub-text">Torque</small>
                  <p>113.4 Nm</p>
                </div>
                <div>
                  <small className="sub-text">Gear</small>
                  <p>Automatic, Manual</p>
                </div>
                <div>
                  <small className="sub-text">Tank</small>
                  <p>300L</p>
                </div>
              </div>
            </div>
            <div className="btn-div">
              <button className="btn-dark">View All specs</button>
            </div>
          </div>
          <div className="feature-right-div">
            <div>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>Keyless Entry
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>Airbags
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>ABS
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>Rear Parking Sensors
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>Rear Parking Camera
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>USB Support
              </p>
              <p className="feature-points">
                <span>&#10003; &nbsp;</span>Bluetooth support
              </p>
            </div>
            <div className="btn-div">
              <button className="btn-dark">View All Features</button>
            </div>
          </div>
        </article>
      </section>

      {/* gallery section */}
      <section className="gallery">
        <article className="article-title gallery-title">
          <div>
            <span className="yellow-underline">{data.make.split(" ")[0]}</span>
            {" " + data.make.split(" ")[1] + " " + data.model} Gallery
          </div>
          <p className="sub-text">View All &nbsp; &gt;</p>
        </article>
        <div className="cards-container">
          <div className="gallery-card">
            <div className="gallery-img-container">
              <img
                src="https://stimg.cardekho.com/images/car-images/930x620/Maruti/FRONX/9243/1674108902046/222_arctic-white_b7b9ba.jpg"
                alt="image"
              />
            </div>
            <div className="card-text">
              <div className="circle-icon"></div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container">
              <img
                src="https://stimg.cardekho.com/images/car-images/930x620/Maruti/FRONX/9243/1674108902046/222_arctic-white_b7b9ba.jpg"
                alt="image"
              />
            </div>
            <div className="card-text">
              <div className="circle-icon"></div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className="gallery-card">
            <div className="gallery-img-container">
              <img
                src="https://stimg.cardekho.com/images/car-images/930x620/Maruti/FRONX/9243/1674108902046/222_arctic-white_b7b9ba.jpg"
                alt="image"
              />
            </div>
            <div className="card-text">
              <div className="circle-icon"></div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-arrow">
          <div className="navigation-arrow-left">&#60;</div>
          <div className="navigation-arrow-right">&#62;</div>
        </div>
      </section>

      {/* collapsible text  */}

      <section className="semi-collapsible-section">
        <article className="article-title">
          <div>
            <span className="yellow-underline">About</span>
            &nbsp;{data.model}
          </div>
        </article>
        <div className="semi-collapsible-container floated-right">
          <Semi_Collapsible />
        </div>
      </section>

      {/* accordion - faqs */}
      <section className="accordion-section">
        <article className="article-title">
          <div>
            <span className="yellow-underline">{data.model}</span> FAQS
          </div>
        </article>
        <div className="faqs-accordian-container floated-right">
          <Accordion_FAQ />
          <Accordion_FAQ />
          <Accordion_FAQ />
        </div>
      </section>

      {/* products cards section */}
      <section className="prod-cards-section">
        <article className="article-title gallery-title">
          <div>
            <span className="yellow-underline">Popular</span> {data.make} Models
          </div>
          <p className="sub-text">View All &nbsp; &gt;</p>
        </article>
        <div className="cards-grid">
          <Prod_cards
            brand={data.make} 
            model="Alto"
            price="Rs. 4.05 lakhs"
            img=""
          />
          <Prod_cards
            brand={data.make} 
            model="Swift"
            price="Rs. 7.05 lakhs"
            img=""
          />
          <Prod_cards
            brand={data.make}
            model="Brezza"
            price="Rs. 8.05 lakhs"
            img=""
          />
          <Prod_cards
            brand={data.make}
            model="Celerio"
            price="Rs. 12.05 lakhs"
            img=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
