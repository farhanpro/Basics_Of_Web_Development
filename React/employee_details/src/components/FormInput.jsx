import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="border rounded lg:m-8 md:m-3">
    <div className="md:flex bg-gray-100">
      <p className="text-black m-4 font-medium">Contact Information</p>
    </div>
    <div className="md:flex mt-8 lg:m-8 md:m-3">
      <div className="mt-4">
        <TextField
          label="Email"
          name="employee_email"
          required={true}
          color="warning"
          focused
          // value={props.basicDetailsInfo.employee.employee_email}
          // onChange={props.handleChangeForBasicDetails}
          value={employeeDetails.employee_email}
          onChange={handleChange}
          autoComplete="off"
          style={{
            width: '230px',
          }}
        />
      </div>
      <div className="mt-4 lg:ml-28 md:ml-2">
        <TextField
          label="Mobile Number"
          autoComplete="off"
          name="phone_number"
          required={true}
          color="warning"
          type="number"
          focused
          // value={props.basicDetailsInfo.employee.phone_number}
          // onChange={props.handleChangeForBasicDetails}
          value={employeeDetails.phone_number}
          onChange={handleChange}
          style={{
            width: '207px',
          }}
        />
      </div>
      <div className="mt-4 lg:ml-28 md:ml-4">
        <TextField
          label="Alternate Number"
          autoComplete="off"
          name="alternate_number"
          type="number"
          //required={true}
          color="warning"
          focused
          // value={props.basicDetailsInfo.employee.alternate_number}
          // onChange={props.handleChangeForBasicDetails}
          value={employeeDetails.alternate_number}
          onChange={handleChange}
          style={{
            width: '207px',
          }}
        />
      </div>
    </div>
    <div className="flex mt-2  md:m-3 mb-2">
      <div className="mt-4 lg:ml-5 md:ml-1 lg:w-3/5 md:w-4/5">
        <TextField
          label="Address"
          name="address"
          required={true}
          color="warning"
          focused
          // value={props.basicDetailsInfo.employee.address}
          // onChange={props.handleChangeForBasicDetails}
          value={employeeDetails.address}
          onChange={handleChange}
          style={{
            width: '96%',
          }}
        />
      </div>
      <div className="mt-4 lg:ml-20 md:ml-2 lg:w-1/5 md:w-2/5">
        <TextField
          label="Pin Code"
          name="pincode"
          required={true}
          color="warning"
          focused
          // value={props.basicDetailsInfo.employee.pincode}
          // onChange={props.handleChangeForBasicDetails}
          value={employeeDetails.pincode}
          onChange={handleChange}
          style={{
            width: '207px',
          }}
        />
      </div>
    </div>
    <div className="flex mt-4 lg:ml-8 md:ml-3 mb-5">
      <div className="mt-4">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Country
          </InputLabel>
          <MSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="country"
            required={true}
            color="warning"
            focused
            // value={props.basicDetailsInfo.employee.country}
            // onChange={props.handleChangeForBasicDetails}
            value={employeeDetails.country}
            onChange={handleChange}
            style={{
              width: '230px',
            }}
          >
            {/* <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem> */}
            {
              props.countryList.map((emp, i) => {
                return (
                  <MenuItem value={emp.code}>{emp.name}</MenuItem>
                )
              })
            }
          </MSelect>
        </FormControl>
      </div>
      <div className="mt-4 lg:ml-28 md:ml-4">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            State
          </InputLabel>
          <MSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="state"
            required={true}
            color="warning"
            focused
            // value={props.basicDetailsInfo.employee.state}
            // onChange={props.handleChangeForBasicDetails}
            value={employeeDetails.state}
            onChange={handleChange}
            style={{
              width: '215px',
            }}
          >
            {
              props.stateList.map((std, i) => {
                return (
                  <MenuItem value={std.code}>{std.name}</MenuItem>
                )
              })
            }
          </MSelect>
        </FormControl>
      </div>
      <div className="mt-4 lg:ml-28 md:ml-4">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            City
          </InputLabel>
          <MSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="city"
            required={true}
            color="warning"
            focused
            // value={props.basicDetailsInfo.employee.city}
            // onChange={props.handleChangeForBasicDetails}
            value={employeeDetails.city}
            onChange={handleChange}
            style={{
              width: '210px',
            }}
          >
            <MenuItem value={1}>Mumbai</MenuItem>
            <MenuItem value={2}>Delhi</MenuItem>

          </MSelect>
        </FormControl>
      </div>
    </div>
  </div>
  );
};

export default FormInput;