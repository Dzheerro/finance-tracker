import { BudgetCategory } from './budget.model';

export interface Expense {
  id: string;
  name: string;
  budgetCategory: BudgetCategory;
  amount: number;
  date: Date;
}
