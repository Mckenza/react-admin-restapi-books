import React from "react";
import { Datagrid, List, TextField, EditButton } from "react-admin";

export default () => {

    return(
        <List>
            <Datagrid>
                <TextField source="_id"></TextField>
                <TextField source="title"></TextField>
                <TextField source="year"></TextField>
                <TextField source="author"></TextField>
                <TextField source="isbn"></TextField>
                <EditButton />
            </Datagrid>
        </List>
    )
}