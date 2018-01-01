const sendGrid = require('sendgrid');
const helper = sendGrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/htmt', content);
    this.recipients = this.formatAdresses(recipients)
  }

  formatAdresses(recipients) {
    
  }
}

module.exports = Mailer;