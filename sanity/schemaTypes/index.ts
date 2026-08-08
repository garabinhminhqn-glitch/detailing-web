import { type SchemaTypeDefinition } from "sanity";
import { dichVu } from "./dichVu";
import baiViet from "./baiViet";
import thongTinChung from "./thongTinChung";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [dichVu, baiViet, thongTinChung],
};
