'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Facility Schema
 */
var FacilitySchema = new Schema({
    // name: {
    // 	type: String,
    // 	default: '',
    // 	required: 'Please fill Facility name',
    // 	trim: true
    // },
    facilityName: {
        type: String,
        default: '',
        trim: true
    },
    facilityStreetAddress: {
        type: String,
        default: '',
        trim: true
    },
    facilityStreetAddress2: {
        type: String,
        default: '',
        trim: true
    },
    facilityCity: {
        type: String,
        default: '',
        trim: true
    },
    facilityState: {
        type: String,
        default: '',
        trim: true
    },
    facilityZip: {
        type: String,
        default: '',
        trim: true
    },
    serviceSupported: {
        type: String,
        default: '',
        trim: true
    },
    facilityRequireCertification: {
        type: Boolean,
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

mongoose.model('Facility', FacilitySchema);