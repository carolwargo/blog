import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/ClassesPageComponents/AppAppBar';
import MainContent from '../../components/ClassesPageComponents/MainContent';
import Latest from '../../components/ClassesPageComponents/Latest';
import Footer from '../../components/ClassesPageComponents/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function ExploreClassesPage(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </AppTheme>
  );
}


