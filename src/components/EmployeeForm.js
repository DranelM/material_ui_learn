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
  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialValues, true, validation);

  function validation(validatedArgs = values) {
    let temp = { ...errors };

    if ('fullName' in validatedArgs)
      temp.fullName = validatedArgs.fullName.length ? '' : 'Enter Your Name';

    if ('mobile' in validatedArgs)
      temp.mobile =
        validatedArgs.mobile.length >= 9
          ? ''
          : 'Tel number must have at least 9 numbers';

    if ('email' in validatedArgs)
      temp.email = /.+@.+\..+/.test(validatedArgs.email) ? '' : 'Invalid Email';

    if ('city' in validatedArgs)
      temp.city = validatedArgs.city.length ? '' : 'Enter city name';

    if ('departmentId' in validatedArgs) {
      temp.departmentId = validatedArgs.departmentId.length
        ? ''
        : 'Select department';
    }

    setErrors({ ...temp });
    if (validatedArgs === values)
      return Object.values(temp).every((x) => x === '');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      services.saveNewEmployee(values);
      window.alert('Employee Added');
      resetForm();
    }
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.InputField
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.InputField
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.InputField
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.InputField
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
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
            options={services.getDepartmentCollection()}
            onChange={handleInputChange}
            error={errors.departmentId}
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
            <Controls.Button name="Submit" type="submit" />
            <Controls.Button name="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
