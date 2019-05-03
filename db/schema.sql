-- Drops the viatech if it exists currently --
DROP DATABASE IF EXISTS viatech;
-- Creates the "viatech" database --
CREATE DATABASE viatech;


/*
this went in config file as a 'fix', but isn't neccesary
  },
  "dialectOptions": {
    "socketPath": "/var/run/mysqld/mysqld.sock"
  },
*/