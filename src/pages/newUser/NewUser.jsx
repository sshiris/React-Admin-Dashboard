import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserFormItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserFormItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserFormItem">
          <label>Email</label>
          <input type="text" placeholder="john.smith@gmail.com" />
        </div>
        <div className="newUserFormItem">
          <label>Password</label>
          <input type="text" placeholder="password" />
        </div>
        <div className="newUserFormItem">
          <label>Phone</label>
          <input type="text" placeholder="+358 234 2345 12" />
        </div>
        <div className="newUserFormItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserFormItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="male">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="male">Other</label>
          </div>
        </div>
        <div className="newUserFormItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserBtn">Create</button>
      </form>
    </div>
  );
}
