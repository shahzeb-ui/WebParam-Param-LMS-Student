'use client'
import { useSearchParams } from "next/navigation";
import { assessmentsData } from "../data";
import { Suspense } from "react";
import { color } from "framer-motion";

 function MarkedAssessmentPage() {
    const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const assessment = assessmentsData.find((assessment:any) => Number(assessment.id) == Number(id));

    if (!assessment) {
        return <div>Assessment not found</div>;
      }

    return (
        <div>
            <h4>{assessment.title}</h4>
            {assessment.id == 1 && <EssayAnswer />}
            {assessment.id == 2 && <IntroductionAnswer />}
        </div>
    )
}

const EssayAnswer = () => {
    return (
        <>
           <div className="table-responsive o-hidden">
                <h5>Question 1:</h5>
                <div className="rbt-card height-330 o-hidden">
                <span style={{color:'green'}}>answer</span>: <br/>
                    Hi, I am Lucy! I am someone who is always been drawn 
                    to technology and design. I love solving problems creatively and 
                    figuring out how things work, which is what led me to pursue a career 
                    in web development and user experience design.
                    I am passionate about making technology more accessible and enjoyable for people. 
                    I believe that design is not just about how something looks but how it functions. 
                    I am always trying to strike that perfect balance between aesthetics and usability, 
                    ensuring that the products I work on are both beautiful and practical
                    <br />
                    <br />
                    Collaboration is something I thrive on. Whether I am working with developers, designers, 
                    or clients, I enjoy being part of a team that brings ideas to life. For me, the best 
                    projects come from a blend of different perspectives and skills.
                </div>
            </div>

            <div className="rbt-card m-0 p-2">
                <h5 className="rbt-card m-0 p-2" style={{color:'green'}}>Marks: 8/10</h5>
            </div>
        </>
    )
}

const IntroductionAnswer = () => {
    return (
        <>
           <div className="table-responsive o-hidden">
                <h5>Question 1: </h5>
                <div className="rbt-card height-330 o-hidden">
                    <p><u>Which of the following is a key component of project management?</u></p>
                <ul className="plan-offer-list">
                <li className="p-2" style={{border:'1px solid green', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <span style={{color:'green'}}> Resource Allocation</span>
                  <i className="feather-check" />
                </li>
                <li >
                 Project Planning
                </li>
                <li >
                 Risk Management
                </li>
                <li >
                 App Development
                </li>
                <li>
                     Budgeting
                </li>
                <li>
                     Quality Assurance
                </li>
                </ul>
                </div>
            </div>

            <div className="table-responsive o-hidden">
                <h5>Question 2:</h5>
                <div className="rbt-card height-330 o-hidden">
                <p><u>Which of the following is a key component of project management?</u></p>
                <ul className="plan-offer-list">
                <li className="p-2" style={{border:'1px solid green', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{color:'green'}}>Project Planning</span>
                <i className="feather-check" />
                </li>
                <li >
                    Resource Allocation
                </li>
                <li>
                   Risk Management
                </li>
                <li className="p-2" style={{border:'1px solid tomato', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{color:'tomato'}}>Budgeting</span>
                <i className="feather-x" style={{backgroundColor:'tomato'}} />
                </li>
                <li>
                 Quality Assurance
                </li>
                </ul>
                </div>
            </div>

            <div className="table-responsive o-hidden">
                <h5>Question 3:</h5>
                <div className="rbt-card height-330 o-hidden">
                <p><u>Which of the following is a key component of project management?</u></p>
                <ul className="plan-offer-list">
                <li >
                Project Planning
                
                </li>
                <li className="p-2" style={{border:'1px solid tomato', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <span style={{color:'tomato'}}>Resource Allocation</span>
                    <i className="feather-x" style={{backgroundColor:'tomato'}} />
                </li>
                <li>
                   Risk Management
                </li>
                <li className="p-2" style={{border:'1px solid green', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span style={{color:'green'}}>Budgeting</span>
                <i className="feather-check" />
                </li>
                <li>
                 Quality Assurance
                </li>
                </ul>
                </div>
            </div>

            <div className="rbt-card m-0 p-2">
                <h5 className="rbt-card m-0 p-2" style={{color:'tomato'}}>Marks: 5/15</h5>
            </div>
        </>
    )
}


export default function MarkedAssessment() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <MarkedAssessmentPage />
      </Suspense>
    )
}
