'use client'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { useState } from 'react';

import './submit.scss';
import dynamic from 'next/dynamic';

export default function SubmitAssignment() {
    const [value, setValue] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    return (
        <div className="p-5">
            <div className="container-ev">
                <h5 className="text-success"><i className="bi bi-journal-text"></i> Assignment</h5>
                <h3 className="h5"> The Complete JavaScript Course 2023: From Zero to Expert.</h3>
                <p>Assignment Submission</p>
                <div>
                    <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '180px' }} placeholder="Add your assignment content here" />
                </div>
                <div className="uploadAssignment" style={{ padding: '10px', marginTop: '80px', height:'200px', borderRadius:'10px' }}>
                    <div
                        className={`docContainer ${dragging ? 'dragover' : ''}`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        
                    >
                        <h3>Drag and drop file here</h3>
                        <div></div>
                        <h5>OR</h5>
                        {file && <p className="fileName">{file.name}</p>}
                        <input
                            type="file"
                            accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                        />
                        <label htmlFor={'file'}>Browse Files</label>
                    </div>
                </div>
                <button className="btn btn-success d-flex align-items-center justify-content-center mt-3" 
                style={{height:'40px', width:'200px', fontSize:'14px', gap:'5px'}}>Submit Assignment <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    );
}
