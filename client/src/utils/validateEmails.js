const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default emails => {
  emails = emails.replace(/,\s*$/, '');

  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => ! emailRegex.test(email));

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return;
};