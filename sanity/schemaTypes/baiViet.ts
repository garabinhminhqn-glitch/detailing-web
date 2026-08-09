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

    // ===== 3 field SEO thêm mới =====
    defineField({
      name: "metaTitle",
      title: "SEO – Tiêu đề Google",
      type: "string",
      description:
        "Tiêu đề hiện trên Google (~60 ký tự). Để trống = dùng Tiêu đề bài.",
    }),
    defineField({
      name: "metaDescription",
      title: "SEO – Mô tả Google",
      type: "text",
      rows: 3,
      description: "Đoạn mô tả hiện dưới tiêu đề trên Google (~155 ký tự).",
    }),
    defineField({
      name: "altText",
      title: "SEO – Mô tả ảnh (alt)",
      type: "string",
      description:
        'Mô tả ảnh cho Google, vd: "Xe Mazda phủ Ceramic bóng loáng".',
    }),
  ],
});
