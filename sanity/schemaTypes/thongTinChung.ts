import { defineType, defineField } from "sanity";

export default defineType({
  name: "thongTinChung",
  title: "Thông tin chung",
  type: "document",
  fields: [
    defineField({ name: "hotline", title: "Hotline", type: "string" }),
    defineField({ name: "diaChi", title: "Địa chỉ", type: "string" }),
    defineField({ name: "gioMoCua", title: "Giờ mở cửa", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
  ],
});
