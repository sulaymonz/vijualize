'use client';
import { useSelector, useDispatch } from 'react-redux';
import * as landingActions from '../../../store/actions/landingActions.ts';

export default function SidebarTab({ title }) {
  const { category } = useSelector((state) => state.landing);
  const dispatch = useDispatch();

  return (
    <li className="flex justify-start items-center">
      <span
        className="h-[1px] bg-white transition-all"
        style={{ width: category === title ? '40px' : '0' }}
      ></span>
      <span
        className="px-3 cursor-pointer"
        onClick={() => {
          dispatch(landingActions.landingCategoryUpdated(title));
        }}
      >
        {title}
      </span>
    </li>
  );
}
