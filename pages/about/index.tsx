import FollowMe from '@/components/SocialMedia';
import Layout from '../../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div className="px-4 py-10 sm:p-6">
              <h1 className="text-2xl font-bold mb-4">About Me</h1>
              <p className="text-lg mb-4 mt-4">
               {"I am a senior software engineer with over 10 years of experience in the field. My passion for technology and innovation has driven me to continuously learn and improve my skills, allowing me to tackle complex projects and deliver exceptional results."} 
              </p>
              <p className="text-lg mb-4">
                {"In addition to my technical expertise, I am also a fitness lover and digital marketing practitioner. Through my dedication to health and wellness, I have learned the importance of discipline, goal-setting, and perseverance, which have translated into all areas of my life, including my work as a software engineer."}
              </p>
              <p className="text-lg mb-4">
               {"As a digital marketing practitioner, I have developed expertise in creating and executing comprehensive marketing strategies that align with business goals, including social media marketing, email marketing, SEO, and content marketing."} 
              </p>
              <p className="text-lg">
                {"I am passionate about using technology to solve real-world problems and create meaningful impact. When I'm not coding or working out, you can find me exploring new hiking trails or trying out new healthy recipes in the kitchen."}
              </p>
            </div>
          </div>
        </div>
        <div className='py-8'>
        <FollowMe></FollowMe>
        </div>
      </div>
    </Layout>
  );
};

export default About;