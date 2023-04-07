import { FunctionComponent } from 'react';
import { IconType } from 'react-icons/lib';
import { FiCode, FiTool, FiSmartphone, FiLayout, FiServer, FiClipboard, FiStar } from 'react-icons/fi';

interface IService {
  title: string;
  description: string;
  icon: IconType;
}

const services: IService[] = [
  {
    title: 'Custom Software Development',
    description: 'I specialize in creating tailor-made software solutions that meet the unique needs of your business. From idea to implementation, we work with you to deliver the highest quality product.',
    icon: FiCode,
  },
  {
    title: 'General Troubleshooting and Bug Fixes',
    description: 'Need help fixing a pesky bug? I have extensive experience in debugging and troubleshooting software problems. We can quickly diagnose and resolve any issue you may be facing',
    icon: FiTool,
  },
  {
    title: 'API Development and Integrations',
    description: 'I have extensive experience in developing and integrating APIs for a wide range of applications. Whether you need to build a new API from scratch or integrate an existing one, I have the expertise to get the job done.',
    icon: FiSmartphone,
  },
  {
    title: 'Software Training',
    description: 'I offer training and support for all our software solutions to ensure that you and your team are comfortable using our products. My training programs are designed to be flexible and tailored to your needs.',
    icon: FiClipboard,
  },
  {
    title: 'Custom UI/UX Design',
    description: 'I specialize in creating beautiful, intuitive user interfaces that provide an exceptional user experience. I do work closely with you to understand your brand and create a unique design that reflects your company’s values.',
    icon: FiLayout,
  },
  {
    title: 'Project Management',
    description: 'I use Agile, Waterfall, or Hybrid methodologies to manage projects and ensure they are completed on time and within budget. I offer custom tailored solutions as a project manager certified and agile coach to any team that has the need',
    icon: FiServer,
  },
  {
    title: 'WordPress Bug Fixes',
    description: 'I offer WordPress bug fixing services to ensure that your website runs smoothly and is free from any technical glitches. Whether it’s a minor issue or a major problem, our team is always here to help.',
    icon: FiTool,
  },
  {
    title: 'AI and ChatGPT Training',
    description: 'I offer AI and ChatGPT training to help your team learn and implement the latest in artificial intelligence and natural language processing technologies. Our training programs are designed to be flexible and tailored to your team’s needs.',
    icon: FiStar,
  },
];

const Service: FunctionComponent<IService> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon size="2rem" className="text-primary mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

const Services: FunctionComponent = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
