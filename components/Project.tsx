import React from 'react';
import PicCollage from './PicCollage';


interface ProjectProps {
  title: string;
  subtitle: string;
  images: string;
  description: string;
  
}

const images=[{}]
const Project: React.FC<ProjectProps> = ({ title, subtitle, images, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4">
    
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <h3 className="text-md font-semibold text-gray-600">{subtitle}</h3>
        <PicCollage images={images}></PicCollage>
        <p className="mt-4 text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Project;