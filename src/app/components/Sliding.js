import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nike from "../../../public/Nike 1.png";
import Image from "next/image";
const Sliding = ({ leads }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {leads.map((item, index) => {
        return (
          <div
            key={index}
            className="border mx-1 grid gap-2 p-3 rounded-md shadow hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out hover:cursor-pointer">
            <div className="flex items-center gap-4">
              <Image
                src={nike}
                alt={"nike"}
                width={45}
                height={45}
                className="rounded-full border"
              />
              <div>
                <p className="text-black font-semibold">{item.name} </p>
                <p className="text-grey-400 text-sm"> {item.job} </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100  p-3 rounded h-fit">
              <div className="flex items-center gap-2">
                <div>{item.whatToDoIcon}</div>
                <p className="text-black"> {item.whatToDo} </p>
              </div>
              <p className="text-sm"> {item.whatToDoText} </p>
            </div>

            <p className="text-grey-400"> {item.nextStep} </p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Sliding;
