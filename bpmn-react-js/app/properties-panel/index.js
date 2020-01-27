import ReactDOM from 'react-dom';
import React from 'react';
import PropertiesView from './PropertiesView';
import Componente from '../components/Componente'

export default class PropertiesPanel {

  constructor(options) {

    const {
      modeler,
      container
    } = options;

    ReactDOM.render(
      //<Componente />
      <PropertiesView modeler={ modeler } />,
      container
    );
  }
}


