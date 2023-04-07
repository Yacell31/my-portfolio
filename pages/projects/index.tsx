import React from "react";
import Project from "@/components/Project";
import Layout from "@/components/Layout";
import ccReconImageUrlList from "../../components/data/images";
import vitaminImageUrlList from "@/components/data/vitaminImages";
import dailyFitnessImageUrlList from "@/components/data/dailyFitnessImages";

const ProjectPage: React.FC = () => {
	return (
		<>
			<Layout>
				<div className="container mx-auto my-20">
					<Project
						title="Cc Reconciliation"
						subtitle="Web App- Credit Card Processing"
						images={ccReconImageUrlList}
						description="As a software engineer, I have played a critical role in designing user interfaces, writing clean and efficient code, and ensuring seamless integration with backend systems to deliver high-quality results and exceptional performance for a credit card transaction reconciliation web app. Through my expertise in front-end development, I have developed intuitive and visually appealing interfaces that enhance the user experience and improve the app's overall functionality. My focus on accuracy and efficiency has enabled the app to provide efficient and accurate financial management for the company. I am excited to showcase this project on my portfolio website as a testament to my skills and dedication to delivering top-notch software engineering solutions."
					/>
					<Project
						title="Vitamins Reminder"
						subtitle="Mobile- Android/Apple Compatible"
						images={vitaminImageUrlList}
						description="As a personal project, I developed a mobile app that is making a positive impact by reminding pregnant women to take their vitamins and providing personalized health tracking features. I used the cutting-edge technology React Native to ensure optimal performance and compatibility with both Android and Apple devices in a timely and efficient manner. The app's intuitive user interface and powerful functionality make it an invaluable tool for expectant mothers and healthcare professionals alike. I am excited to add this project to my portfolio website as a showcase of my skills and passion for improving healthcare through innovative technology."
					/>

					<Project
						title="Daily Fitness Victories"
						subtitle="Fitness Blog/ WordPress Powered"
						images={dailyFitnessImageUrlList}
						description=" As a seasoned fitness enthusiast and a mom myself, I know firsthand the challenges that come with staying healthy while balancing the demands of motherhood. That's why I've created this website to share my knowledge and help fellow moms achieve their fitness goals. Not only am I passionate about fitness and wellness, but I'm also skilled in website design using WordPress. I've designed a user-friendly and visually stunning website that's easy to navigate and showcases my expertise. I take pride in creating beautiful images and graphics that grab your attention and enhance the overall user experience.Additionally, I'm well-versed in SEO and social media marketing, and I'm committed to optimizing my website to increase its online visibility and reach. I understand the importance of building a strong online presence, and I'm dedicated to utilizing social media to connect with my audience and promote a healthy lifestyle."
					/>
				</div>
			</Layout>
		</>
	);
};

export default ProjectPage;
