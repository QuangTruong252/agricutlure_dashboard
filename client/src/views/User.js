import { useContext, useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import userimg from "../assets/user.jpg";
import { UserContext } from "../contexts/UserContext";
import { AuthContext } from "../contexts/AuthContext";

const User = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const { 
    editAccount, 
    setEditAccount, 
    editUser, 
    setEditUser, 
    updateUser 
  } = useContext(UserContext);

  const onEditUser = () => {
    setEditUser(!editUser);
  };
  const onEditAccount = () => {
    setEditAccount(!editAccount);
  };
  useEffect(() => {
    setUpdatedUser(user)
  }, [user] )
  const [updatedUser, setUpdatedUser] = useState(user);
  
  
  const { username, email, fullname, number, address, company } = updatedUser;
  const onChangeUpdatedUser = (event) => {
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };

  const onSubmit = async event => {
		event.preventDefault();
		const { success, message } = await updateUser(updatedUser);
		console.log({success,message});
	};

  let history = useHistory();
  const onClickSave = () => {
    history.push("/user");
    setEditAccount(false);
    setEditUser(false);
  };


  return (
    <main>
      <div className="page-header">
        <div>
          <h1>Agriculture User Information</h1>
          <small>User information and edit information</small>
        </div>
      </div>
      <div className="user-grid">
        <div className="sidebar-user">
          <img src={userimg} alt="" />
          <div>
            <h3>{username}</h3>
            <p>{email}</p>
            <button>Change the picture</button>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          <div className="user-information">
            <div className="user-head user-info history-head-flex">
              <h3>User Information</h3>
              <button className="btn-edit-info" onClick={onEditUser}>
                Edit the user information
                <span className="las la-arrow-right" />
              </button>
            </div>
            <div className="user-main">
              <div className="user-component">
                <h4>Name</h4>
                <input
                  style={{ display: editUser ? "block" : "none" }}
                  type="text"
                  name="fullname"
                  defaultValue={fullname}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editUser ? "none" : "block" }}>
                  {fullname}
                </span>
              </div>
              <div className="user-component">
                <h4>Email</h4>
                <input
                  style={{ display: editUser ? "block" : "none" }}
                  type="text"
                  name="email"
                  defaultValue={email}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editUser ? "none" : "block" }}>
                  {email}
                </span>
              </div>
              <div className="user-component">
                <h4>Company</h4>
                <input
                  style={{ display: editUser ? "block" : "none" }}
                  type="text"
                  name="company"
                  defaultValue={company}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editUser ? "none" : "block" }}>
                  {company}
                </span>
              </div>
              <div className="user-component">
                <h4>Number</h4>
                <input
                  style={{ display: editUser ? "block" : "none" }}
                  type="text"
                  name="number"
                  defaultValue={number}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editUser ? "none" : "block" }}>
                  {number}
                </span>
              </div>
              <div className="user-component">
                <h4>Address</h4>
                <input
                  style={{ display: editUser ? "block" : "none" }}
                  type="text"
                  name="address"
                  defaultValue={address}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editUser ? "none" : "block" }}>
                  {address}
                </span>
              </div>
            </div>
            <div className="user-head user-account history-head-flex">
              <h3>User Account</h3>
              <button className="btn-edit-info" onClick={onEditAccount}>
                Edit the user account
                <span className="las la-arrow-right" />
              </button>
            </div>
            <div className="user-main">
              <div className="user-component">
                <h4>Username</h4>
                <input
                  style={{ display: editAccount ? "block" : "none" }}
                  type="text"
                  name="username"
                  defaultValue={username}
                  onChange={onChangeUpdatedUser}
                />
                <span style={{ display: editAccount ? "none" : "block" }}>
                  {username}
                </span>
              </div>
              <div className="user-component">
                <h4>Passowrd</h4>
                <input
                  style={{ display: editAccount ? "block" : "none" }}
                  type="text"
                  name="password"
                />
                <span style={{ display: editAccount ? "none" : "block" }}>
                  *********
                </span>
              </div>
            </div>
            <button className="btn-save-edit" type="submit" onClick={onClickSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default User;
