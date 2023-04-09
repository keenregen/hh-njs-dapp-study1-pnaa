require("dotenv").config();

// to read the data
export const readHeader = {
  "Content-Type": "application/json",
};

// to get cid
export const getHeader = {
  headers: {
    pinata_api_key: process.env.PnaaApiKey,
    pinata_secret_api_key: process.env.PnaaApiScr,
  },
};

// to seend the data
export const sendJsonHeader = {
  headers: {
    "Content-Type": "application/json",
    pinata_api_key: process.env.PnaaApiKey,
    pinata_secret_api_key: process.env.PnaaApiScr,
  },
};
