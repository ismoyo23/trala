import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "reduxs";
export const UseTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
