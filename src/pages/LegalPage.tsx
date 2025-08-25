import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const LegalPage: React.FC = () => {
  const { currentThemeConfig } = useTheme();

  return (
    <Box sx={{ py: 4, backgroundColor: currentThemeConfig.background, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Box sx={{
          backgroundColor: currentThemeConfig.paper,
          border: `1px solid ${currentThemeConfig.primary}33`,
          borderRadius: 1,
          p: 3
        }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: currentThemeConfig.textPrimary }}>
            Legal Notice
          </Typography>

          <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.8, fontSize: '0.85rem' }}>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Publisher:</strong><br/>
            This site is published by Unforkable<br/>
            Limited liability company (SARL)<br/>
            Share capital: €1,500<br/>
            Registered office: 1 Place Jules Verne, 49000 ANGERS, France<br/>
            907 896 286 R.C.S. Angers<br/>
            Intra-community VAT: FR68907896286<br/>
            Email: contact_AT_unforkable.co<br/>
            Publication director: Unforkable
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Hosting:</strong><br/>
            The site is hosted by Netlify<br/>
            Address: 44 Montgomery St Suite 300, San Francisco, California 94104, US
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Terms of Use</strong><br/>
            <em>Purpose of the site:</em> This site presents the activities of Unforkable. It allows users to get in touch via a contact form.
            <br/>
            <em>Intellectual property:</em> The site and each of its components, including but not limited to trademarks, logos, icons, infographics, and photographs, are protected under international intellectual property law. The content on the site is the property of Unforkable or other companies. Any use, reproduction, or representation, by any means and on any medium, of all or part of the site and/or its components is not permitted without the express consent of Unforkable.
            <br/>
            <em>Governing law:</em> These terms are governed by French law. In case of dispute, the competent courts are those of the jurisdiction of the company’s registered office.
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Site Usage</strong><br/>
            <em>Visiting the site:</em> In general, visiting this website does not require you to reveal your identity or provide personal information.
            <br/>
            <em>Cookies:</em> The site does not use any non-essential cookies. Only technical cookies necessary for the proper functioning of the site may be used.
            <br/>
            <em>Contact form usage:</em> Users can send a request via the contact form. The entered data (name, email, message content) is strictly used to respond to the user’s request. It is not reused for other purposes, is not kept beyond the processing period, and is never shared with third parties.
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Privacy Policy</strong><br/>
            <em>Personal data collected:</em> The only personal data collected is via the contact form. No other data is collected automatically (no tracking or advertising cookies).
            <br/>
            <em>Purpose of processing:</em> Data is used exclusively to respond to the request submitted via the contact form.
            <br/>
            <em>Legal basis for processing:</em> In accordance with Article 6 of the GDPR, the legal basis for processing is the explicit consent given by the user at the time the form is submitted.
            <br/>
            <em>Retention period:</em> Data is deleted within a maximum of 3 months after the request is processed.
            <br/>
            <em>User rights:</em> The user may exercise their rights at any time: right of access; right to rectification; right to erasure; right to restriction; right to object. By writing to: legal_AT_unforkable.co
            <br/>
            <em>Data security:</em> The company implements technical and organizational security measures to protect data against any loss, alteration, or unauthorized access.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalPage;


