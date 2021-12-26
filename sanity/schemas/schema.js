import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import profile from "./profile";
import activity from "./activity";
import journalEntry from "./journalEntry";
import resume from "./resume";
import photography from "./photography";

export default createSchema({
  name: "Collections",
  types: schemaTypes.concat([
    project,
    profile,
    activity,
    journalEntry,
    resume,
    photography,
  ]),
});
