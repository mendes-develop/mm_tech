import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableTitle,
} from "@/components/ui/table"

export type Column = {
  header?: string;
  key: string;
}

type AMTableProps = {
  columns: Column[];
  data: Record<string, string>[];
}

export const AMTable = ({ columns, data }: AMTableProps) => {
  return (
    <Table>
      <TableTitle>Table</TableTitle>
      <TableHeader>
        <TableRow>
          {columns.map((column, i) => column.header && (
            <TableHead
              className={i === columns.length - 1 ? "text-right" : "text-left"}
              key={column.header}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow>
            {columns.map((column, i) => (
              <TableCell
                className={i === columns.length - 1 ? "text-right" : "text-left"}
                key={column.header}>{row[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
