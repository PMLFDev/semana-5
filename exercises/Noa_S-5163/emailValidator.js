const mailsList = [
  'john.doe@example.com',
  'jane_doe+shopping@example.org',
  'alice.smith+work@example.co.uk',
  'charlie.brown+newsletter@example.io',
  'emily.watson+notes@example.net',
];

const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+(\.[\w]{2,7})+$/;

const filteredEmails = (email) => email.match(emailRegex);

const mapEmails = (email) => {
  const [fullEmail, subaddressing] = email.match(emailRegex);
  if (subaddressing) {
    return fullEmail.replace(subaddressing, '');
  }
  return fullEmail;
};

console.log(emailList.filter(filterEmails).map(mapEmails));
