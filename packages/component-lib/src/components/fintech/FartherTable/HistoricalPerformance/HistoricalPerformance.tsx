import { historicalPerformance, timeSpan } from "../GetPortfolio/Get.portfolioPerformance"
import { objectKeys } from "../GetPortfolio/utils"
import { Table } from "../Table"

const texts = {
  header: "Historical Performance",
}

export const HistoricalPerformance = () => {
  return (
    <Table.Root>
      <Table.Title>
        <div>{texts.header}</div>
        <div>{historicalPerformance}</div>
      </Table.Title>
      <Table.Footer>
        <div className="flex justify-end gap-4">
          {objectKeys(timeSpan).map((timeSpan) => (
            <button className="border rounded-lg px-3" key={timeSpan}>{timeSpan}</button>
          ))}
        </div>
      </Table.Footer>
    </Table.Root>
  )
}
