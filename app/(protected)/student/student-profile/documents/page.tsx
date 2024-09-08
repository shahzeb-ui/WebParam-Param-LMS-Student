'use client'
import React, { useEffect, useState } from 'react';
import './uploadDocs.scss';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { getDocumentsByCourseId, getStudentDocuments } from '@/app/api/studentProfile/studentprofile';
import { documentsRequired, yesProgramme } from './data';
import Loading from './loading';
import { readUserData, writeUserData } from '@/app/lib/endpoints';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const pdfVersion = "2.16.105";
const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;

// Update DocumentType to use the keys from documentsRequired
type DocumentType = typeof documentsRequired[number]['documentName'];

const FileUpload: React.FC = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const thumbnailPluginInstance = thumbnailPlugin();
  const zoomPluginInstance = zoomPlugin();

  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  const cookies = new Cookies();

  const [isUploading, setIsUploading] = useState(false);
  const [upLoadingLoader, setUpLoadingLoader] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{ type: DocumentType; file: File | null } | null>(null);
  const [documents, setDocuments] = useState<any[]>([]);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [documentToView, setDocumentToView] = useState('');
  const [isChangingDoc, setIsChangingDoc] = useState(false);
  const [loaded, setLoader] = useState(true);
  const [docToChange, setDocToChange] = useState<any>()
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedDocument = searchParams.get('document');
  const action = searchParams.get('action');
  
  const [files, setFiles] = useState<Record<DocumentType, File | null>>();

  const freemiumDocuments = ['Identification','Cv','Disability Letter (if applicable)'];

  const courseId = cookies.get("courseId");

  useEffect(() => {
  if (courseId =='66aa8cab45223bcb337a9643') {
      setFiles(
      yesProgramme.reduce((acc, doc) => {
        acc[doc.documentName] = null;
        return acc;
      }, {} as Record<DocumentType, File | null>)
    );
  } else {
    setFiles(
      documentsRequired.reduce((acc, doc) => {
        acc[doc.documentName] = null;
        return acc;
      }, {} as Record<DocumentType, File | null>)
    );
  }
  },[])


  const user = cookies.get('loggedInUser');

  async function getDocumentsByCourse(courseId: string) {
    try {
      const response = await getDocumentsByCourseId(courseId);
      if (response?.data?.data) {
        console.log('Documents by course:', response.data.data);
        return response.data.data; // Return documents data if needed elsewhere
      }
    } catch (error) {
      console.error('Error fetching documents by course:', error);
    }
    return [];
  }

  async function getDocuments() {
    setLoader(true);
    try {
      if (user?.data) {
        const docs = await getStudentDocuments(user?.data.id || user?.id);

        if (docs) {
          setDocuments(docs?.data.data);
        }
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoader(false); // Ensure loader is hidden once the fetch is complete
    }
  }

  function viewDocument(docId: string) {
    console.log(docId);
    setDocumentToView(docId);
  }

  const [dragging, setDragging] = useState<Record<DocumentType, boolean>>(
    documentsRequired.reduce((acc, doc) => {
      acc[doc.documentName] = false;
      return acc;
    }, {} as Record<DocumentType, boolean>)
  );

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
      formData.append('UserId', user.data.id);
      formData.append('Name', selectedFile.type);
      let type:any;

      if (courseId == "66aa8cab45223bcb337a9643") {
        type = yesProgramme.findIndex(doc => doc.documentName === selectedFile.type);
      } else {
        type = documentsRequired.findIndex(doc => doc.documentName === selectedFile.type);
      }

      // if (type !== undefined) {
      //   formData.append('Type', type.toString());
      // }
      formData.append('File', selectedFile.file);

      try {
        const response = await axios.post(`${writeUserData}/api/v1/Profile/SubmitDocument`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setIsUploaded(true);
          window.location.reload();
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
        setIsUploaded(false);
      }
    }
  };

  const handleChangeDocument = async (document: any) => {
    if (selectedFile && selectedFile.file) {
      const formData = new FormData();
      formData.append('File', selectedFile.file);
      formData.append('DocumentId', document?.id);

      try {
        const response = await axios.put(`${writeUserData}/api/v1/Documents/UpdateStudentDocument`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          setIsUploaded(true);
          window.location.reload();
        } else {
          alert('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('File upload failed');
      } finally {
        setUpLoadingLoader(false);
        setIsChangingDoc(false);
        setSelectedFile(null);
        setIsUploaded(false);
      }
    }
  };

  useEffect(() => {
    getDocuments();
    console.log('documents:', documents);

    const courseId = cookies.get("courseId");

    if (courseId) {
      // getDocumentsByCourse(courseId)
    }
  }, []);

  useEffect(() => {
    console.log('documents:', documents);
  }, [documents]);

  if (loaded) {
    return <Loading />; // Show loading while documents are being fetched
  }

  const documentinfo = documents.find((doc) => doc.name === selectedDocument);
  
  console.log('document ',document);


  return (

    <>
      <div className="top-controlls">
        <h6>Selected Document: {selectedDocument}</h6>
        <div>
        <button 
            type="button" 
            className={`btn btn-outline-dark text-white 
              ${documentinfo.status === 'Accepted' ? 'bg-success' : 
                documentinfo.status === 'PendingReview' ? 'bg-warning' : 
                documentinfo.status === 'Declined' ? 'bg-danger' : ''}`
            }>
            {documentinfo.status}
          </button>
          <button type="button" className="btn btn-dark btn-reupload" onClick={() => (router.push(`/student/student-profile?tab=documents&document=${selectedDocument}&action=upload`), setIsChangingDoc(!isChangingDoc))}>Upload New File</button>
        </div>
      </div>
    <section className='documents-container'>
    <div className='document-name-list card'>
      <h5>Documents</h5>
      <ul className="nav nav-segment nav-pills" role="tablist">
          {
            courseId =='66aa8cab45223bcb337a9643' ?

            yesProgramme.filter(doc => (process.env.NEXT_PUBLIC_IS_FREEMIUM ? freemiumDocuments.includes(doc.documentName):true)).map((doc, index) => {
            const docType = doc.documentName as DocumentType;
            const matchingDoc = documents.find((doc) => doc.name === docType);

              console.log('document',matchingDoc);
              return (
                <li className={`nav-item ${selectedDocument === doc.documentName ? 'active' : ''}`} role="presentation" key={index} onClick={() => (router.push(`/student/student-profile?tab=documents&document=${doc.documentName}&action=view`), viewDocument(matchingDoc.id))}>  
                  <div className="icon">
                  <i className="bi bi-file-pdf"></i>
                  </div>
                  <div className='document-name'>
                    <p>{doc.documentName}</p>
                  </div>
                </li>
              )
            })
          :
          documentsRequired.filter(doc => (process.env.NEXT_PUBLIC_IS_FREEMIUM ? freemiumDocuments.includes(doc.documentName):true)).map((doc, index) => {
            const docType = doc.documentName as DocumentType;
            const matchingDoc = documents.find((doc) => doc.name === docType);
            return (
              <li className={`nav-item ${selectedDocument === doc.documentName ? 'active' : ''}`} role="presentation" key={index} onClick={() => (router.push(`/student/student-profile?tab=documents&document=${doc.documentName}&action=view`), viewDocument(matchingDoc.id))}>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                    <i className="bi bi-file-pdf"></i>
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <span className="d-inline-block link-dark">
                        <h6 className="text-hover-primary mb-0">
                          {doc.documentName}
                        </h6>
                      </span>
                    </div>
                  </div>
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className='document-preview card'>
      <div className='document-preview-container'>
        {
        action === 'view' && 
        <Worker workerUrl={pdfWorkerUrl}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
            <ZoomOutButton />
            <ZoomPopover />
            <ZoomInButton />
          </div>
          <Viewer
            fileUrl={`${readUserData}/api/v1/Documents/PreviewDocument/${documentToView}`}
            plugins={[thumbnailPluginInstance, zoomPluginInstance]}
            defaultScale={.9}  
            />
        </Worker>}
        {action === 'upload' &&   
          <>
        {documentinfo.blobUrl ?
       <div className="upload-container">
          <h5>Upload File</h5>
          <form onSubmit={handleChangeDocument}>
            <div>
              <i className="bi bi-file-earmark-text-fill icon-upload"></i>
              <p>Drag and drop your file here</p>
              <span>or</span>
              <input 
                type="file" 
                id="file-input" 
                name='file-input' 
                onChange={(e) => handleFileChange(e, selectedDocument as DocumentType)} 
                accept=".pdf,.doc,.docx"
                style={{display: 'none'}}
                />
              <label className="btn btn-dark" htmlFor="file-input" >Choose File</label>
            </div>
            <div>
              <p>Supported Formats: PDF, DOC, DOCX</p>
              <p>Max file size: 4MB</p>
            </div>

            <div className="file-name">
                <p>{selectedFile?.file?.name ? selectedFile?.file?.name : 'No file chosen'}</p>
            </div>

            <div>
              <button type="button" className="btn btn-outline-dark" onClick={() => (router.push(`/student/student-profile?tab=documents&document=${selectedDocument}&action=view`), setSelectedFile(null))}>Cancel</button>
              <button type="submit" className="btn btn-secondary">Upload</button>
            </div>
          </form>
       </div>:
       <div className="upload-container">
          <h5>Change File</h5>
          <form onSubmit={handleUpload}>
            <div>
              <i className="bi bi-file-earmark-text-fill icon-upload"></i>
              <p>Drag and drop your file here</p>
              <span>or</span>
              <input 
                type="file" 
                id="file-input" 
                name='file-input' 
                onChange={(e) => handleFileChange(e, selectedDocument as DocumentType)} 
                accept=".pdf,.doc,.docx"
                style={{display: 'none'}}
                />
              <label className="btn btn-dark" htmlFor="file-input" >Choose File</label>
            </div>
            <div>
              <p>Supported Formats: PDF, DOC, DOCX</p>
              <p>Max file size: 4MB</p>
            </div>

            <div className="file-name">
                <p>{selectedFile?.file?.name ? selectedFile?.file?.name : 'No file chosen'}</p>
            </div>

            <div>
              <button type="button" className="btn btn-outline-dark" onClick={() => (router.push(`/student/student-profile?tab=documents&document=${selectedDocument}&action=view`), setSelectedFile(null))}>Cancel</button>
              <button type="submit" className="btn btn-secondary">Upload</button>
            </div>
          </form>
       </div>}
       </>
       }
       {action == null && selectedDocument == null && 
       <div >
        <h5>No document selected</h5>
       </div>}
      </div>
    </div>
    <div className='document-upload-container card'>
      {action === 'view' ? <thumbnailPluginInstance.Thumbnails /> : null}
    </div>
  </section>
  </>
  )
};

export default FileUpload;


