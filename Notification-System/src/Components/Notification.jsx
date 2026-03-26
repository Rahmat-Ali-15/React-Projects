import { useDispatch, useSelector } from "react-redux";
import { removeNotify } from "../Redux/Action";

export const Notification = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.notification);

  return (
    <>
      <div>
        {value &&
          value.map((el) => {
            return (
              <div
                style={{
                  display: "flow-root",
                  width: "80%",
                  margin: "auto",
                  padding: "10px 20px",
                  color: "white",
                  background:
                    el.type === "Success"
                      ? "green"
                      : el.type === "Error"
                        ? "red"
                        : "orange",
                }}
                key={el.id}
              >
                <button
                  style={{ float: "inline-end", top: "0" }}
                  onClick={() => dispatch(removeNotify(el.id))}
                >
                  X
                </button>
                <h1 style={{ textTransform: "capitalize" }}>
                  {el.msg} -- {el.type}
                </h1>
              </div>
            );
          })}
      </div>
    </>
  );
};
