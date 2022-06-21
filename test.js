const clickhosue = require("./clickhouse");
const dayjs = require("dayjs");

async function main() {
	const start = Date.now();
	const startDate = dayjs().startOf("year").format("YYYY-MM-DD HH:mm:ss");
	const endDate = dayjs()
		.subtract(3, "month")
		.endOf("month")
		.format("YYYY-MM-DD HH:mm:ss");

	const result = await clickhosue
		.query(
			"SELECT * FROM accounting WHERE start_at >= {start:DateTime} AND start_at < {end:DateTime};",
			{
				params: {
					start: startDate,
					end: endDate,
				},
			}
		)
		.toPromise();

	const end = Date.now();
	console.log(result);
	console.log(end - start);
}

main();
