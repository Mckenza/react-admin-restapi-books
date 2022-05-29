import * as React from "react";
import { SimpleForm, TextInput, Create, NumberInput } from "react-admin";

export const NewBook = () => (
    <Create resource="api.books/admin">
        <SimpleForm>
            <TextInput source="title" fullWidth />
            <NumberInput source="year" fullWidth />
            <TextInput source="author" fullWidth />
            <TextInput source="isbn" fullWidth />
        </SimpleForm>
    </Create>
);