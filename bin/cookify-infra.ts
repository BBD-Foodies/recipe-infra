#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CookifyInfraStack } from '../lib/cookify-infra-stack';

const app = new cdk.App();
new CookifyInfraStack(app, 'CookifyInfraStack', {
  apiCertArn: 'arn:aws:acm:eu-west-1:535492056399:certificate/1f7241e0-21f5-4df7-90d4-7c8aca1cb0a0',
  apiDomain: 'api.cookify.projects.bbdgrad.com',
  ec2KeyPairName: 'cookify-ec2-key',
  ghOrgName: 'BBD-Foodies',
  namingPrefix: 'cookify',
  mongoPort: 27017,
  frontEndCertArn: 'arn:aws:acm:us-east-1:535492056399:certificate/173bb3ba-0743-48cb-a5f4-47fe3c00af20',
  frontEndDomain: 'cookify.phipson.co.za',
  configParamName: '/cookify/config'
});