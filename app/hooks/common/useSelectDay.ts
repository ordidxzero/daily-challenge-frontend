import { useDispatch } from "react-redux";
import { selectDay } from "../../config/store/main";
import { useCallback } from "react";
import useReduxState from "./useReduxState";

function useSelectDay() {
  const dispatch = useDispatch();
  const {
    main: { selectedDay },
  } = useReduxState();
  const setSelectedDay = useCallback(
    (day: string) => dispatch(selectDay(day)),
    [dispatch]
  );
  return { selectedDay, setSelectedDay };
}

export default useSelectDay;
