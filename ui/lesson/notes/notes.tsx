"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import noteData from "@/data/sample/sample.json";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Notes = () => {
  const [body, setBody] = useState("");
  const [notes, setNotes] = useState([
    {
      title: "Sample Note",
      content: noteData.sampleNote,
    },
  ]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleChange = (value: string) => {
    setBody(value);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const getDisplayContent = (
    text: string,
    isCollapsed: boolean,
    wordLimit = 100
  ) => {
    const words = text.split(" ");
    const isLong = words.length > wordLimit;
    const displayContent =
      isCollapsed && isLong
        ? words.slice(0, wordLimit).join(" ") + "..."
        : text;
    return { displayContent, isLong };
  };

  const handlePostQuestion = () => {
    // Add the new note to the list of notes
    const newNote = { title: "New Note", content: body };
    setNotes([...notes, newNote]);
    setBody(""); // Clear the editor after posting the note
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
          <button className="bi bi-plus-lg btn btn-success custom-button-4">
            {" "}
            Add Note
          </button>
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
          <button className="btn btn-secondary me-2 custom-button-4">
            Cancel
          </button>
          <button
            className="btn btn-success custom-button-4"
            onClick={handlePostQuestion}
          >
            Post Question
          </button>
        </div>
      </div>

      <hr className="custom-line-break-1" />

      <div className="row mt-3">
        {notes.map((note, index) => {
          const { displayContent, isLong } = getDisplayContent(
            note.content,
            isCollapsed
          );
          return (
            <div className="mb-3" key={index}>
              <div className="note-title fw-bold">{note.title}</div>
              <div className="mt-2">
                <p dangerouslySetInnerHTML={{ __html: displayContent }} />
                {isLong && (
                  <a
                    onClick={toggleCollapse}
                    className="ms-2"
                    style={{ cursor: "pointer" }}
                  >
                    {isCollapsed ? "Read more" : ""}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
