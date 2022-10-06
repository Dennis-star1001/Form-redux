import { connect, useDispatch, useSelector } from "react-redux";
import { addressAction, ageAction, firstNameAction, genderAction, lastNameAction } from './Services/actions';


function App({
  firstName,
  lastName,
  address,
  age,
  gender,
  dispatchFirstName,
  dispatchLastName,
  dispatchAge,
  dispatchAddress,
  dispatchGender
}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchFirstName("")
    dispatchLastName("")
    dispatchAddress("")
    dispatchAge("")
    dispatchGender("")
  }

  return (
    <div className="create">
      <div className="left">
        <div className="form_field">
          <h2>Student Register</h2>
          <form >
            <label>First name: {firstName}</label>
            <input type='text' name="fname" required onChange={(e) => dispatchFirstName(e.target.value)} />


            <label>Last name: {lastName}</label>
            <input type='text' required onChange={(e) => dispatchLastName(e.target.value)} />

            <label>Address: {address} </label>
            <input type='text' required onChange={(e) => dispatchAddress(e.target.value)} />

            <label>Age: {age}</label>
            <input type='number' required onChange={(e) => dispatchAge(e.target.value)} />

            <label>Gender:{gender}</label>
            <div className="gender_field">
              <div className="gender" >
                <label>Male:</label>
                <input value='male' name="radio" type='radio' onChange={(e) => dispatchGender(e.target.value)} />
              </div>
              <div className="gender">
                <label>Female:</label>
                <input value='female' name="radio" type='radio' onChange={(e) => dispatchGender(e.target.value)} />
              </div>
            </div>



            {<button className="save_btn">Clear</button>}

          </form>
        </div>
      </div>
      <div className="right">

      </div>

    </div>
  );
}
const mapStateToProps = ({ form }) => ({
  firstName: form.firstName,
  lastName: form.lastName,
  address: form.address,
  age: form.age,
  gender: form.gender

});

// gives access to be able to update states

const mapDispatchToProps = (dispatch) => ({
  dispatchFirstName: (params) => dispatch(firstNameAction(params)),
  dispatchLastName: (params) => dispatch(lastNameAction(params)),
  dispatchAddress: (params) => dispatch(addressAction(params)),
  dispatchAge: (params) => dispatch(ageAction(params)),
  dispatchGender: (params) => dispatch(genderAction(params))
})

// connect helps to link the app component or file to the state

export default connect(mapStateToProps, mapDispatchToProps)(App);
