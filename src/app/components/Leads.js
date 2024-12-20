"use client";
import React, { useState } from "react";
import {
  FiMessageCircle,
  FiMail,
  FiPhone,
  FiCalendar,
  FiVideo,
  FiBookOpen,
} from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Table1 from "./Table1";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import nike from "../../../public/Nike 1.png";
import Image from "next/image";
import Sliding from "./Sliding";

const Leads = () => {
  const leads = [
    {
      name: "Jane Rayes",
      job: "COO",
      whatToDo: "Engage",
      whatToDoIcon: <FiMessageCircle />,
      whatToDoText:
        "Rayes may be interested in upgrading the espresso machine for her shop.",
      nextStep: "Expand business",
      topic: "Improving cost per cup",
      statusReason: "New",
      createdAt: "2024-12-18T10:00:00Z",
      img: "rayesImg",
      about:
        "Jane Rayes is a strategic thinker and a seasoned professional with extensive experience in managing coffee-related businesses. She has a keen eye for innovation and cost-saving measures, making her an ideal candidate for upgrades and business expansion opportunities. She is well-known for her ability to make informed decisions quickly.",
      whyIPickedThisLead:
        "Jane Rayes is a good decision maker and has shown significant interest in improving business operations, particularly in areas that can reduce costs and enhance productivity.",
    },
    {
      name: "Mark Hensley",
      job: "Director",
      whatToDo: "Follow up",
      whatToDoIcon: <FiMail />,
      whatToDoText: "Hensley is evaluating options for new roasting equipment.",
      nextStep: "Schedule demo",
      topic: "Enhancing production efficiency",
      statusReason: "New",
      createdAt: "2024-12-17T09:30:00Z",
      img: "hensleyImg",
      about:
        "Mark Hensley brings over 15 years of experience in coffee production management. His expertise lies in optimizing processes and evaluating cutting-edge equipment. Hensley is known for his meticulous approach to product quality and operational efficiency, making him a valuable contact in the industry.",
      whyIPickedThisLead:
        "Mark Hensley is deeply involved in decision-making and has a proactive attitude toward adopting new technologies.",
    },
    {
      name: "Susan Carter",
      job: "Owner",
      whatToDo: "Connect",
      whatToDoIcon: <FiPhone />,
      whatToDoText: "Carter expressed interest in premium coffee blends.",
      nextStep: "Discuss suppliers",
      topic: "Introducing premium products",
      statusReason: "New",
      createdAt: "2024-12-16T14:15:00Z",
      img: "carterImg",
      about:
        "Susan Carter has owned and operated Java Junction for over a decade. She is passionate about delivering high-quality coffee experiences to her customers. Carter values partnerships that prioritize product excellence and sustainability, making her a potential advocate for premium coffee blends.",
      whyIPickedThisLead:
        "Susan Carter is a hands-on business owner who values customer satisfaction and is always open to enhancing her offerings.",
    },
    {
      name: "Robert Klein",
      job: "Head of Procurement",
      whatToDo: "Engage",
      whatToDoIcon: <FiCalendar />,
      whatToDoText: "Klein is reviewing supply chain optimizations.",
      nextStep: "Audit meeting",
      topic: "Streamlining operations",
      statusReason: "New",
      createdAt: "2024-12-15T11:45:00Z",
      img: "kleinImg",
      about:
        "Robert Klein specializes in supply chain management and cost optimization. He has successfully reduced overhead for several businesses by identifying inefficiencies and implementing modern procurement strategies. Klein is always exploring innovative approaches to streamline operations.",
      whyIPickedThisLead:
        "Robert Klein has a proven track record in optimizing procurement processes and is highly motivated to drive cost savings.",
    },
    {
      name: "Emily Johnson",
      job: "Manager",
      whatToDo: "Reach out",
      whatToDoIcon: <FiMessageCircle />,
      whatToDoText: "Johnson is looking into new customer engagement tools.",
      nextStep: "Present CRM",
      topic: "Boosting customer loyalty",
      statusReason: "New",
      createdAt: "2024-12-14T16:00:00Z",
      img: "johnsonImg",
      about:
        "Emily Johnson oversees daily operations and marketing initiatives at Coffee Haven. She has a strong interest in tools that improve customer relationships and increase retention rates. Johnson is particularly keen on technologies that provide actionable insights and enhance customer experiences.",
      whyIPickedThisLead:
        "Emily Johnson is proactive in seeking tools that align with her goal of fostering deeper customer relationships.",
    },
    {
      name: "Paul Davies",
      job: "Manager",
      whatToDo: "Engage",
      whatToDoIcon: <FiBookOpen />,
      whatToDoText: "Davies has shown interest in eco-friendly packaging.",
      nextStep: "Send samples",
      topic: "Sustainability initiatives",
      statusReason: "New",
      createdAt: "2024-12-13T08:20:00Z",
      img: "daviesImg",
      about:
        "Paul Davies is passionate about sustainability in the coffee industry. As an operations manager, he has implemented several green initiatives and is always looking for ways to reduce the environmental impact of his business. Davies values vendors who share his commitment to sustainability.",
      whyIPickedThisLead:
        "Paul Davies is an advocate for sustainability and a decision-maker for operational improvements.",
    },
    {
      name: "Laura Martinez",
      job: "Director",
      whatToDo: "Follow up",
      whatToDoIcon: <FiVideo />,
      whatToDoText: "Martinez is exploring co-branding opportunities.",
      nextStep: "Propose strategy",
      topic: "Expanding brand reach",
      statusReason: "New",
      createdAt: "2024-12-12T13:10:00Z",
      img: "martinezImg",
      about:
        "Laura Martinez leads marketing efforts at Cuppa Love. She excels at identifying unique branding opportunities and building meaningful partnerships. Her campaigns have consistently driven brand awareness and customer engagement.",
      whyIPickedThisLead:
        "Laura Martinez is creative, results-driven, and open to exploring innovative marketing strategies.",
    },
    {
      name: "James Reed",
      job: "Owner",
      whatToDo: "Contact",
      whatToDoIcon: <FiPhone />,
      whatToDoText: "Reed wants advice on attracting more foot traffic.",
      nextStep: "Discuss marketing",
      topic: "Increasing visibility",
      statusReason: "New",
      createdAt: "2024-12-11T10:50:00Z",
      img: "reedImg",
      about:
        "James Reed is a dedicated entrepreneur who owns The Daily Drip. He is constantly looking for new ways to grow his customer base and improve the in-store experience. Reed values practical solutions that deliver measurable results.",
      whyIPickedThisLead:
        "James Reed is determined to grow his business and open to exploring creative ways to drive traffic.",
    },
    {
      name: "Anna Clarke",
      job: "Barista",
      whatToDo: "Engage",
      whatToDoIcon: <FiMessageCircle />,
      whatToDoText: "Clarke is researching automated brewing systems.",
      nextStep: "Product demo",
      topic: "Modernizing workflows",
      statusReason: "New",
      createdAt: "2024-12-10T15:30:00Z",
      img: "clarkeImg",
      about:
        "Anna Clarke is an innovative barista with a flair for modern coffee-making techniques. She is exploring tools and equipment that enhance quality while reducing manual effort. Clarke is also keen on improving consistency in beverage preparation.",
      whyIPickedThisLead:
        "Anna Clarke is forward-thinking and actively seeks technologies that simplify her work and improve results.",
    },
    {
      name: "Tom Walker",
      job: "Owner",
      whatToDo: "Connect",
      whatToDoIcon: <FiMail />,
      whatToDoText: "Walker is evaluating POS systems for his shop.",
      nextStep: "Send guides",
      topic: "Improving transaction efficiency",
      statusReason: "New",
      createdAt: "2024-12-09T14:45:00Z",
      img: "walkerImg",
      about:
        "Tom Walker is a small business owner who prides himself on staying ahead of technological trends. His focus is on providing a seamless experience for customers and staff alike. Walker is particularly interested in tools that improve operational efficiency and customer satisfaction.",
      whyIPickedThisLead:
        "Tom Walker is detail-oriented and always on the lookout for ways to improve his business operations.",
    },
  ];

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [showLeads, setShowLeads] = useState(true);

  const toggleLeads = () => {
    setShowLeads(!showLeads);
  };
  const [name1, setName1] = useState("");

  const toggleName = (item) => {
    if (item == name1) {
      setName1("");
    } else {
      setName1(item);
    }
  };
  const otherActivities = [
    {
      name: "Cafe A100 for Woodland Bank",
      job: "Woodland Bank . $2000 . 2 days to close",
      whatTodo: "Review draft and reply to chris nado",
      whatToDoIcon: <FiMessageCircle />,
    },
    {
      name: "Partnership opportunity for fabrikam",
      job: "Fabrikam . $2000 . 3 days to close",
      whatTodo: "prepare me for fabrikam's key stakeholder meeting",
      whatToDoIcon: <FiMessageCircle />,
    },
  ];
  return (
    <main>
      <section className="grid gap-10 relative">
        <div className="border border-purple-600 p-5 rounded shadow-md">
          <div className="flex items-center justify-between gap-4 overflow-x-scroll md:overflow-x-hidden">
            <h3 className="text-1xl font-bold">
              Hi moana, <span className="text-blue-700">68%</span> of goals
              achieved and the rest can be achieved by focusing on 20 top leads{" "}
            </h3>

            {showLeads ? (
              <IoIosArrowUp
                size={20}
                onClick={toggleLeads}
                className="cursor-pointer"
              />
            ) : (
              <IoIosArrowDown
                onClick={toggleLeads}
                className="cursor-pointer"
                size={20}
              />
            )}
          </div>

          {showLeads && (
            <div className="gap-2 mt-10 md:grid grid-cols-5">
              {/* mobile */}
              <div className="col-span-4 block md:hidden">
                {" "}
                <p className="mb-4">
                  Copilot has pointed out 20 key leads that shows strong
                  purchase intent and are actively engaging. These leads needs
                  your focus
                </p>
                <div className="grid  gap-5 mt-6">
                  {leads.slice(0, 2).map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border grid gap-2 p-3 rounded-md shadow hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out hover:cursor-pointer">
                        <div className="flex items-center gap-4">
                          <Image
                            src={nike}
                            alt={"nike"}
                            width={45}
                            height={45}
                            className="rounded-full border"
                          />
                          <div>
                            <p className="text-black font-semibold">
                              {item.name}{" "}
                            </p>
                            <p className="text-grey-400 text-sm">
                              {" "}
                              {item.job}{" "}
                            </p>
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
                </div>
              </div>

              {/* desktop */}
              <div className="col-span-3 hidden md:block">
                {" "}
                <p className="mb-4">
                  Copilot has pointed out 20 key leads that shows strong
                  purchase intent and are actively engaging. These leads needs
                  your focus{" "}
                </p>
                <Sliding leads={leads} />
              </div>

              <div className="mt-5 grid gap-3 md:mt-0 md:col-span-2">
                <p className="mb-4">Other key activities </p>

                {otherActivities.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border grid gap-2 p-3 rounded-md shadow">
                      <div className="flex items-center gap-4">
                        <Image
                          src={nike}
                          alt={"nike"}
                          width={45}
                          height={45}
                          className="rounded-full border"
                        />
                        <div>
                          <p className="text-black font-semibold">
                            {item.name}{" "}
                          </p>
                          <p className="text-grey-400 text-sm"> {item.job} </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 h-fit bg-gradient-to-r from-blue-100 to-gray-300 p-3 rounded">
                        <div>{item.whatToDoIcon}</div>
                        <p className="text-black text-sm"> {item.whatTodo} </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <Carousel responsive={responsive2}>
          {leads.map((item, index) => {
            return (
              <div
                key={index}
                className="border grid gap-3 p-3 rounded-md z-10">
                <p className="text-black font-semibold">
                  Engage with {item.name}{" "}
                </p>

                <div className="flex items-center gap-4 p-3 shadow-lg border  rounded">
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

                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded md:flex items-center justify-between">
                  <p className="text-sm"> {item.whatToDoText} </p>

                  <button className=" bg-gradient-to-r from-purple-500 to-purple-400 p-2 text-white rounded mt-3 md:mt-0">
                    {" "}
                    Approve and send{" "}
                  </button>
                </div>

                <div className="bg-white p-2 rounded shadow">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded">
                    <div className="md:w-3/5">
                      <p className="text-purple-500 font-semibold">
                        Why i picked this lead{" "}
                      </p>
                      <ul className="list-disc list-inside">
                        <li className="text-sm text-black">
                          {item.whyIPickedThisLead}
                        </li>
                      </ul>

                      <div className="flex items-center flex-col gap-3 mt-3 md:flex-row gap-5">
                        <div className="shadow p-3 rounded border bg-white w-full ">
                          <p> Descision maker </p>
                          <span className="text-purple-500 font-semibold">
                            {" "}
                            Yes{" "}
                          </span>
                        </div>

                        <div className="shadow p-3 rounded border bg-white w-full ">
                          <p> Potential deal value </p>
                          <span className="text-purple-500 font-semibold">
                            $1m
                          </span>
                        </div>
                        <div className="shadow p-3 rounded border bg-white w-full ">
                          <p> Intent </p>
                          <span className="text-purple-500 font-semibold">
                            High
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded border">
                  <div className="flex items-center justify-between gap-4 mb-3 md:overflow-x-hidden">
                    <h3 className="text-sm font-semibold">About {item.name}</h3>

                    {name1 == item.name ? (
                      <IoIosArrowDown
                        onClick={() => {
                          toggleName(item.name);
                        }}
                        className="cursor-pointer"
                        size={20}
                      />
                    ) : (
                      <IoIosArrowUp
                        size={20}
                        onClick={() => {
                          toggleName(item.name);
                        }}
                        className="cursor-pointer"
                      />
                    )}
                  </div>

                  {name1 == item.name && (
                    <p className="text-sm"> {item.about} </p>
                  )}
                </div>
              </div>
            );
          })}
        </Carousel>

        <Table1 leads={leads} />
      </section>

    </main>
  );
};

export default Leads;
