import { type SchemaTypeDefinition } from "sanity";
import { dichVu } from "./dichVu";
import baiViet from "./baiViet";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [dichVu, baiViet],
};
