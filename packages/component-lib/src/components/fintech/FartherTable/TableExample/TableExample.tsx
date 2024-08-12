import { Table } from '../Table'

export const TableExample = () => {
  return (<Table.Root>
    {/* Table Title */}
    <Table.Title>
      <div className="">
        Table Title
      </div>
      <div className="">
        9 Securities
      </div>
    </Table.Title>

    {/* Table SubtitleTitle */}
    <Table.Subtitle>
      <p className="border p-1 rounded-sm text-xs">
        Show DIrect Indexed
      </p>
    </Table.Subtitle>

    {/* Table Line */}
    <Table.Line>
      <div className="">
        Risk Level
      </div>
      <div className="">
        Aggressive
      </div>
    </Table.Line>

    <Table.Header>
      <thead className="">
        Asset
      </thead>
      <thead className="">
        Allocation
      </thead>
    </Table.Header>

    {/* Table Body */}
    <Table.Body>
      {/* Table Body Row */}
      <Table.Row>
        {/* Table Data */}
        <td className="">
          US Large Cap
        </td>
        <td className="">
          58.80%
        </td>
      </Table.Row>

      <Table.Footer>
        <td className="">
          Total
        </td>
        <td className="">
          98.00%
        </td>
      </Table.Footer>
    </Table.Body>

  </Table.Root>
  )
}
