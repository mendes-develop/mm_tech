import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type AMTabProp = {
  trigger: string
  content: React.ReactNode
}

type AMTabsProps = {
  tabs: AMTabProp[],
  defaultValue?: string
}

export function AMTab({ tabs, defaultValue }: AMTabsProps) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0]?.trigger} className="w-full">
      <TabsList className={`grid w-full grid-cols-${tabs.length}`}>
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
