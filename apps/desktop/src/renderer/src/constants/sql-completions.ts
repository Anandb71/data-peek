export type SqlFunctionCompletion = {
  name: string
  signature: string
  description: string
}

// SQL Functions for autocomplete
export const SQL_FUNCTIONS: SqlFunctionCompletion[] = [
  // Aggregate functions
  { name: 'COUNT', signature: 'COUNT(expression)', description: 'Returns the number of rows' },
  { name: 'SUM', signature: 'SUM(expression)', description: 'Returns the sum of values' },
  { name: 'AVG', signature: 'AVG(expression)', description: 'Returns the average value' },
  { name: 'MIN', signature: 'MIN(expression)', description: 'Returns the minimum value' },
  { name: 'MAX', signature: 'MAX(expression)', description: 'Returns the maximum value' },
  {
    name: 'GROUP_CONCAT',
    signature: 'GROUP_CONCAT(expression)',
    description: 'Concatenates values from a group'
  },
  // String functions
  { name: 'CONCAT', signature: 'CONCAT(str1, str2, ...)', description: 'Concatenates strings' },
  {
    name: 'SUBSTRING',
    signature: 'SUBSTRING(str, start, length)',
    description: 'Extracts a substring'
  },
  { name: 'UPPER', signature: 'UPPER(str)', description: 'Converts to uppercase' },
  { name: 'LOWER', signature: 'LOWER(str)', description: 'Converts to lowercase' },
  { name: 'TRIM', signature: 'TRIM(str)', description: 'Removes leading/trailing whitespace' },
  { name: 'LENGTH', signature: 'LENGTH(str)', description: 'Returns string length' },
  { name: 'REPLACE', signature: 'REPLACE(str, from, to)', description: 'Replaces occurrences' },
  {
    name: 'COALESCE',
    signature: 'COALESCE(val1, val2, ...)',
    description: 'Returns first non-null value'
  },
  {
    name: 'NULLIF',
    signature: 'NULLIF(val1, val2)',
    description: 'Returns null if values are equal'
  },
  { name: 'IFNULL', signature: 'IFNULL(val, default)', description: 'Returns default if null' },
  // Date functions
  { name: 'NOW', signature: 'NOW()', description: 'Returns current timestamp' },
  { name: 'DATE', signature: 'DATE(expression)', description: 'Extracts date part' },
  { name: 'TIME', signature: 'TIME(expression)', description: 'Extracts time part' },
  { name: 'DATETIME', signature: 'DATETIME(expression)', description: 'Creates datetime value' },
  { name: 'STRFTIME', signature: 'STRFTIME(format, datetime)', description: 'Formats datetime' },
  // Math functions
  { name: 'ABS', signature: 'ABS(number)', description: 'Returns absolute value' },
  { name: 'ROUND', signature: 'ROUND(number, decimals)', description: 'Rounds a number' },
  { name: 'CEIL', signature: 'CEIL(number)', description: 'Rounds up to nearest integer' },
  { name: 'FLOOR', signature: 'FLOOR(number)', description: 'Rounds down to nearest integer' },
  { name: 'RANDOM', signature: 'RANDOM()', description: 'Returns random number' },
  // Type functions
  { name: 'TYPEOF', signature: 'TYPEOF(expression)', description: 'Returns the type of value' },
  {
    name: 'CAST',
    signature: 'CAST(expression AS type)',
    description: 'Converts to specified type'
  },
  // SQLite specific
  { name: 'PRINTF', signature: 'PRINTF(format, ...)', description: 'Formatted string output' },
  { name: 'INSTR', signature: 'INSTR(str, substr)', description: 'Returns position of substring' },
  { name: 'GLOB', signature: 'GLOB(pattern, str)', description: 'Pattern matching with glob' },
  { name: 'HEX', signature: 'HEX(value)', description: 'Returns hex representation' },
  { name: 'QUOTE', signature: 'QUOTE(value)', description: 'Returns SQL literal' },
  { name: 'ZEROBLOB', signature: 'ZEROBLOB(n)', description: 'Returns n-byte blob of zeros' },
  { name: 'JSON', signature: 'JSON(value)', description: 'Validates and minifies JSON' },
  {
    name: 'JSON_EXTRACT',
    signature: 'JSON_EXTRACT(json, path)',
    description: 'Extracts value from JSON'
  },
  { name: 'JSON_ARRAY', signature: 'JSON_ARRAY(...)', description: 'Creates JSON array' },
  { name: 'JSON_OBJECT', signature: 'JSON_OBJECT(...)', description: 'Creates JSON object' },
  // ClickHouse specific
  {
    name: 'uniq',
    signature: 'uniq(x[, ...])',
    description: 'Approximate number of distinct values'
  },
  {
    name: 'uniqExact',
    signature: 'uniqExact(x[, ...])',
    description: 'Exact number of distinct values'
  },
  {
    name: 'uniqCombined',
    signature: 'uniqCombined(x[, ...])',
    description: 'Approximate distinct count using less memory'
  },
  {
    name: 'quantile',
    signature: 'quantile(level)(expr)',
    description: 'Approximate quantile of a numeric sequence'
  },
  {
    name: 'quantiles',
    signature: 'quantiles(level1, level2, ...)(expr)',
    description: 'Approximate quantiles at several levels'
  },
  { name: 'argMax', signature: 'argMax(arg, val)', description: 'Argument for the maximum value' },
  { name: 'argMin', signature: 'argMin(arg, val)', description: 'Argument for the minimum value' },
  { name: 'any', signature: 'any(column)', description: 'First encountered value' },
  { name: 'anyLast', signature: 'anyLast(column)', description: 'Last encountered value' },
  {
    name: 'countIf',
    signature: 'countIf(cond)',
    description: 'Counts rows where the condition is true'
  },
  {
    name: 'sumIf',
    signature: 'sumIf(column, cond)',
    description: 'Sums values where the condition is true'
  },
  {
    name: 'avgIf',
    signature: 'avgIf(x, cond)',
    description: 'Averages values where the condition is true'
  },
  {
    name: 'groupArray',
    signature: 'groupArray(x)',
    description: 'Creates an array of argument values'
  },
  {
    name: 'groupUniqArray',
    signature: 'groupUniqArray(x)',
    description: 'Array of distinct argument values'
  },
  {
    name: 'topK',
    signature: 'topK(N)(column)',
    description: 'Approximately most frequent values'
  },
  {
    name: 'toStartOfDay',
    signature: 'toStartOfDay(datetime)',
    description: 'Rounds down to the start of the day'
  },
  {
    name: 'toStartOfHour',
    signature: 'toStartOfHour(datetime)',
    description: 'Rounds down to the start of the hour'
  },
  {
    name: 'toStartOfMonth',
    signature: 'toStartOfMonth(value)',
    description: 'Rounds down to the first day of the month'
  },
  {
    name: 'toStartOfWeek',
    signature: 'toStartOfWeek(datetime[, mode[, timezone]])',
    description: 'Rounds down to the start of the week'
  },
  {
    name: 'toStartOfInterval',
    signature: 'toStartOfInterval(value, INTERVAL x unit[, time_zone])',
    description: 'Rounds down to the start of an interval'
  },
  { name: 'toDate', signature: 'toDate(x)', description: 'Converts a value to Date' },
  {
    name: 'toDateTime',
    signature: 'toDateTime(expr[, time_zone])',
    description: 'Converts a value to DateTime'
  },
  {
    name: 'toDateTime64',
    signature: 'toDateTime64(expr, scale[, timezone])',
    description: 'Converts a value to DateTime64'
  },
  {
    name: 'toUnixTimestamp',
    signature: 'toUnixTimestamp(date[, timezone])',
    description: 'Converts a value to a Unix timestamp'
  },
  {
    name: 'formatDateTime',
    signature: 'formatDateTime(datetime, format[, timezone])',
    description: 'Formats a date or time as text'
  },
  {
    name: 'dateDiff',
    signature: 'dateDiff(unit, startdate, enddate[, timezone])',
    description: 'Counts unit boundaries between two dates'
  },
  {
    name: 'arrayJoin',
    signature: 'arrayJoin(arr)',
    description: 'Unfolds an array into one row per element'
  },
  {
    name: 'arrayMap',
    signature: 'arrayMap(func, arr)',
    description: 'Applies a lambda to each array element'
  },
  {
    name: 'arrayFilter',
    signature: 'arrayFilter(func, source_arr[, cond_arr, ...])',
    description: 'Keeps array elements where a lambda is true'
  },
  {
    name: 'has',
    signature: 'has(arr, elem)',
    description: 'Checks whether an array contains an element'
  },
  {
    name: 'if',
    signature: 'if(cond, then, else)',
    description: 'Returns then or else based on a condition'
  },
  {
    name: 'multiIf',
    signature: 'multiIf(cond_1, then_1, cond_2, then_2, ..., else)',
    description: 'Returns the branch for the first true condition'
  }
]

// SQL Data types
export const SQL_TYPES = [
  'INTEGER',
  'INT',
  'SMALLINT',
  'BIGINT',
  'TINYINT',
  'REAL',
  'FLOAT',
  'DOUBLE',
  'DECIMAL',
  'NUMERIC',
  'TEXT',
  'VARCHAR',
  'CHAR',
  'CLOB',
  'STRING',
  'BLOB',
  'BINARY',
  'VARBINARY',
  'BOOLEAN',
  'BOOL',
  'DATE',
  'TIME',
  'DATETIME',
  'TIMESTAMP',
  'JSON',
  'UUID',
  // ClickHouse specific
  'UInt8',
  'UInt16',
  'UInt32',
  'UInt64',
  'UInt128',
  'UInt256',
  'Int8',
  'Int16',
  'Int32',
  'Int64',
  'Int128',
  'Int256',
  'Float32',
  'Float64',
  'Decimal32',
  'Decimal64',
  'Decimal128',
  'Decimal256',
  'Date32',
  'DateTime64',
  'LowCardinality',
  'Nullable',
  'Array',
  'Map',
  'Tuple',
  'Enum8',
  'Enum16'
]
