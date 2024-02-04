import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TransactionHistory = {
  date: string;
  details: string;
  amount: number;
  balance: number;
};

const mockTransactionHistory: TransactionHistory[] = [
  {
    date: "2023-11-27",
    details: "Purchase at XYZ Store",
    amount: -200,
    balance: 1200,
  },
  {
    date: "2023-11-25",
    details: "Transfer to Friend",
    amount: -300,
    balance: 1400,
  },
  {
    date: "2023-11-22",
    details: "ATM Withdrawal",
    amount: -100,
    balance: 1700,
  },
  {
    date: "2023-11-20",
    details: "Online Shopping",
    amount: -200,
    balance: 1800,
  },
  {
    date: "2023-11-18",
    details: "Salary Deposit",
    amount: 2000,
    balance: 2000,
  },
];

export function TableComponent() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Details</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockTransactionHistory.map((invoice) => (
          <TableRow key={invoice.date}>
            <TableCell className="font-medium">{invoice.date}</TableCell>
            <TableCell>{invoice.amount}$</TableCell>
            <TableCell>{invoice.details}</TableCell>
            <TableCell className="text-right">{invoice.balance}$</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">1,200.00$</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
