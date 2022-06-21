module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'myemail@protonmail.com',
          defaultReplyTo: 'myemail@protonmail.com',
        },
      },
    },
    // ...
  });