import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Notes = () => {
  const [body, setBody] = useState("");

  const handleChange = (value: any) => {
    console.log("handle change: ", value);
    setBody(value);
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="row">
        <div className="col-md-5 mb-3">
          <label className="form-label fw-bold underline-2">Notes</label>
        </div>
      </div>

      <hr className="custom-line-break-1" />

      <div className="row">
        <div className="col-md-5 mb-3">
          <label className="form-label fw-bold underline-2">Note Title</label>
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

      <div className="row mt-3">
        <div className="col-md-10 d-flex justify-content-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-success">Post Question</button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
