const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  {
    id: '2',
    title: 'Marketing',
  },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

export const saveNewEmployee = (data) => {
  let employees = getAllEmployees();
  data.id = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const getAllEmployees = () => {
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  if (employees === null) {
    employees = [];
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
  }

  let departments = getDepartmentCollection();
  console.log(departments);

  return employees.map((employee) => ({
    ...employee,
    departmentId: departments[+employee.departmentId - 1].title,
  }));
};

const generateEmployeeId = () => {
  let eId = Number(localStorage.getItem(KEYS.employeeId));
  if (eId === null) {
    eId = 0;
  }
  localStorage.setItem(KEYS.employeeId, JSON.stringify(eId + 1));
  return eId;
};
