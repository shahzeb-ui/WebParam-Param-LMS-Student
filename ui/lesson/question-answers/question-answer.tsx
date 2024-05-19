// "use client";

import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuestionAndAnswers = () => {
  const [body, setBody] = useState("");

  const handleChange = (value: any) => {
    console.log("handle change: ", value);
    setBody(value);
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-md-5 mb-3">
          <label className="form-label fw-bold underline-2">
            Question Title
          </label>
          <input type="text" className="form-control mt-3" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mt-4 mb-2">
          <ReactQuill
            theme="snow"
            value={body}
            onChange={handleChange}
            className="custom-quill-1"
          />
        </div>
      </div>

      <div className="rbt-separator-mid"></div>
    </div>
  );
};

export default QuestionAndAnswers;
