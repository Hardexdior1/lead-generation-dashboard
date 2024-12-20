"use client";
import React, { useState } from "react";

import "react-multi-carousel/lib/styles.css";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Table1 = ({ leads }) => {
  const [allLeads, setAllLeads] = useState(leads);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);

    let matchingItems = [];
    if (e.target.value.trim() !== "") {
      matchingItems = leads.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.topic.includes(e.target.value) ||
          item.statusReason.includes(e.target.value)
      );
    } else {
      matchingItems = leads;
    }

    if (matchingItems.length === 0 && e.target.value !== "") {
      console.log("nothing here");
    } else {
      console.log("nothing here ");
    }

    setAllLeads(matchingItems);
  };

  
  return (
    <div>
      <div>
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          type="text"
          placeholder="Sort, filter and search with Copilot"
          className="border py-1 px-4 mb-2 rounded w-full md:w-1/3"
        />
      </div>
      {allLeads.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Name </TableHead>
              <TableHead>Topic </TableHead>
              <TableHead> Status reason </TableHead>
              <TableHead> Created on </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allLeads.map((lead, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-blue-400">
                  {" "}
                  {lead.name || "undefined"}{" "}
                </TableCell>
                <TableCell> {lead.topic || "No topic"}</TableCell>
                <TableCell> {lead.statusReason || "No reason"}</TableCell>
                <TableCell>{lead.createdAt} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="font-bold flex items-center justify-center mt-20">
          <p>oops.. No item matches your search</p>
        </div>
      )}
    </div>
  );
};

export default Table1;
