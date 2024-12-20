"use client";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const page = () => {
  const [name1, setName1] = useState(false);
  const toggleName = () => {
    setName1(!name1);
  };
  return (
    <div>
      {" "}
      <div className="p-4 rounded border">
        <div className="flex justify-end text-2xl font-semibold ">
          x
        </div>

        <h3 className="text-2xl font-semibold">Agent skills </h3>

        <div className=" gap-4 border p-4 shadow-lg rounded  my-3 md:overflow-x-hidden">
          <div className="flex items-center justify-between">
            <h3>
              {" "}
              Check if on-hand inventory will shows all sales orders to shop
              without delay{" "}
            </h3>

            {name1 ? (
              <IoIosArrowDown
                onClick={() => {
                  toggleName();
                }}
                className="cursor-pointer"
                size={20}
              />
            ) : (
              <IoIosArrowUp
                size={20}
                onClick={() => {
                  toggleName();
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {!name1 && (
            <div className="mt-3">
              <p className="leading-9">
                {" "}
                When{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  any vendor
                </span>{" "}
                sends an email with changes to{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  confirmed purchase orders
                </span>{" "}
                , check if the resulting{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  {" "}
                  on hand inventory{" "}
                </span>{" "}
                will allow{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  {" "}
                  all sales orders
                </span>
                to{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  ship without delay
                </span>{" "}
                . if so{" "}
                <span className="bg-blue-100 p-1 rounded-lg text-blue-500">
                  {" "}
                  update the purchase order
                </span>{" "}
                . to reflect the change{" "}
              </p>
            </div>
          )}
        </div>

        <h3 className="text-2xl font-semibold mt-8">Enable email access </h3>
        <div>
          <p>
            Allow the agent to access email inboxes to read mail from knows
            vendors
          </p>
        
          <div className="grid gap-4 md:grid-cols-5 mt-3 md:gap-2">
            <div className="md:col-span-4">
              <input
                type="email"
                className="w-full py-2 px-1 rounded border"
                placeholder="Input your email"
              />
            </div>

            <div className="md:col-span-1 flex md:justify-end">
              <button
                className="rounded bg-blue-600 text-white border-none py-2 px-4 w-full"
                onClick={() => alert("Access granted successfully")}>
                Allow Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
