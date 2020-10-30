module.exports = {
  user: process.env.NODE_ORACLEDB_USER || "biviews",
  password: process.env.NODE_ORACLEDB_PASSWORD || "BI7789x3",
  connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "192.168.8.2/WTNDJP"
  // externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};