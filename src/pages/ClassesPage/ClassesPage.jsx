import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from '../../components/ExploreClassesComponents/AppAppBar';
import MainContent from '../../components/ExploreClassesComponents/MainContent';
import Latest from '../../components/ExploreClassesComponents/Latest';
import Footer from '../../components/ExploreClassesComponents/Footer';
import "bootstrap/dist/css/bootstrap.min.css"; 

export default function ClassesPage(props) {
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
        <Footer />
      </Container>
    </AppTheme>
  );
}


