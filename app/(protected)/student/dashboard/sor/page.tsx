"use client";

import Table from "./Table";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "react-bootstrap";
import WorkExperienceModules from "./(components)/WorkExperienceModule";
import PracticalSkillsModules from "./(components)/PracticalsModule";
import KnowledgeModules from "./(components)/KnowledgeModule";

const Sor = () => {
  const pathname = usePathname();

  console.log(pathname.split('/').includes('sor'))


  return (
    <>
        <div
          className="table-responsive p-10 rbt-review-wrapper rbt-shadow-box"
          data-toggle="lists"
          data-lists-sort-by="js-lists-values-employee-name"
          data-lists-values='["js-lists-values-employee-name", "js-lists-values-employer-name", "js-lists-values-projects", "js-lists-values-activity", "js-lists-values-earnings"]'
        >
        <KnowledgeModules />
        <PracticalSkillsModules  />
        <WorkExperienceModules />
        <button className="mt-5 bg-dark text-light h-2" style={{width:'100px', height:'40px', border:'none', borderRadius:'8px'}}><i className="bi bi-cloud-download-fill"></i></button>
        </div>
    </>
  );
};

export default Sor;
