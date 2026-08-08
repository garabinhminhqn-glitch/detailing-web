import { defineType, defineField } from "sanity";

export default defineType({
  name: "baiViet",
  title: "Bài viết Blog",
  type: "document",
  fields: [
    defineField({ name: "tieuDe", title: "Tiêu đề", type: "string" }),
    defineField({
      name: "slug",
      title: "Đường dẫn",
      type: "slug",
      options: { source: "tieuDe" },
    }),
    defineField({ name: "anh", title: "Ảnh bìa", type: "image" }),
    defineField({ name: "noiDung", title: "Nội dung", type: "text" }),
  ],
});
