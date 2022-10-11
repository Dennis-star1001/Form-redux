import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Api, { api } from "./api/api";
import { bioDataAction } from './Services/actions';


const App = ({ state, dispatchBioData }) => {
  const { firstName, lastName, age, address, gender } = state


  const handleSubmit = async () => {
    const data = {
      firstName,
      lastName,
      age,
      address,
      gender
    };
    const res = await api("index.php", data)
    console.log(res)
    // dispatchBioData("")

  }

  return (
    <div className="create">
      <div className="left">
        <div className="form_field">
          <h2 className="title">Student Register</h2>
          <div >
            <label>First name: {firstName}</label>
            <input type='text' name="fname" required onChange={(e) => dispatchBioData({ ...state, firstName: e.target.value })} />


            <label>Last name: {lastName}</label>
            <input type='text' required onChange={(e) => dispatchBioData({ ...state, lastName: e.target.value })} />

            <label>Address: {address} </label>
            <input type='text' required onChange={(e) => dispatchBioData({ ...state, address: e.target.value })} />

            <label>Age: {age}</label>
            <input type='number' required onChange={(e) => dispatchBioData({ ...state, age: e.target.value })} />

            <label>Gender:{gender}</label>
            <div className="gender_field">
              <div className="gender" >
                <label>Male:</label>
                <input value='male' name="radio" type='radio' onChange={(e) => dispatchBioData({ ...state, gender: e.target.value })} />
              </div>
              <div className="gender">
                <label>Female:</label>
                <input value='female' name="radio" type='radio' onChange={(e) => dispatchBioData({ ...state, gender: e.target.value })} />
              </div>
            </div>

            {<button className="save_btn" onClick={handleSubmit}>Clear</button>}

          </div>
        </div>
      </div>
      <div className="right">

      </div>

    </div>
  );
}
const mapStateToProps = ({ form }) => ({
  state: form.bioDataState,


});

// gives access to be able to update states

const mapDispatchToProps = (dispatch) => ({
  dispatchBioData: (params) => dispatch(bioDataAction(params)),

})

// connect helps to link the app component or file to the state

export default connect(mapStateToProps, mapDispatchToProps)(App);
