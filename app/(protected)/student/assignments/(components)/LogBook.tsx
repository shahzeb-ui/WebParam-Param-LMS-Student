import React, { useState, useRef } from 'react';

const LogBooks = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      handleUpload(selectedFile);
    }
  };

  const handleUpload = (file: File) => {
    console.log('File to be uploaded:', file);
    setTimeout(() => {
      alert('File uploaded successfully!');
    }, 1000);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <button
          className="rbt-btn btn-xs bg-primary-opacity radius-round"
          onClick={triggerFileInput}
        >
          Upload Signed Logbook
        </button>
        <input
          type="file"
          id="file-upload"
          ref={fileInputRef}
          onChange={handleFileChange}
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
    </div>
  );
};

export default LogBooks;
