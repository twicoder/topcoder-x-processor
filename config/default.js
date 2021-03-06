/*
 * Copyright (c) 2017 TopCoder, Inc. All rights reserved.
 */
'use strict';
const fs = require('fs');
/**
 * This module is the configuration of the app.
 * Changes in 1.1:
 * - changes related to https://www.topcoder.com/challenges/30060466
 * @author TCSCODER
 * @version 1.1
 */
/* eslint-disable */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PARTITION: process.env.PARTITION || 0,
  TOPIC: process.env.TOPIC || 'tc-x-events',
  KAFKA_OPTIONS: {
    connectionString: process.env.KAFKA_URL || 'localhost:9092',
    ssl: {
      cert: process.env.KAFKA_CLIENT_CERT || fs.readFileSync('./kafka_client.cer'), // eslint-disable-line no-sync
      key: process.env.KAFKA_CLIENT_CERT_KEY || fs.readFileSync('./kafka_client.key'), // eslint-disable-line no-sync
      passphrase: 'secret', // NOTE:* This configuration specifies the private key passphrase used while creating it.
    }
  },
  TC_DEV_ENV: process.env.NODE_ENV === 'production' ? false : true,
  NEW_CHALLENGE_TEMPLATE: process.env.NEW_CHALLENGE_TEMPLATE || {
    milestoneId: 1,
    subTrack: 'FIRST_2_FINISH',
    reviewType: 'COMMUNITY',
    technologies: [],
    platforms: [],
    finalDeliverableTypes: [],
    confidentialityType: 'PUBLIC',
    submissionGuidelines: 'Upload the updated code to TopCoder',

    // From here, the properties will be set by the processor.
    // Just leave them here for readability
    name: null,
    projectId: null,
    registrationStartDate: null,
    registrationStartsAt: null,

    // NOTE: if subTrack is FIRST_2_FINISH,
    // the ***EndsAt will be set automatically by TC APIs
    registrationEndsAt: null,
    submissionEndsAt: null,
    detailedRequirements: null,
    prizes: null
  },

  // NOTE: if subTrack is FIRST_2_FINISH,
  // this config has no effect since the ***EndsAt will be set automatically by TC APIs
  NEW_CHALLENGE_DURATION_IN_DAYS: process.env.NEW_CHALLENGE_DURATION_IN_DAYS || 5,
  // node mailer option
  NODE_MAILER_OPTIONS: {
    host: process.env.SMTP_HOST || process.env.MAILGUN_SMTP_SERVER || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || process.env.MAILGUN_SMTP_POR || 465,
    secure: process.env.SMTP_IS_SECURE || true,
    auth: {
      user: process.env.SMTP_USERNAME || process.env.MAILGUN_SMTP_LOGIN || '',
      pass: process.env.SMTP_PASSWORD || process.env.MAILGUN_SMTP_PASSWORD || ''
    }
  },
  EMAIL_SENDER_ADDRESS: process.env.EMAIL_SENDER_ADDRESS || '',
  ISSUE_BID_EMAIL_RECEIVER: process.env.ISSUE_BID_EMAIL_RECEIVER || '',
  TC_URL: process.env.TC_URL || 'https://www.topcoder-dev.com',
  GITLAB_API_BASE_URL: process.env.GITLAB_API_BASE_URL || 'https://gitlab.com',
  PAID_ISSUE_LABEL: process.env.PAID_ISSUE_LABEL || 'tcx_Paid',
  FIX_ACCEPTED_ISSUE_LABEL: process.env.FIX_ACCEPTED_ISSUE_LABEL || 'tcx_FixAccepted',
  READY_FOR_REVIEW_ISSUE_LABEL: process.env.READY_FOR_REVIEW_ISSUE_LABEL || 'tcx_ReadyForReview',
  ASSIGNED_ISSUE_LABEL: process.env.READY_FOR_REVIEW_ISSUE_LABEL || 'tcx_Assigned',
  OPEN_FOR_PICKUP_ISSUE_LABEL: process.env.READY_FOR_REVIEW_ISSUE_LABEL || 'tcx_OpenForPickup',
  NOT_READY_ISSUE_LABEL: process.env.NOT_READY_ISSUE_LABEL || 'tcx_NotReady',
  CANCELED_ISSUE_LABEL: process.env.CANCELED_ISSUE_LABEL || 'tcx_Canceled',
  TC_OR_DETAIL_LINK: process.env.TC_OR_DETAIL_LINK || 'https://software.topcoder-dev.com/review/actions/ViewProjectDetails?pid=',
  RETRY_COUNT: process.env.RETRY_COUNT || 2,
  RETRY_INTERVAL: process.env.RETRY_INTERVAL || 120000, // 2 minutes
  CANCEL_CHALLENGE_INTERVAL: process.env.CANCEL_CHALLENGE_INTERVAL || 24 * 60 * 60 * 1000, // 24 Hours
  DYNAMODB: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    IS_LOCAL: process.env.IS_LOCAL
  },
  // Configuration for m2m token generation
  AUTH0_URL: process.env.AUTH0_URL, // Auth0 credentials for Submission Service
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME || 43200,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL
};
