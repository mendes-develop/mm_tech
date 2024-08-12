
const Root = ({ children }: { children: React.ReactNode }) => (
  <div className="border border-slate-300 rounded-sm">
    {children}
  </div>
)

const Title = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 flex justify-between bg-slate-200  rounded-t-sm border-b">
    {children}
  </div>
)

const Subtitle = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between py-2 px-4 border-y ">
    {children}
  </div>
)

const Line = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-between p-4 border-b">
    {children}
  </div>
)

const Header = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4">
    <tr className="flex border-b justify-between p-2 pt-4">
      {children}
    </tr>
  </div>
)

const Body = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 divide-y border-b">
    {children}
  </div>
)

const Row = ({ children }: { children: React.ReactNode }) => (
  <tr className="flex justify-between p-2 ">
    {children}
  </tr>
)

const Footer = ({ children }: { children: React.ReactNode }) => (
  <tfoot className="flex flex-1 ">
    <tr className="flex flex-1 justify-end p-2 py-4 gap-4">
      {children}
    </tr>
  </tfoot>
)

export const Table = {
  Root,
  Title,
  Subtitle,
  Line,
  Header,
  Body,
  Row,
  Footer,
}
