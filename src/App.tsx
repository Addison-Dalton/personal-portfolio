import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from 'scenes/header';
import SectionDivider from 'components/section-divider';
import LandingPage from 'scenes/landing';
import ProjectsPage from 'scenes/projects';

const App = () => {
  return (
    <>
      <Header />
      <Box position="relative" marginBottom={12}>
        <SectionDivider />
      </Box>
      <Box
        as="main"
        width="100%"
        maxWidth="1100px"
        margin="0 auto"
        padding={5}
        position="relative"
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Box>
      {/* TODO footer */}
    </>
  );
};

export default App;
