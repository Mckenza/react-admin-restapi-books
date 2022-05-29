import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    NumberInput,
} from 'react-admin';

export const MyEditList = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title"></TextInput>
            <NumberInput source="year"></NumberInput>
            <TextInput source="author"></TextInput>
            <TextInput source="isbn"></TextInput>
        </SimpleForm>
    </Edit>
);