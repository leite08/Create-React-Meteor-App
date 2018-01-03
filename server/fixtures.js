import { Meteor } from 'meteor/meteor';
import Companies from '../import/Companies';
import Documents from '../import/Documents';

const runFixtures = true;

const cleanup = () => {
  if (runFixtures) {
    Companies.remove({});
    Documents.remove({});
  }
};

const documentsSeed = (company) => {
  try {
    [
      { companyId: company._id, name: 'document01-'+company.name, value: 'value of document 1' },
      { companyId: company._id, name: 'document02-'+company.name, value: 'value of document 1' },
      { companyId: company._id, name: 'document03-'+company.name, value: 'value of document 1' },
    ]
    .forEach((item) => {
      Documents.insert(item);
    });
  } catch (e) {
    console.log('[documentsSeed] exception: ' + e);
  }
};

const seed = () => {
  const environments = ['development', 'staging'];
  if (!environments.includes(process.env.NODE_ENV)) {
    return;
  }
  if (!runFixtures) {
    return;
  }

  cleanup();

  let company = {
    name: 'Acme',
  }
  company._id = Companies.insert(company);
  documentsSeed(company);

  company = { 
    name: 'Rocket',
  }
  company._id = Companies.insert(company);
  documentsSeed(company);
};

seed();
