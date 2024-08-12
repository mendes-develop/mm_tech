import { tableLines } from "../GetPortfolio/Get.PortfolioId";
import { Table } from "../Table";


export const Portfolio = () => (
  <>
    <Table.Root>
      {tableLines.map((line, index) => (
        <Table.Line key={index}>
          <div className="">
            {line?.label}
          </div>
          <div className="">
            {line?.value}
          </div>
        </Table.Line>
      ))}
    </Table.Root>
  </>
)