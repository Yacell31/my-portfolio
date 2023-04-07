import React from "react";
import Project from "@/components/Project";
import Layout from "@/components/Layout";
import ccReconImageUrlList from "../../components/data/images";
import vitaminImageUrlList from "@/components/data/vitaminImages";
import dailyFitnessImageUrlList from "@/components/data/dailyFitnessImages";
import Services from "@/components/Service";

const ServicesPage: React.FC = () => {
	return (
		<>
			<Layout>
				<Services></Services>
			</Layout>
		</>
	);
};

export default ServicesPage;
