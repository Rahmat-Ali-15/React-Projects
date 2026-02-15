export const LoginPage = ({fields}) => {
  console.log("🚀 ~ field:", fields);
  return (
    <>
      <div className="signin-form-container">
        <h1>Login page</h1>
        <form className="signin-form">
            {
                fields?.map((el, i) => (
                    <div key={i}>
                        <input type="{el.type" name={el.name.email} placeholder={el.placeholder} />
                    </div>
                ))
            }
        </form>
      </div>
    </>
  );
};
