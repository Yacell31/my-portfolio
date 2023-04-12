import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from 'next';

import { useRouter } from 'next/router';
import Layout from '../../../components/Layout'

import {getPostBySlug} from '../../../lib/postService'

interface BlogPostProps {
  post: {
    id: string
    title: string
    content: string
    author: string
    date: string
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ post }: BlogPostProps) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	console.log("here 1");
	// const { title, content } = post;
	/*let content= post.content.split("\n\n").map((paragraph: any, index: any) => console.log({paragraph:paragraph}))
	console.log({content:content});
	let nextIndex = post.content.indexOf("\\n\\n");
	console.log({nextIndex:nextIndex});*/
	  const paragraphs = post.content.split("\\n\\n")




	  
	return (
		<Layout>
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 ">
				<h1 className="text-3xl font-bold mb-4 py-4 mt-4">{post?.title}</h1>
				{paragraphs.map((paragraph:any, index:any) => (
					<p className="text-lg text-gray-700 leading-relaxed mb-8" key={index}>
						{paragraph}
					</p>
				))}
			</div>
		</Layout>
	);
};



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
console.log({params:params})

  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  const { slug } = params;
  const post = await getPostBySlug(slug as string);

  const formattedPost = {
    ...post,
    date: post.date.toISOString(),
  };




  return {
    props: {
      post:formattedPost,
    },
  };
};
export default BlogPost;