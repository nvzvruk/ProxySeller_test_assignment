import { ReactNode } from "react";

interface TableProps<TRow> {
  headers: string[];
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

export const TableData = ({ children }: { children: ReactNode }) => (
  <td className="p-2 whitespace-nowrap">{children}</td>
);

export function Table<TRow>(props: TableProps<TRow>) {
  const { headers, rows, renderRow } = props;

  const tableHeads = headers.map((head) => (
    <th key={head} className="p-2 whitespace-nowrap">
      {head}
    </th>
  ));

  const tableRows = rows.map((row) => (
    <tr key={JSON.stringify(row)}>{renderRow(row)}</tr>
  ));

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="font-semibold uppercase text-xs text-left text-gray-400">
          <tr>{tableHeads}</tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100">{tableRows}</tbody>
      </table>
    </div>
  );
}
