'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Client Schema
 */
var ClientSchema = new Schema({
	// name: {
	// 	type: String,
	// 	default: '',
	// 	required: 'Please fill Client name',
	// 	trim: true
	// },
	firstName: {
		type: String,
		default: '',
		trim: true
	},
	middleName: {
		type: String,
		default: '',
		trim: true
	},
	lastName: {
		type: String,
		default: '',
		trim: true
	},
	socialSecurityNumber: {
		type: String,
		default: '',
		trim: true
	},
	stateIssuedIdentificationNumber: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Client', ClientSchema);