import React from 'react';
import './cardDetailsStyle.css'

export default function CardDetails({ data, onClose }) {
    const projectTitle = data.Project.Title;
    const technologies = data.Project.Technologies;
    const frontendSkill = data.Technical_Skillset.Frontend;
    const backendSkill = data.Technical_Skillset.Backend;
    const databaseSkill = data.Technical_Skillset.Databases;
    const infrastructure = data.Technical_Skillset.Infrastructre;
    const availability = data.Other_Information.Availability;

  return (
    <div className="card-details-modal">
        <div className=" border-red-500 border-2 rounded-lg p-4">
            <p className='text-lg mb-1 mt-1'>Project {projectTitle}</p>
            <div className='border-gray border-2'></div>
            <p className='text-lg text-gray-500 mb-1 mt-4'>Title</p>
            <p>Project {projectTitle}</p>
            <p className='text-sm text-gray-500 mb-1 mt-2'>Project Technologies</p>
            <p>Technologies: {technologies}</p>
            <p className='text-sm text-gray-500 mb-1 mt-2'>Technical Skillset Frontend</p>
            <p>{frontendSkill}</p>
            <p className='text-sm text-gray-500 mb-1 mt-2'>Technical Skillset Backend</p>
            <p>{backendSkill}</p>
            <p className='text-sm text-gray-500 mb-1 mt-2'>Technical Skillset Databases</p>
            {typeof databaseSkill === 'undefined'?( <p>-</p>):(<p className='mb-1 mt-2'>{databaseSkill}</p>)}
            <p className='text-sm text-gray-500'>Technical Skillset Infrastructure</p>
            {typeof databaseSkill === 'undefined'?( <p>-</p>):(<p className='mb-1 mt-2'>{infrastructure}</p>)}
            <p className='text-sm text-gray-500 mb-1 mt-2'>Availability</p>
            <p>{availability}</p>
        </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
