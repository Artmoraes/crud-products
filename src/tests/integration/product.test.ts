require('dotenv').config(); // Corrected dotenv import
const PORT = process.env.SERVER_PORT || 3001;

const app = `http://localhost:${PORT}`;
const chai = require("chai");
const { describe, it } = require("node:test");

const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

describe('Usando o método GET em /products', function () {
  it('Retorna a lista completa de produtos!', async function () {
    const response = await chai.request(app).get("/products");
    console.log("response ", response);
    expect(response.status).to.be.equal(400);
  });
});
