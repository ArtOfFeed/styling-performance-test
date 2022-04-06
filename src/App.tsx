import React from 'react';
import './App.css';

import { Atlassian } from './components/atlassian';
import { Adobe } from './components/adobe';
import { Material } from './components/material';
import { Chakra } from './components/chakra';
import { Microsoft } from './components/microsoft'

type Frameworks = 'none' | 'atlassian' | 'adobe' | 'material' | 'microsoft' | 'chakra';
const renders = 50;

const App = () => {
  const [framework, setFramework] = React.useState<Frameworks>('none');
  const thousand = Array(renders).fill(0);

  const chooseFrameWork = (fwk: Frameworks) => {
    switch (fwk) {
      case 'atlassian':
        return <Atlassian />
      case 'adobe':
        return <Adobe />
      case 'material':
        return <Material />
      case 'microsoft':
        return <Microsoft />
      case 'chakra':
        return <Chakra />
      default:
        return 'No framework'
    }
  }

  return (
    <div className="App">
      <button id="none" onClick={() => setFramework('none')}>None</button>
      <button id="atlassian" onClick={() => setFramework('atlassian')}> Atlassian</button>
      <button id="adobe" onClick={() => setFramework('adobe')}>Adobe</button>
      <button id="material" onClick={() => setFramework('material')}> Material</button>
      <button id="microsoft" onClick={() => setFramework('microsoft')}>Microsoft</button>
      <button id="chakra" onClick={() => setFramework('chakra')}>Chakra</button>

      {/* {
        framework === 'atlassian' ? <div id="root">
          {thousand.map((_, i) => (<Atlassian key={i} />))}
        </div>
          : framework === 'adobe' ? <div id="root">
            {thousand.map((_, i) => (<Chakra key={i} />))}
          </div>
            : <div>Select a Framework</div>
      } */}
      {
        framework === 'none' ? <div id="root">Choose framework</div> :
        <div id="root">
          {thousand.map((_, i) => (chooseFrameWork(framework)))}
        </div>
      }
    </div>
  );
}

export default App;
