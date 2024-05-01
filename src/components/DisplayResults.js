// File: src/components/DisplayResults.js
import React from 'react';
import './DisplayResults.css'; // Ensure this CSS file is correctly imported

function DisplayResults({ results }) {
    return (
        <div className="resultsWrapper">
            {/* Summary Section */}
            <div className="summarySection">
                <h2 className="sectionTitle">Summary of Changes</h2>
                <ul className="summaryList">
                    {results.summary.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* HTML Comparison Sections */}
            <div className="comparisonContainer">
                <div className="resultPanel">
                    <h2 className="sectionTitle">Before</h2>
                    <div dangerouslySetInnerHTML={{ __html: results.original_html }}></div>
                </div>
                <div className="resultPanel">
                    <h2 className="sectionTitle">After</h2>
                    <div dangerouslySetInnerHTML={{ __html: results.updated_html }}></div>
                </div>
            </div>
        </div>
    );
}

export default DisplayResults;
