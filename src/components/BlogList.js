import Article from "./Article";
import { blogArticles } from "../data.js";

function BlogList() {
  return (
    <main className="my-16">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">The Blog</h2>
        <div className="border-b-4 border-[#7FAD39] w-16"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mx-4 my-6">
        {blogArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </main>
  );
}

export default BlogList;
