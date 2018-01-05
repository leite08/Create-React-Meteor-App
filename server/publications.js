import { Meteor } from 'meteor/meteor';
import Companies from '../import/Companies';
import Documents from '../import/Documents';
import { check } from 'meteor/check';


Meteor.publish('document.list', function(someId) {
  console.log('[document.list] running');
  check(someId, String);
  console.log('[document.list] id: '+someId);
  try {
    // FROM: https://atmospherejs.com/perak/joins
    const cursor = Documents.find();
    return Documents.publishJoinedCursors(cursor, { reactive: true }, this);
    // return Documents.publishJoinedCursors(cursor);

  } finally {
    console.log('[document.list] returning...');
  }
});
