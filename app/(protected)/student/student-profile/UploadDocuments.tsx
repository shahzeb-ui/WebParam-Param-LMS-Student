'use client'
import React, { useEffect, useState } from 'react';
import './uploadDocs.scss';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { deployedUrl } from '@/app/api/endpoints';
import { getStudentDocuments } from '@/app/api/studentProfile/studentprofile';
const pdfVersion = "2.16.105";
const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;

type DocumentType = 'identity' | 'qualification' | 'cv' | 'Leaner_Agreement';

const FileUpload: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [isUploading, setIsUploading] = useState(false);
  const [upLoadingLoader, setUpLoadingLoader] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ type: DocumentType; file: File | null } | null>(null);
  const [documents, setDocuments] = useState<any[]>([])
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [documentToView, setDocumentToView] = useState('');
  const [files, setFiles] = useState<Record<DocumentType, File | null>>({
    identity: null,
    qualification: null,
    cv: null,
    Leaner_Agreement: null,
  });

  const cookies = new Cookies();

  const user = cookies.get('loggedInUser');

  async function getDocuments() {
    try {
      if (user?.data) {
        const docs = await getStudentDocuments(user?.data.id||user?.data?.userId);

        if (docs) {
          setDocuments(docs?.data.data);
        }
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  }

  function viewDocument(docId: string) {
    console.log(docId)
    setDocumentToView(docId)
    setShowDocumentModal(true);
  }

  const [dragging, setDragging] = useState<Record<DocumentType, boolean>>({
    identity: false,
    qualification: false,
    cv: false,
    Leaner_Agreement: false,
  });

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
      formData.append('File', selectedFile.file);
      formData.append('UserId', user.data.id);
      formData.append('Type', String(['identity', 'qualification', 'cv', 'Leaner Agreement'].indexOf(selectedFile.type)));

  try {
    const response = await axios.post(`${deployedUrl}/api/v1/Profile/SubmitDocument`, formData, {
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

  useEffect(() => {
    getDocuments();
    console.log('documents:',documents)
  }, [])

  useEffect(() => {
    console.log('documents:', documents);
  }, [documents]);

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
      <Modal  
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={showDocumentModal} onHide={() => setShowDocumentModal(false)}
      >
      <Modal.Header closeButton>
        <Modal.Title>Document Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Worker workerUrl={pdfWorkerUrl}>
          <Viewer
            fileUrl={`https://khumla-development-user-read.azurewebsites.net/api/Documents/PreviewDocument/${documentToView}`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </Modal.Body>
    </Modal>

      <div className="requiredDocs">
        {(['identity', 'qualification', 'cv', 'Leaner Agreement'] as DocumentType[]).map((docType, index) => {
           const matchingDoc = documents.find((doc) => doc.type === index);
           console.log(matchingDoc)
         
         return (
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
              {matchingDoc ? <i className="bi bi-file-check-fill" style={{cursor:'pointer'}} onClick={() => viewDocument(matchingDoc.id)}></i>:<i className="bi bi-cloud-arrow-up"></i>}
             
             {matchingDoc && <span onClick={() => viewDocument(matchingDoc.id)} style={{display:'block', cursor:'pointer',fontSize:'12px', marginTop:'10px', textDecoration:'underline', color:'green'}}>View doc</span>}
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
            <label htmlFor={docType}>{matchingDoc ? 'Change':'Browse Files'}</label>
        </div>)
        })}
        </div>
        </>
    );
};

export default FileUpload;
