import type { Meta, StoryObj } from "@storybook/react";
import { AMTable } from './AMTable';
import type { Column } from './AMTable';

const meta = {
  title: 'Table',
  component: AMTable,
} satisfies Meta<typeof AMTable>;

export default meta;
type Story = StoryObj<typeof meta>;




const columns = [
  {
    header: 'Asset',
    key: 'asset',
  },
  {
    header: 'Allocation',
    key: 'allocation',
  },
] as const satisfies Column[];

type ColumnKey = typeof columns[number]['key'];

type TestData = {
  [key in ColumnKey]: string;
}

const data: TestData[] = [
  {
    asset: 'John Doe',
    allocation: 'New York',
  },
  {
    asset: 'Jane Smith',
    allocation: 'Los Angeles',
  },
  {
    asset: 'Bob Johnson',
    allocation: 'Chicago',
  },
]

export const BaseTabs: Story = {
  args: {
    columns,
    data
  },
};




const fartherColumns = [
  { key: 'property' },
  { key: 'value' },
] as const satisfies Column[];


// GET /portfolio/:portfolioId 123
const farterData = {
  riskLevel: 69,
  type: 'Tax-advantaged',
  created: "2023-9-13"
}

const fartherTableData = Object.entries(farterData).map(
  ([key, value]) => ({ property: key, value: value.toString() }));

export const FartherData: Story = {
  args: {
    columns: fartherColumns,
    data: fartherTableData,
  }
}

// GET /portfolio/:portfolioId/performance/:timeSpan 123
const timeSpan = ["1Y", "3Y", "5Y", "10Y"] as const;

const respostaTimeSpamp = {
  "twr": 15.75
}



// como esta alocado o portfolio
