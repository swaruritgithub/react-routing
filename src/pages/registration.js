import React from "react";
export default function Registration() {
    return (
        <div>
        <h2>Registration Form</h2>
    <form action="register" method="post">
      <label>UserName:</label><br />
      <input type="text" name="username" />
      <br></br>
      
      <label>Email:</label><br />
      <input type="email" name="email" />
      <br></br>
      
      <label>Password:</label><br />
      <input type="password" name="password" />
      <br></br>
      
      <label>Gender:</label><br />
      Male<input type="radio" name="gender" value="male" />
      Female<input type="radio" name="gender" value="female" />
      Other<input type="radio" name="gender" value="other" />
      <br></br>
      
      <label>Role:</label><br />
      Admin<input type="radio" name="role" value="admin" />
      Customer<input type="radio" name="role" value="customer" />
      <br></br> 
      
      <label>Address:</label><br />
      <textarea name="Address"></textarea>
      
      <br></br>  
      <input type="submit" value="SUBMIT"/>
    </form>
        </div>
    );
}