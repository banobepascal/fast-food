import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../server';
import mockData from './utils/mockData';

chai.use(chaiHttp);
chai.expect();

/**
   * @description tests creation of users on v2 to the db
   * @param {object} req - The Request Object
   * @param {object} res - The Response Object
   * @returns {object} JSON API Response
   */

describe('Creating a user', () => {
  describe('POST /user/api/signup', () => {
    beforeEach('Sign up user', (done) => {
      chai
        .request(app)
        .post('/api/v1/signup')
        .send(mockData.goodUser)
        .end((error) => {
          if (error) done(error);
          done();
        });
    });
    it('should signup user', (done) => {
      chai
        .request(app)
        .post('/user/api/signup')
        .send(mockData.goodUser)
        .end((err, res) => {
          expect(res.status).to.equals(201);
          done();
        });
    });
  });
});
