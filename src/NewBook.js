import * as React from "react";
import { SimpleForm, TextInput, Create } from "react-admin";

export const NewBook = () => (
    <Create resource="api.books">
        <SimpleForm>
            <TextInput source="title" fullWidth />
            <TextInput source="year" fullWidth />
            <TextInput source="author" fullWidth />
            <TextInput source="isbn" fullWidth />
        </SimpleForm>
    </Create>
);