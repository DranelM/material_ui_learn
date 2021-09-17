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

export const deleteEmployeeById = (id) => {
  console.log('DELETE FUNCTION');
  console.log(id);
  let employees = getAllEmployees(false);
  let deleteIndex = employees.findIndex(
    (employee) => employee.id === parseInt(id)
  );
  console.log(deleteIndex);
  employees.splice(deleteIndex, 1);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const editEmployee = (data) => {
  let employees = getAllEmployees(false);
  let editIndex = employees.findIndex(
    (employee) => employee.id === parseInt(data.id)
  );
  employees.splice(editIndex, 1, data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const saveNewEmployee = (data) => {
  let employees = getAllEmployees(false);
  data.id = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const getAllEmployees = (withDepartments = true) => {
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  if (employees === null) {
    employees = [];
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
  }

  if (withDepartments) {
    let departments = getDepartmentCollection();

    return employees.map((employee) => ({
      ...employee,
      departmentId: departments[+employee.departmentId - 1].title,
    }));
  } else {
    return employees;
  }
};

const generateEmployeeId = () => {
  let eId = Number(localStorage.getItem(KEYS.employeeId));
  if (eId === null) {
    eId = 0;
  }
  localStorage.setItem(KEYS.employeeId, JSON.stringify(eId + 1));
  return eId;
};
