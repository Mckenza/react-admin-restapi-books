// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import crudProvider from 'ra-data-nestjsx-crud';
import MyList from "./MyList";
import { MyEditList } from "./MyEditList";
import dataProvider from "./dataProvider";
//import jsonServerProvider from 'ra-data-json-server';

const dataProv = dataProvider; //crudProvider('http://localhost:3000');


const App = () => (
  <Admin dataProvider={dataProv}>
    <Resource name="api.books" list={MyList} edit={MyEditList}/>
  </Admin>
);

export default App;