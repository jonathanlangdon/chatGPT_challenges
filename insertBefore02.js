// Create a function that uses `insertBefore` to insert a new table row as the first row of a table with the ID `#data-table` in your HTML document.

function insertTableRow() {
  const table = document.querySelector('#data-table')
  const newRow = document.createElement('tr')
  table.insertBefore(newRow, table.firstChild)
}
