// File: src/components/DisplayResults.js
import React from 'react';

function DisplayResults({ results }) {
    return (
        <div>
            <h2>Summary of Changes</h2>
            <div>{results.summary}</div>
            <h2>Updated HTML Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: results.updated_html }}></div>
        </div>
    );
}

export default DisplayResults;
