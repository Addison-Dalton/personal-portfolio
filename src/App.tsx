import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from './scenes/header';
import SectionDivider from './components/section-divider';
import Landing from './scenes/landing';

const App = () => {
  return (
    <>
      <Header />
      <Box position="relative">
        <SectionDivider />
      </Box>
      <Box
        as="main"
        width="100%"
        maxWidth="1100px"
        margin="0 auto"
        position="relative"
      >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Box>
      {/* TODO footer */}
    </>
  );
};

export default App;
