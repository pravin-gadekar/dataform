
const scd = require("dataform-scd");

scd("source_data_meals_scd", {
  // A unique identifier for rows in the table.
  uniqueKey: "meal_id",
  // A field that stores a timestamp or date of when the row was last changed.
  timestamp: "date",
    // A field that stores the hash value of the fields that we want to track changes in. If you do not want to use the hash comparison, you may omit this field or set it to null
    // The source table to build slowly changing dimensions from.
    source: {
      schema: "raw",
      name: "meals",
  },
  columns: {meal_id: "meal_id", calories: "calories", date: "ingestion date"},

  // Any configuration parameters to apply to the incremental table that will be created.
  incrementalConfig: {
    bigquery: {
      partitionBy: "date",
    },
  },
});

