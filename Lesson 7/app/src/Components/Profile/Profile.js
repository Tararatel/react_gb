import "../../style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  botAnswer,
  changeCondition,
} from "../../store/actions/changeCondition";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();
  const condition = useSelector(
    (state) => state.ConditionReducer.profileCondition
  );

  const checkboxHandler = () => {
    dispatch(changeCondition());
  };

  const clickCondition = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (condition) {
      dispatch(botAnswer(condition));
    }
  }, [condition]);

  return (
    <>
      <p>Какое у тебя состояние?</p>

      <form>
        <p>
          <input
            type="checkbox"
            name="condition"
            onChange={(e) => checkboxHandler(e)}
          />
          Дзен
        </p>
        <p>
          <input
            type="checkbox"
            name="condition"
            onChange={(e) => checkboxHandler(e)}
          />
          Полный дзен
        </p>
        <p>
          <button type="submit" onClick={clickCondition}>
            Выбрать
          </button>
        </p>
      </form>

      {condition ? (
        <p>Поздравляю, ты определился</p>
      ) : (
        <p>Кажется, ты пока не определился</p>
      )}
    </>
  );
};

export default Profile;
