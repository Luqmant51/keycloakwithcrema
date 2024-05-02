'use client';
import React from 'react';
import AppGridContainer from '@devdocs/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppAnimate from '@devdocs/components/AppAnimate';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppCard from '@devdocs/components/AppCard';
import ContactUsForm from './ContactUsForm';
import SendMessage from './SendMessage';
import Address from './Address';
import SimpleMap from './SimpleMap';
import { contactUsData } from '@devdocs/fakedb/extraPages';
import { useIntl } from 'react-intl';

const ContactUs = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object({
    fullName: yup
      .string()
      .required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    message: yup.string().required(String(messages['validation.message'])),
  });
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <Box sx={{ mb: 5, maxHeight: '40%' }}>
          <SimpleMap />
        </Box>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppGridContainer>
          <Grid item xs={12} md={6}>
            <Formik
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);

                //TODO Api Call here to save user info
                setSubmitting(false);
              }}
            >
              <ContactUsForm />
            </Formik>
          </Grid>
          <Grid item xs={12} md={6}>
            <Address />
          </Grid>
        </AppGridContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default ContactUs;
