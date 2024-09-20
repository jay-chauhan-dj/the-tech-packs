import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: '1. What information do we collect?',
    description:
      'We collect information to provide and improve our services.<br><br><strong>The types of information we may collect include:</strong><ul><li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide during registration or communication with us.</li><li><strong>Usage Data:</strong> Information about how you use our services, including log data, device information, IP addresses, browser types, and actions taken on the app.</li><li><strong>Communications Data:</strong> Messages sent or received through WhatsApp, metadata related to these communications (such as time, date, and recipient information), and any other relevant content to the service.</li><li><strong>Payment Information:</strong> Billing details, transaction history, and other financial data required for processing payments.</li></ul>',
  },
  {
    title: '2. How do we use your information?',
    description:
      'We use the information collected to:<ul><li>Provide and maintain our SaaS app and its features.</li><li>Process your payments and manage your subscriptions.</li><li>Send important notices such as updates, security alerts, and support messages.</li><li>Analyze your usage to improve our services and develop new features.</li><li>Ensure compliance with legal obligations and enforce our terms and policies.</li><li>Provide customer support and respond to your inquiries.</li></ul>',
  },
  {
    title: '3. Will your information be shared with anyone?',
    description:
      'We do not sell your personal information. However, we may share your information in the following situations:<ul><li><strong>With Service Providers:</strong> We may share your data with third-party vendors who help us operate our SaaS app, such as hosting, payment processing, or customer support.</li><li><strong>Legal Compliance:</strong> If required by law or if we believe disclosure is necessary to comply with legal processes or protect the rights, property, or safety of our users and the public.</li><li><strong>Business Transfers:</strong> If we undergo a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li></ul>',
  },
  {
    title: '4. Do we use cookies or other tracking technologies?',
    description:
      'Yes, we use cookies and similar tracking technologies to collect and store information.<br>These technologies help us:<ul><li>Remember your preferences and personalize your experience.</li><li>Analyze website traffic and app usage to improve performance.</li><li>Track interactions with emails and online content for marketing purposes.</li></ul>You can manage cookie preferences through your browser settings.',
  },
  {
    title: '5. Is your information transferred internationally?',
    description:
      'Yes, your information may be transferred to and processed in countries outside of your own. We take steps to ensure your data is protected according to this privacy policy, even when processed in other jurisdictions. If you\'re located in the European Economic Area (EEA), we will implement safeguards as required by applicable law.',
  },
  {
    title: '6. How long do we keep your information?',
    description:
      'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. The retention period depends on the nature of the data and the purpose for which it was collected.',
  },
  {
    title: '7. What are your privacy rights?',
    description:
      'You have rights regarding the personal information we collect, including:<ul><li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li><li><strong>Correction:</strong> You can ask us to correct any inaccurate or incomplete information.</li><li><strong>Deletion:</strong> You may request that we delete your personal data, subject to certain legal obligations.</li><li><strong>Objection:</strong> You can object to the processing of your data in certain circumstances, such as for marketing purposes.</li><li><strong>Portability:</strong> You can request a copy of your data in a machine-readable format.</li></ul>To exercise your rights, please contact us using the details provided below.',
  },
  {
    title:
      '8. How can you review, update or delete the data we collect from you?',
    description:
      'If you want to review, update, or delete your information, you can:<ul><li>Log into your account to manage your data.</li><li>Contact our support team directly via email at <a href="https://mail.google.com/mail/u/0/?fs=1&to=support@thetechpacks.com&tf=cm" target="_blank" rel="noopener" style="text-decoration: none;">support@thetechpacks.com</a>.</li><li>We will respond to your request within a reasonable time frame in accordance with applicable laws.</li></ul>',
  },
];

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'} dangerouslySetInnerHTML={{ __html: description }}>
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
