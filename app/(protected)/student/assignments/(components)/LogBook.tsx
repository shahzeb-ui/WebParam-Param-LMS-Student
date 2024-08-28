import React, { useState, useRef } from 'react';
import '../../student-profile/documents/uploadDocs.scss';

const LogBooks: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [dragging, setDragging] = useState(false);
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
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
      alert('File uploaded successfully!');
    }, 1000);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      const selectedFile = event.dataTransfer.files[0];
      setFile(selectedFile);
      handleUpload(selectedFile);
      setDragging(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        className={`docContainer ${dragging ? 'dragover' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          marginTop: '20px',
          width: '35rem',
          backgroundColor: dragging ? '#24345c' : 'white',
        }}
      >
        <p style={{ color: 'black', marginBottom:'15px' }}>Logbook</p>
        <h3>Drag and drop your logbook here</h3>
        {isUploading && <p>Uploading...</p>}
        <div>
          {isUploaded ? (
            <i className="bi bi-file-check-fill" style={{ cursor: 'pointer', color: '#dfedfa' }} onClick={() => alert('Previewing file...')}></i>
          ) : (
            <i className="bi bi-cloud-arrow-up"></i>
          )}
          {isUploaded && (
            <span
              onClick={() => alert('Previewing file...')}
              style={{ display: 'block', cursor: 'pointer', fontSize: '12px', marginTop: '10px', textDecoration: 'underline', color: 'green' }}
            >
              View doc
            </span>
          )}
        </div>
        <h5>OR</h5>
        <button onClick={triggerFileInput}
          style={{background:'#24345c',
          color:'#fff',
          padding:'10px 20px',
          borderRadius:'5px',
          cursor:'pointer',
          border:'none'}} >{file ? 'Change File' : 'Browse Files'}

        </button>
        <input
          type="file"
          id="file-upload"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <a href="/path/to/your/pdf" download style={{ display: 'inline-block' }}>
            Download logbook.pdf
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogBooks;