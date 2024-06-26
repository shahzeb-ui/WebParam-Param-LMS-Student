import React, { useState } from 'react';
import './uploadDocs.scss';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { deployedUrl } from '@/app/api/endpoints';

type DocumentType = 'identity' | 'qualification' | 'cv';

const FileUpload: React.FC = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [upLoadingLoader, setUpLoadingLoader] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ type: DocumentType; file: File | null } | null>(null);
  const [files, setFiles] = useState<Record<DocumentType, File | null>>({
    identity: null,
    qualification: null,
    cv: null,
  });

  const [dragging, setDragging] = useState<Record<DocumentType, boolean>>({
    identity: false,
    qualification: false,
    cv: false,
  });

  const cookies = new Cookies();

  const user = cookies.get('loggedInUser');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: DocumentType) => {
    if (event.target.files) {
      setFiles({ ...files, [type]: event.target.files[0] });
      setSelectedFile({ type, file: event.target.files[0] });
      setIsUploading(true);
      setDragging({ ...dragging, [type]: false });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, type: DocumentType) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles({ ...files, [type]: event.dataTransfer.files[0] });
      setSelectedFile({ type, file: event.dataTransfer.files[0] });
      setIsUploading(true);
      setDragging({ ...dragging, [type]: false });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, type: DocumentType) => {
    event.preventDefault();
    setDragging({ ...dragging, [type]: true });
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>, type: DocumentType) => {
    event.preventDefault();
    setDragging({ ...dragging, [type]: false });
  };

  const handleUpload = async () => {
    setUpLoadingLoader(true);
    if (selectedFile && selectedFile.file) {
      const formData = new FormData();
      formData.append('file', selectedFile.file); // Adjusted for correct key

      const payload = {
        userId: user.data.userId,
        Type: ['identity', 'qualification', 'cv'].indexOf(selectedFile.type),
        File: formData,
      };

      try {
        const response = await axios.post(`${deployedUrl}/api/v1/Profile/SubmitDocument`, formData, {
          params: {
            userId: payload.userId,
            Type: payload.Type,
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setIsUploaded(true);
        } else {
          alert('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        
        alert('File upload failed');
      } finally {
        setUpLoadingLoader(false);
        setIsUploading(false);
        setSelectedFile(null);
        setIsUploaded(false)
      }
    }
  };

  const customModalStyles = {
    modal: {
      maxWidth: '50%',
      width: '50%',
      borderRadius: '10px',
      backgroundColor: 'white',
    },
  };

  return (
    <>
      <Modal open={isUploading} styles={customModalStyles} onClose={() => setIsUploading(false)} center blockScroll>
       {isUploaded ? 
       <div className='successUpload'>
        <i className="bi bi-check-circle-fill"/>
        <button onClick={() => setIsUploading(false)}>Close</button>
       </div>
       :<div className='modalContainer'>
          {
            upLoadingLoader 
            ? 
            <>
            <div className="spinner-border text-success" role="status"/>
            <p>Uploading...</p>
            </>
            :
              <>
            <h4>Confirm upload of the following file:</h4>
            <p>{selectedFile?.file?.name}</p>
            <button onClick={handleUpload}>Upload</button>
            </>
          }
        </div>}
      </Modal>

      <div className="requiredDocs">
        {(['identity', 'qualification', 'cv'] as DocumentType[]).map((docType, index) => (
          <div
            className={`docContainer ${dragging[docType] ? 'dragover' : ''}`}
            key={index}
            onDrop={(event) => handleDrop(event, docType)}
            onDragOver={(event) => handleDragOver(event, docType)}
            onDragLeave={(event) => handleDragLeave(event, docType)}
          >
            <h6>{docType.charAt(0).toUpperCase() + docType.slice(1)}</h6>
            <h3>Drag and drop your file here</h3>
            <div>
              <i className="bi bi-cloud-arrow-up"></i>
            </div>
            <h5>OR</h5>
            {files[docType] && <p className="fileName">{files[docType]?.name}</p>}
            <input
              type="file"
              name={docType}
              id={docType}
              accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(event) => handleFileChange(event, docType)}
            />
                    <label htmlFor={docType}>Browse Files</label>
                </div>
            ))}
        </div>
        </>
    );
};

export default FileUpload;
