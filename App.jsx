import { ChakraProvider } from '@chakra-ui/react';
import Header from './Components/Header';


function App() {
  return (
    <ChakraProvider>
      <Header />
      {/* Aquí puedes agregar el resto del contenido de tu página */}
    </ChakraProvider>
  );
}

export default App;
