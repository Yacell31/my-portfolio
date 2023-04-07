import Layout from "@/components/Layout";
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
            <a href="#" className="block w-full h-48 bg-gray-300"></a>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
                Blog Post Title
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo enim.
              </p>
              <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read more
              </a>
            </div>
          </div>
          
          {/* Blog Post Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <a href="#" className="block w-full h-48 bg-gray-300"></a>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
                Blog Post Title
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo enim.
              </p>
              <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Read more
              </a>
            </div>
          </div>
          
          {/* Blog Post Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <a href="#" className="block w-full h-48 bg-gray-300"></a>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-bold mb-2">
                Blog Post Title
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
