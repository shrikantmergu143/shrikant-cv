import React, { useEffect } from 'react'
import Calendar, { Skeleton } from 'react-activity-calendar';
import { useDispatch, useSelector } from "react-redux";
import {setStoreGitRepoStatus} from "./../../redux/Action";

export const API_URL = 'https://github-contributions-api.jogruber.de/v4/';

export const theme = {
    level4: '#83d3ff',
    level3: '#1384dd',
    level2: '#4c88ab',
    level1: '#41496e',
    level0: '#1b2140d9',
}; 
export default function Index() {
  const contributions = useSelector((state)=>state?.allReducers?.contributions)

  const dispatch = useDispatch();
    useEffect(() => {
        callFetchGithubData();
        // eslint-disable-next-line
    }, []);
    const callFetchGithubData =async () =>{
        const response = await fetch(`${API_URL}shrikantmergu143?y=last`);
        if(response?.status === 200){
          const data = await response.json();
          const {contributions} = data;
          dispatch(setStoreGitRepoStatus(contributions));
        }else{
          dispatch(setStoreGitRepoStatus([]));
        }
    }
    if(contributions?.length === 0){
        return <Skeleton loading />
    }
    const defaultLabels = {
        totalCount: `{{count}} contributions in the last year`,
      };
      const totalCount =  contributions?.reduce((sum, day) => sum + day.count, 0);
    //   const totalCount =  data?.reduce((sum, day) => sum + day.count, 0);
  return (
    <div className={"text-center shrikant_gitstatus"}>
        <Calendar
            data={contributions}
            labels={Object.assign({}, defaultLabels, true)}
            totalCount={totalCount}
            theme={theme}
            labels={true}
            className={"text-center"}
        />
    </div>
  )
}
