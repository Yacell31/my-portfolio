import React from "react";


interface PicCollageProps {
    images: any;
    
  }


const PicCollage : React.FC<PicCollageProps> =  ({images}) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 mt-8">
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[0].url}
					alt="Portfolio item 1"
					className="rounded-lg  w-8/12"
				/>
				
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[1].url}
					alt="Portfolio item 2"
					className="rounded-lg w-8/12"
				/>
				
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[2].url}
					alt="Portfolio item 3"
					className="rounded-lg  w-8/12"
				/>
				
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[3].url}
					alt="Portfolio item 4"
					className="rounded-lg  w-8/12"
				/>
			
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[4].url}
					alt="Portfolio item 5"
					className="rounded-lg  w-8/12"
				/>
				
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					src={images[5].url}
					alt="Portfolio item 6"
					className="rounded-lg  w-8/12"
				/>
				
			</div>
		</div>
	);
};

export default PicCollage;
