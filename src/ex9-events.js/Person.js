import React, { useState } from "react";

const Person = () => {
  //const[firstName, setFirstName]= useState('');
  //const[lastName, setLastName] =useStste('');

  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [showMessage, setShowMessage] = useState({ type: "", message: "" });

  return (
    <div className="card">
      <div className="card-header bg-info text-white">FROM</div>
      <div className="card-body">
        <form className="form-control">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter a First Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter a Last Name"
            />
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-socess" onClick={clickBtn}>
              Click me
            </button>
          </div>
        </form>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default Person;
