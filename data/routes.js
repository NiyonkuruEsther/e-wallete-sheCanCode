import Login from "../src/screens/auth/Login";
import AddExpenses from "../src/screens/expenses/AddExpenses";

export const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: "home",
    icon: "home-outline",
    component: AddExpenses
  },
  {
    route: "Search",
    label: "Wallet",
    type: "Transactions",
    icon: "wallet",
    component: AddExpenses
  },
  {
    route: "Add",
    label: "Add",
    type: "plus-square",
    icon: "plus",
    component: ""
  },
  {
    route: "Like",
    label: "Graph",
    type: "thumb",
    icon: "graph",
    component: Login
  },
  {
    route: "Account",
    label: "Profile",
    type: "Profile",
    icon: "account",
    component: AddExpenses
  }
];
