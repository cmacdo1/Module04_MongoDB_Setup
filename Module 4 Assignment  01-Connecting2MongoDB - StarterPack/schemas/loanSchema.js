//--------------------------------------------------------------------------------------
// Author: Chris MacDonald
// Date: February 25, 2023
// Class: IFT 458
// Description: Loan Schema depicting the fields needed and their respective data types
//--------------------------------------------------------------------------------------

import mongoose from 'mongoose';
const {Schema} = mongoose;

const loanSchema = new Schema({
    id: ObjectId, // ObjectId is used for unique identifiers and is a class
    customerName: String, // String can accept multiple characters, numbers and special characters such as spaces and tabs
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Decimal128,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: {type: Date, default: Date.now}, // Date.now will generate the current date based on your OS timezone
    insertedDate: {type: Date, default: Date.now}
});