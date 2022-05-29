import * as React from "react";
import { Admin, Resource} from 'react-admin';
import MyList from "./MyList";
import { MyEditList } from "./MyEditList";
import dataProvider from "./dataProvider";
import { NewBook } from './NewBook';

const dataProv = dataProvider;


const App = () => (
  <Admin dataProvider={dataProv}>
    <Resource name="api.books/admin" list={MyList} edit={MyEditList} create={NewBook}/>
    
  </Admin>
);

export default App;







/*
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
*/