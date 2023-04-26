/// <reference path="./crud.d.ts" />
// This line imports the crud.d.ts file, which contains the definitions for the RowID and RowElement interfaces.

import { RowID, RowElement } from './interface';
// This line imports the RowID and RowElement interfaces from the interface file.

import * as CRUD from './crud';
// This line imports all the functions from the crud file into the global namespace.

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
}
// This line creates a RowElement object with the firstName and lastName properties.

const newRowID: RowID = CRUD.insertRow(row);
// This line calls the insertRow function to insert the row into the database.
// The insertRow function returns the ID of the newly inserted row.

const updatedRow: RowElement = {age: 23, ...row};
// This line creates a new RowElement object with the age property added to the existing row object.

CRUD.updateRow(newRowID, updatedRow);
// This line calls the updateRow function to update the row in the database.
// The updateRow function takes the ID of the row to update and the new row object as parameters.

CRUD.deleteRow(newRowID);
// This line calls the deleteRow function to delete the row from the database.
// The deleteRow function takes the ID of the row to delete as a parameter.
