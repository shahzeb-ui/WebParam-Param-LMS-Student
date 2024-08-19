import React, { useState } from 'react';

const LogBooks = () => {
  const [file, setFile] = useState(null);


  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'end'}}>
        <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
          <button className="rbt-btn btn-xs bg-primary-opacity radius-round">Upload Signed Logbook</button>
        </label>
        <input
          type="file"
          id="file-upload"
          //onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <i className="bi bi-file-text" style={{ display: 'inline-block', fontSize: '180px' }}></i>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="/path/to/your/pdf" download style={{ display: 'inline-block' }}>
          Download logbook.pdf
        </a>
      </div>
      {file && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button>Upload File</button>
        </div>
      )}
    </div>
  );
};

export default LogBooks;
