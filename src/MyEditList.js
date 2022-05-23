import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const MyEditList = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title"></TextInput>
            <TextInput source="year"></TextInput>
            <TextInput source="author"></TextInput>
            <TextInput source="isbn"></TextInput>
        </SimpleForm>
    </Edit>
);