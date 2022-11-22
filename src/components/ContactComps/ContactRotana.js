import React from "react";
import "./ContactRotana.css";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
const ContactRotana = () => {
  return (
    <>
      <div className="contact-rotana">
        <div className="contact-rotana-text">
          <h2>Contact Rotana Star Rent a Car</h2>
          <p>
            Rotana Star is a leading luxury and exotic car rental in the UAE.
            With our professional services, transparency, and wide range of
            cars, we can bet you that, with no compromise on quality, you will
            not find a better price at any other Dubai car rental agency.
          </p>
          <p>
            We also assure an easy and stress-free car booking process. All you
            need to do is select the car you want from the website, add it to
            your cart, fill in the form, proceed with the payment, and your
            booking is confirmed. If you have any questions or would like to
            change the booking time, we are always here to help you.
          </p>
          <p>
            There are more than 500 car rental companies in the UAE, so why
            chose Rotana Star?
          </p>
          <p>
            1-The best cost-quality ratio in the UAE. We have only premium-class
            cars, that range from sports, exotic, luxury, and SUVs. All cars are
            purchased directly from famous and trusted dealers and are less than
            3 years old.
          </p>
          <p>
            2-Full transparency and no hidden cost. With Rotana Star, you pay
            only for what is written in the contract.
          </p>
          <p>
            3-Competitive prices. We want you to enjoy your driving experience
            to the fullest, so we make sure that all our cars are at the best
            price.
          </p>
          <p>
            4-Choose what you want. We don’t promise something we don’t have
            just to lure you to rent from us. From a wide range of Lamborghini,
            Ferrari, Rolls Royce, Audi, Range Rover, and other luxury cars, we
            provide only quality service to our valued clients.
          </p>
          <p>
            5-We have services that make us different in the market, including
            chauffeur service for a more relaxing experience, and free pickup
            and delivery of the car in any Emirate.
          </p>
          <p>
            6-Your safety is guaranteed as all cars are inspected regularly to
            provide ultimate safety and comfort.
          </p>
          <p>
            Our client’s satisfaction is our priority. If you have any
            questions, suggestions, or inquiries, feel free to contact us via
            WhatsApp, or simply fill in the form and one of our representatives
            will contact you as soon as possible.
          </p>
          <div className="contact-rotana-text-row">
            <div className="contact-rotana-text-row-icon">
              <BsFillCalendarDayFill />
              Available 24/7
            </div>
            <div className="contact-rotana-text-row-icon">
              <AiOutlinePhone />
              +971504947393
            </div>
          </div>
          <div className="contact-rotana-text-row">
            <MdLocationOn />
            Al Barsha Next to Mall of the Emirates, Dubai, UAE
          </div>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="+971" />
<textarea name="" id="" ></textarea>
<button type="submit">Send Now</button>
          </form>
        </div>
        <div className="contact-rotana-backgronud">

        </div>
      </div>
    </>
  );
};

export default ContactRotana;
