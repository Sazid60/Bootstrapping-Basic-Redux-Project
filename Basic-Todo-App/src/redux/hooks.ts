import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";


// Typed versions of useSelector and useDispatch for TypeScript
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// It attaches type information to useSelector or useDispatch.

// It returns a new version of the hook that's fully typed using your RootState or AppDispatch.