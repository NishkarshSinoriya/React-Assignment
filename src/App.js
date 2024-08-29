import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('One');

  const renderContent = () => {
    switch (activeTab) {
      case 'One':
        return <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed ac quam ut tortor consectetur pretium. Vestibulum congue sodales augue, 
          quis mattis enim pulvinar a. In at iaculis magna. Suspendisse quis rhoncus magna. 
          Duis ac nulla eros. Mauris tincidunt enim tortor, at aliquam urna tempor quis. 
          Vestibulum tempor consectetur mi, eu tincidunt justo fringilla semper. 
          Cras quis risus est. Maecenas odio est, pulvinar sit amet lacus in, 
          maximus efficitur augue. Etiam sagittis eros at neque accumsan, 
          non faucibus risus fringilla. Duis vel nibh tempus lorem consectetur 
          lobortis vel eu eros. Curabitur iaculis fermentum tincidunt. 
          In dapibus venenatis augue, in consequat tellus scelerisque quis. 
          Etiam gravida eleifend leo, vulputate hendrerit leo placerat ut.
        </div>;
      case 'Two':
        return <div>Nunc quis congue risus. Morbi vestibulum, 
          elit sed sodales scelerisque, nisi ligula venenatis tellus, 
          semper molestie enim ligula sit amet eros. Proin euismod blandit ligula, 
          eget finibus odio vehicula in. Morbi metus lectus, viverra finibus elementum at, 
          eleifend eget nunc. Duis mattis luctus lorem sed accumsan. Vivamus ac ullamcorper turpis, 
          eu maximus dolor. Nullam ac interdum urna. Praesent nec lacus et arcu ultrices bibendum sit amet quis tortor. 
          Donec id mauris id diam accumsan euismod id non justo. Etiam sollicitudin nunc quis ornare suscipit. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>;
      case 'Three':
        return <div>Morbi massa velit, rhoncus eget risus id, 
          vestibulum posuere magna. In pulvinar nisi eu ornare porttitor. 
          Curabitur finibus augue felis, nec lacinia dui ultrices at. 
          Nulla facilisi. Donec elementum eu nisi eu rutrum. 
          Vivamus tincidunt tempor tellus, eget scelerisque massa.
           Sed pretium nec lectus eget sagittis. Cras id cursus dolor.
            Donec rhoncus placerat metus ac viverra. Donec tincidunt tempor sodales. 
          Curabitur quis ante mi.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header setActiveTab={setActiveTab} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
}

export default App;
