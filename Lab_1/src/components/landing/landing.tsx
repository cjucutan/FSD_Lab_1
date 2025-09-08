import { useState } from "react";
import type { Employee } from "../../interfaces/employee";
import { employees as employeeData } from "../../services/employees";


export function Landing() {
  const [employees] = useState<Employee[]>(employeeData);

  return (
    <main>
      {employees.map((dept, i) => (
        <div key={i}>
          <h4>{dept.department}</h4>
          <ListDisplay employees={dept.employees} />
        </div>
      ))}
    </main>
  );
}

function ListDisplay({ employees }: { employees: string[] }) {
  return (
    <ul>
      {employees.map((employee, i) => (
        <EmployeeItem key={i} employee={employee} />
      ))}
    </ul>
  );
}

function EmployeeItem({ employee }: { employee: string }) {
  return <li>{employee}</li>;
}
