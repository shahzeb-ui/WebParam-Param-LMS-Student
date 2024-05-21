import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Notes = () => {
  const [body, setBody] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleChange = (value: any) => {
    console.log("handle change: ", value);
    setBody(value);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container mt-4 pb-5">
      <div className="row">
        <div className="col-md-5 mb-3">
          <label className="form-label fw-bold underline-2">Notes</label>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-5 mb-3">
          <button className="bi bi-plus-lg btn btn-success"> Add Note</button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="mb-3">
          <div className="note-title fw-bold">Basics of Next.js</div>
          <div className="mt-2">
            <p>
              Next.js is a React framework that enables server-side rendering
              and static site generation, providing a powerful toolset for
              building fast and SEO-friendly web applications. It offers
              features like file-based routing, API routes, and automatic code
              splitting, which enhance development efficiency and application
              performance. Additionally, Next.js supports CSS and Sass for
              styling and includes an image optimization component to improve
              page load times. Getting started with Next.js involves simple
              setup commands and allows for easy creation of pages and
              navigation between them, making it a go-to choice for modern web
              development.
            </p>
          </div>
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
