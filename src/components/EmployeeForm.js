import { Grid } from '@material-ui/core';
import { Form, useForm } from './useForm';
import Controls from './controls/Controls.js';
import * as services from '../services/employeeService.js';

const genderItems = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const initialValues = {
  id: 0,
  email: '',
  fullName: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.InputField
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.InputField
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Controls.InputField
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.InputField
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label="Gender"
            name="gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Controls.Select
            label="Departments"
            name="departmentId"
            value={values.departmentId}
            options={services.getDeparmentCollection()}
            onChange={handleInputChange}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button name="Submit" />
            <Controls.Button name="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
