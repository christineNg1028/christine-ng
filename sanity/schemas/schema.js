import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import profile from "./profile";

export default createSchema({
  name: "Collections",
  types: schemaTypes.concat([project, profile]),
});