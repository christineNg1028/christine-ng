import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import profile from "./profile";
import currents from "./currents";
import activity from "./activity";
import note from "./note";
import journalEntry from "./journalEntry";
import resume from "./resume";
import photography from "./photography";

export default createSchema({
  name: "Collections",
  types: schemaTypes.concat([
    project,
    profile,
    currents,
    activity,
    note,
    journalEntry,
    resume,
    photography,
  ]),
});
