import { Meteor } from 'meteor/meteor';
// import SimpleSchema from "simpl-schema";
// import {Random} from "meteor/random";
import Companies from "./Companies";

const Documents = new Meteor.Collection('documents');

Documents.join(Companies, "companyId", "company", ["name"]);

export default Documents;