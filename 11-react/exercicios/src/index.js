import React from 'react';
import ReactDOM from 'react-dom';

//primeiro.jsx
//import Primeiro from './componentes/Primeiro';
//const elemento = <h1>React</h1>;

//bomdia.jsx
//import BomDia from './componentes/BomDia';
//ReactDOM.render(<BomDia nome="guilherme" />, document.getElementById('root'))

//multiplos.jsx
import {BoaTarde, BoaNoite} from "./componentes/Multiplos";

ReactDOM.render(<div>
	<BoaTarde nome="ana" />
	<BoaNoite nome="bia"/>
	</div>, document.getElementById('root'))

