import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <Layout>
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="block w-full">
                <Image
                src='/custom-software.jpg'
                height={150}
                width={400}
                alt='custom software for small businesses'
              ></Image>
            </div>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
              {"Custom Software for Small Businesses"}
              </h2>
              <p className="text-gray-700 mb-4">
              {"Gain a competitive advantage with tailored financial solutions."}
              </p>
              <Link 
              href={{
                pathname:'/blog/[slug]',
                query: { slug: '6' }
              }}
              
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read more
              </Link>
            </div>
          </div>
          
          {/* Blog Post Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="block w-full">
                <Image
                src='/website.jpg'
                height={150}
                width={400}
                alt='custom software for small businesses'
                ></Image>
            </div>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
              The Importance of Having a Website for Your Small Business in 2023
              </h2>
              <p className="text-gray-700 mb-4">
                {" In this blog post, we will discuss why having a website is crucial for small businesses, including its ability to increase visibility, reach new customers, and provide a platform for showcasing products and services"}
              </p>
              <Link 
              href={{
                pathname:'/blog/[slug]',
                query: { slug: '7' }
              }}
              
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read more
              </Link>
            </div>
          </div>
          
          {/* Blog Post Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="block w-full">
                <Image
                src='/software-solutions.jpg'
                height={150}
                width={400}
                alt='custom software for small businesses'
                ></Image>
            </div>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
              The Top Software Solutions Every Small Business Needs
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo enim.
              </p>
              <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default BlogPage;
