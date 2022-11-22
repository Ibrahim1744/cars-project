import React from "react";
import "./FaqAccordions.css";
import AccordionSummary from "@mui/material/AccordionSummary";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FaqAccordions = () => {
  return (
    <>
      <div className="faq-accordions container">
        <div className="left-faq">
          <p>
            In Rotana Star Rent a Car, we receive a lot of questions about
            renting a car in Dubai and the UAE. We gathered the most popular
            ones to make the car rental process smooth and stress-free.
          </p>
          <h2>Documents</h2>
          <div className="accordions">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHAT DOCUMENTS ARE REQUIRED TO RENT A CAR IN THE UAE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography >
                    The list of documents depends on your country of origin and
                  whether you are a UAE resident or tourist. For UAE residents,
                  the process is simple and fast as we only require 4 documents:
                  copies of passport, residential visa, Emirates ID, and a valid
                  UAE Driving License. For Tourists, the documents differ a
                  little and include a passport, visa with entry stamp, a valid
                  home country driving license, and an international driving
                  permit or international driving license. However, if you hold
                  GCC, US, UK, or Canada passports, as well as some other
                  countries’ passports, you can drive with your home country’s
                  license. To know if you are eligible to rent a car in Dubai,
                  please ensure that your driving license is valid for driving
                  in the UAE.
                
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHAT TYPE OF A DRIVING LICENSE DO I NEED TO RENT A CAR IN THE
                  UAE?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  f you are looking to rent a car in Dubai or any other Emirate,
                  you will be asked to provide a valid UAE driving license or an
                  international driving license depending on if you are a
                  resident or a visitor. If your driving license is from the
                  following countries, you are lucky, as it is valid in the UAE.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHAT DOCUMENTS ARE REQUIRED TO RENT A CAR IN THE UAE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The list of documents depends on your country of origin and
                  whether you are a UAE resident or tourist. For UAE residents,
                  the process is simple and fast as we only require 4 documents:
                  copies of passport, residential visa, Emirates ID, and a valid
                  UAE Driving License. For Tourists, the documents differ a
                  little and include a passport, visa with entry stamp, a valid
                  home country driving license, and an international driving
                  permit or international driving license. However, if you hold
                  GCC, US, UK, or Canada passports, as well as some other
                  countries’ passports, you can drive with your home country’s
                  license. To know if you are eligible to rent a car in Dubai,
                  please ensure that your driving license is valid for driving
                  in the UAE.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <h2>Additional Costs</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHAT IS EXCLUDED FROM THE CAR RENTAL PRICE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Some things are excluded from the car rental price, for
                  example, a deposit that is blocked by Rotana Star and is
                  refundable after the car is returned and all fines paid. Also,
                  fuel, car parking, and Salik (road tolls) are not included in
                  the price.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHY DO I NEED TO PAY A DEPOSIT TO RENT A CAR?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In the UAE, unlike in some other countries, traffic fines are
                  generated several days after the incident or reported by RTA.
                  That is why the deposit is insurance for the company so that
                  they don’t lose money during the rental period. The deposit
                  depends on the type of the car; for example, for Lamborghini,
                  Rolls Royce, or Ferrari, it will be higher than for other
                  cars. The deposit is blocked on your credit card and will be
                  fully or partially refunded after 21 days when the rental
                  agreement is completed. The amount will depend on the paid
                  fines, speed tickets, or other deductibles, including late car
                  return, damages, exceeding mileage, and Salik.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>IS IT CHEAPER TO RENT OR BUY A CAR?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Not only visitors but also residents prefer to rent a car
                  rather than buy it. Renting saves you bucks as we cover
                  maintenance expenditures. Also, if you want to try different
                  models or car types, you can easily do it with Rotana Star.
                  Fast, easy, and hustle-free.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>WHAT IS SALIK AND HOW DOES IT WORK?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Salik is Dubai’s road electronic free flow toll system that
                  works without toll booths and allows drivers smooth and
                  continuous driving. Every car has a red sticker on the
                  windshield, so a fee of AED 5 will be deducted from the
                  prepaid toll account whenever you pass through Salik. In
                  Rotana Star, all the records are done through the RTA Salik
                  system and are billed when the car is returned.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  WHAT HAPPENS IF I ACCIDENTALLY MAKE A TRAFFIC VIOLATION?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In such a dynamic city like Dubai, fines happen all the time.
                  Exceeding the speed limit is one of the most popular fines, as
                  speed cameras monitor the majority of roads in Dubai, and it’s
                  easy to Overspeed when you enjoy smooth dring on Dubai roads.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <h2>Features Included</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>WHAT FEATURES DO RENTAL CARS INCLUDE?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In the UAE, all rental cars come with an AC and radio, while
                  the newer models also have a USB music player or mobile
                  charging port, making the driving experience even more
                  convenient. Of course, every car model is different and has
                  its own features and specifications, like a touch screen or a
                  push-button ignition. So, before renting a car, make sure that
                  the chosen car has everything you have been looking for.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>DO YOU PROVIDE A CAR DELIVERY SERVICE?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. At Rotana Star, we are happy to spare you from the hustle
                  of coming to pick up or drop off your car, so no matter where,
                  airport, hotel, or house, your car will be delivered to your
                  doorstep free of charge.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <h2>Insurance</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>CAN SOMEONE ELSE DRIVE THE RENTED CAR?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  NO, only the registered driver whose documents were submitted
                  to the car rental company can drive a car. In case there are 2
                  drivers, both of them should submit the required documents.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  IS SMOKING PERMITTED IN THE RENTED CARS?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, due to our Policy, smoking is not allowed in any of our
                  cars
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>WHAT ARE THE PARKING RULES IN THE UAE?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In the majority of shopping malls, parking is free for a
                  particular period of time, and after that, there is an hourly
                  payment. Also, in Dubai, there are many roadsides, underground
                  and open-space parking that are constructed for the drivers’
                  convenience. Always remember to pay for your RTA parking via
                  paid parking machines or SMS to 7275 with your car plate and
                  parking zone number; otherwise, fines will accrue.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <h2>Why Rotana Star ?
</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>WHY SHOULD I CHOOSE ROTANA STAR RENT A CAR?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                There are more than 500 car rental companies in the UAE, and quite often, they do not deliver what they promise. Unlike others, Rotana Star is the company where customer satisfaction is our main priority.

With a huge fleet of fully checked and fully vetted cars, we give a chance to make every customer’s dream come true. With the best prices on the market, we will help you live your dream. We have a wide range of vehicles for all budgets, so you can choose the car that will be delivered to your doorstep. No hustle, no pitfalls, or hidden prices.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="right-faq">
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
          <div className="card-faq">
            <h3>Best Audi Models to Enjoy Luxury Rides in Dubai</h3>
            <p>Best Audi Models to Enjoy Luxury Rides in Dubai Getting behind the wheels of Audi and experiencing the luxury feels is the dream of many.</p>
            <span>Read More ..</span>
            <div className="faq-card-date">
            <span>August 2, 2022 </span>
            <span> No Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordions;
