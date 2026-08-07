import { defineType, defineField } from "sanity";

export const dichVu = defineType({
  name: "dichVu",
  title: "Dịch vụ",
  type: "document",
  fields: [
    defineField({
      name: "ten",
      title: "Tên dịch vụ",
      type: "string",
    }),
    defineField({
      name: "gia",
      title: "Giá",
      type: "string",
    }),
    defineField({
      name: "moTa",
      title: "Mô tả",
      type: "text",
    }),
  ],
});
