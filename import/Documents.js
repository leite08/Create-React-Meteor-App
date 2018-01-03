import { Meteor } from 'meteor/meteor';
import Companies from "./Companies";

const Documents = new Meteor.Collection('documents');

Documents.join(Companies, "companyId", "company", ["name"]);

export default Documents;