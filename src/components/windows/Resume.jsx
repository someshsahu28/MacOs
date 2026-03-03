import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="resume-window">
                <iframe
  src="/resume.pdf#view=FitH"
  width="100%"
  height="100%"
  style={{ border: "none" }}
  title="Resume"
/>
            </div>
        </MacWindow>
    )
}

export default Resume