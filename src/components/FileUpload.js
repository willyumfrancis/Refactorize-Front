// File: src/components/FileUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function FileUpload({ onResults }) {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);

        // Post to Flask server
        axios.post('http://127.0.0.1:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                // Assuming the response structure matches what the Flask server sends
                const { summary, updated_html } = response.data;
                // Call the onResults function passed in as a prop with the new results
                onResults({ summary, updated_html });
            })
            .catch(error => {
                console.error('Error uploading and processing file', error);
            });
    }, [onResults]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here...</p> :
                    <button>Upload Page</button>
            }
        </div>
    );
}

export default FileUpload;