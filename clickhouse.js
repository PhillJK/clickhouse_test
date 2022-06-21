require("dotenv").config();
const { ClickHouse } = require("clickhouse");

module.exports = new ClickHouse({
	url: process.env.CLICKHOUSE_URL,
	port: process.env.CLICKHOUSE_PORT,
	config: {
		database: process.env.CLICKHOUSE_DB,
	},
});
