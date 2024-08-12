"use strict"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type AMTabProp<T extends string> = {
  trigger: T;
  content: React.ReactNode
}

// and same for the defaultValue
type AMTabsProps<T extends string> = {
  tabs: AMTabProp<T>[],
  defaultValue?: T
}

export function AMTab<T extends string>({ tabs, defaultValue }: AMTabsProps<T>) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0].trigger} className="w-full">
      <TabsList className={`w-full flex flex-row`}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.trigger} value={tab.trigger}>{tab.trigger}</TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.trigger} value={tab.trigger} className="content-center text-center">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

const Example = ({ label }: { label: string }) =>
  <div>{label}</div>

function labelTransformer(i: number) {
  return `Tab ${i + 1}` as const;
}

type AccordionLabel = ReturnType<typeof labelTransformer>

export const tabsText: AMTabProp<AccordionLabel>[] = [
  {
    trigger: labelTransformer(1),
    content: <Example label={labelTransformer(1)} />,
  },
  {
    trigger: labelTransformer(1),
    content: <Example label={labelTransformer(1)} />,
  }
]
