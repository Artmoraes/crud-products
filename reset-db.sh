#!/bin/bash

tsc
sequelize-cli db:drop
sequelize-cli db:create
sequelize-cli db:migrate
sequelize-cli db:seed:all
