import React, { useEffect, useState } from 'react'
import Calendar, {
    createCalendarTheme,
    Skeleton,
    type CalendarData,
     Props as CalendarProps,
  } from 'react-activity-calendar';
export const API_URL = 'https://github-contributions-api.jogruber.de/v4/';
export const transformData = (data, transformFn) => {
    if (typeof transformFn !== 'function') {
      return data;
    }
  
    const transformedData = transformFn(data);
  
    if (!Array.isArray(transformedData)) {
      throw new Error(`Passed function transformData must return a list of Day objects.`);
    }
  
    if (transformedData.length > 0) {
      const testObj = transformedData[0];
  
      if (typeof testObj.count !== 'number' || testObj.count < 0) {
        throw new Error(
          `Required property "count: number" missing or invalid. Got: ${testObj.count}`,
        );
      }
  
      if (!/\d{4}-\d{2}-\d{2}/.test(testObj.date)) {
        throw new Error(
          `Required property "date: YYYY-MM-DD" missing or invalid. Got: ${testObj.date}`,
        );
      }
  
      if (typeof testObj.level !== 'number' || testObj.level < 0 || testObj.level > 4) {
        throw new Error(
          `Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${testObj.level}.`,
        );
      }
    }
  
    return transformedData;
};
export const theme = {
    level4: '#83d3ff',
    level3: '#1384dd',
    level2: '#4c88ab',
    level1: '#41496e',
    level0: '#1b2140d9',
}; 
export default function Index() {
  const [data, setData] = useState(null);

    useEffect(() => {
        callFetchGithubData();
    }, []);
    const callFetchGithubData =async () =>{
        const response = await fetch(`${API_URL}shrikantmergu143?y=last`);
        const data = await response.json();
        const {contributions} = data
        setData(contributions)
    }
    if(data === null){
        return <Skeleton loading />
    }
    const defaultLabels = {
        totalCount: `{{count}} contributions in the last year`,
      };
      const totalCount =  data?.reduce((sum, day) => sum + day.count, 0);
    //   const totalCount =  data?.reduce((sum, day) => sum + day.count, 0);
  return (
    <div className={"text-center shrikant_gitstatus"}>
        <Calendar
            data={transformData(data, (data) => data)}
            labels={Object.assign({}, defaultLabels, true)}
            totalCount={totalCount}
            theme={theme}
            labels={true}
            className={"text-center"}
        />
    </div>
  )
}
