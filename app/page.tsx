import { Logo } from "@/components/shared/Logo/Logo";
import { TableComponent } from "@/components/shared/Table/Table";
import { UserIcon } from "@/components/shared/UserIcon/UserIcon";
import { Button } from "@/components/ui/button";

type BalanceData = {
  name: string;
  amount: string;
  currency: string;
};

export default function Home() {
  const mockBalanceData: BalanceData[] = [
    {
      name: "Balance",
      amount: "1200",
      currency: "$",
    },
    {
      name: "Income",
      amount: "2000",
      currency: "$",
    },
    {
      name: "Expenses",
      amount: "800",
      currency: "$",
    },
  ];

  const styles = [
    {
      background: "bg-emarald-500",
      gradient:
        "bg-gradient-to-r from-emerald-400 from-50% to-emerald-500 to-100%",
    },
    {
      background: "bg-sky-500",
      gradient: "bg-gradient-to-r from-sky-400 from-60% to-sky-500 to-100%",
    },
    {
      background: "bg-orange-500",
      gradient:
        "bg-gradient-to-r from-orange-400 from-60% to-orange-500 to-100%",
    },
  ];

  return (
    <main>
      <nav className="flex justify-between bg-amber-300 px-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center">
          <div className="mr-4 my-4">
            <p className="text-lg font-bold text-stone-800">VISA</p>
            <p className="text-stone-800 text-xs">
              Card: XXXX - XXXX - XXXX - 1234
            </p>
          </div>
          <div className="flex items-center justify-center w-10 h-10 bg-amber-400 rounded-full">
            <UserIcon />
          </div>
        </div>
      </nav>
      <div className="px-4">
        <div className="my-4 text-center">
          <h3 className="text-3xl font-bold">Hi, test_user!</h3>
          <p className="text-lg font-medium text-slate-600">
            Glad to see you again
          </p>
        </div>

        <Button className="absolute top-24 right-4 text-stone-900 bg-amber-300 hover:bg-amber-500">
          Logout
        </Button>

        <div className="mb-">
          <p className="text-2xl font-medium my-3">Your credit movements</p>
          <ul className="flex">
            {mockBalanceData.map((item: BalanceData, index: number) => {
              return (
                <li
                  key={index}
                  className={`w-48 text-center py-2 px-4 my-4 mr-4 text-lg text-white rounded-2xl ${styles[index].background} ${styles[index].gradient}`}
                >
                  <p className="text-sm">{item.name}</p>
                  <p className="text-2xl mt-1">
                    {item.currency}
                    {item.amount}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="text-2xl font-medium my-3">Transactions history</p>
          <TableComponent />
        </div>
      </div>
    </main>
  );
}
