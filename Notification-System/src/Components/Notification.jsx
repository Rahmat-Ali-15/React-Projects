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
              <>
                <h1>
                  {el.msg} -- {el.type}
                </h1>
                <button onClick={() => dispatch(removeNotify(el.id))}>X</button>
              </>
            );
          })}
      </div>
    </>
  );
};
