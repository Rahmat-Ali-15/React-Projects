export const SignUpPage = ({ data }) => {
  console.log("🚀 ~ data:", data);
  //   if (!data) {
  //     return <h1>Loading...</h1>;
  //   }
  return (
    <>
      <div className="signup-form-container">
        <div className="right-part">
          <h3>Welcome Back!</h3>
          <p>To keep connected with us please login with your personal info</p>
          <button className="signin-btn">SIGN IN</button>
        </div>
        <form className="signUp-form">
          <h3>Create Account</h3>
          {data?.map((el, i) => (
            <div
              key={i}
              className="input-container"
            >
              <input
                type={el.type}
                name={el.name}
                placeholder={el.placeholder}
                required
              />
            </div>
          ))}
          <input
            type="submit"
            value="SIGN UP"
            className="signup-btn"
          />
        </form>
      </div>
    </>
  );
};
