const { afterRegistrationSuccess } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendBillkolosSoftOffer = async ({ email, name }) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: 'hello@BillkolosSoftapp.com',
    to: email,
    subject: 'Customize BillkolosSoft ERP CRM or build your own SaaS',
    html: afterRegistrationSuccess({ name }),
  });

  return data;
};

module.exports = sendBillkolosSoftOffer;
