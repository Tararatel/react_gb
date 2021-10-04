import "../../style.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCondition } from "../../store/actions/changeCondition";

const Profile = () => {
  const dispatch = useDispatch();
  const condition = useSelector((state) => state.profileCondition);

  const checkboxHandler = (e) => {
    dispatch(changeCondition(e.target.checked));
  };

  const clickCondition = (e) => {
    e.preventDefault();
  };

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
