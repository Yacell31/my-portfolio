import Layout from "../components/Layout";
import Image from 'next/image';

const Index = () => {
	return (
		<Layout>
			<div className="pt-10 pb-20 bg-gray-100 border border-gray-400 border-double">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8">
							Welcome to my portfolio website
						</h1>
						<p className="text-lg text-gray-500 mb-6">
					  {" 	I'm a senior software engineer, fitness lover and digital	marketing practitioner. Browse through my projects and let's	connect!"}
						</p>
						<div className="bg-gray-100 py-4">
							<div className="max-w-6xl mx-auto px-4">
								<h2 className="text-3xl font-bold text-gray-800 text-center">
									Me on a nutshell
								</h2>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap justify-around items-center">
						<div className="mb-8">
							<Image
								src="/computer.jpg"
								alt="Person on a computer"
								className="rounded-lg shadow-lg "
                width={500}
                height={250}
							/>
						</div>
						<div className="mb-8">
							<Image
								src="/workout.jpg"
								alt="Person working out"
								className="rounded-lg shadow-lg "
                width={500}
                height={250}
							/>
						
						</div>
						<div className="mb-8">
							<Image
								src="/data-analysis.jpg"
								alt="Person analyzing data"
								className="rounded-lg shadow-lg "
                width={500}
                height={250}
							/>
					
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
