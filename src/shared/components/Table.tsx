import { FC, ReactNode, TableHTMLAttributes } from "react";

interface TableProps<TRow> {
  headers: string[];
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

interface TableDataProps extends TableHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  // TODO find out why colSpan isn't included in TableHTMLAttributes<HTMLTableCellElement>
  colSpan?: number;
}

export const TableData: FC<TableDataProps> = ({ children, ...props }) => (
  <td className="p-2 whitespace-nowrap" {...props}>
    {children}
  </td>
);

export function Table<TRow>(props: TableProps<TRow>) {
  const { headers, rows, renderRow } = props;

  const tableHeads = headers.map((head) => (
    <th key={head} className="p-2 whitespace-nowrap">
      {head}
    </th>
  ));

  const tableRows =
    rows.length > 0 ? (
      rows.map((row) => <tr key={JSON.stringify(row)}>{renderRow(row)}</tr>)
    ) : (
      <tr>
        <TableData
          align="center"
          colSpan={headers.length}
          className="font-semibold text-lg text-gray-400 p-6"
        >
          Table is empty
        </TableData>
      </tr>
    );

  return (
    <div className="overflow-x-auto rounded shadow-md p-2 border">
      <table className="table-auto w-full">
        <thead className="font-semibold uppercase text-xs text-left text-gray-400">
          <tr>{tableHeads}</tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">{tableRows}</tbody>
      </table>
    </div>
  );
}
