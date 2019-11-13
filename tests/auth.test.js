import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';
import mockData from './utils/mockData';

chai.use(chaiHttp);
chai.expect();

describe('Creating a user', () => {
  describe('POST /user/api/signup', () => {
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
