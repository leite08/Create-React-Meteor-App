import { Meteor } from 'meteor/meteor';
import Companies from '../import/Companies';
import Documents from '../import/Documents';

Meteor.publish('document.list', function() {
  console.log('[document.list] running');
  const filter = {
  };
  try {
    // FROM: https://atmospherejs.com/perak/joins
    const cursor = Documents.find(filter);
    return Documents.publishJoinedCursors(cursor, { reactive: true }, this);

  } finally {
    console.log('[document.list] returning...');
  }
});
