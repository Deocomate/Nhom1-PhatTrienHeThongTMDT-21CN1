"use client";
import { useParams } from "next/navigation";
import { BlogDetailPage } from "@/pages/blog_detail/BlogDetailPage";

const Page = () => {
  const params = useParams();
  const slug = params.slug; // Lấy slug (id) từ URL

  if (!slug) {
    return <div>Loading...</div>; // Hiển thị khi slug chưa có giá trị
  }

  return <BlogDetailPage slug={slug} />;
};

export default Page;
