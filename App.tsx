import { BudgetOverview } from "./BudgetOverview";
import { homeBudgets } from "./homeBudgets";

function App() {
  return (
    <div className="App">
      <BudgetOverview budgets={homeBudgets} />
    </div>
  );
}

export default App;
