export interface PostsProps {
  id: string;
  title: string;
  content: string;
  authorName: string | null;
}

const Posts = ({ id, title, content, authorName }: PostsProps) => {
  return (
    <div className="border border-solid border-white p-4 my-3">
      <h4>{title}</h4>
      <p>{content}</p>
      <p>Author: {authorName}</p>
    </div>
  );
};

export default Posts;
