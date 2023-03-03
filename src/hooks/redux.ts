import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import { RootState } from 'redux/store';
import type { DiscoverState } from 'redux/slices/discoverSlice';
import { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
