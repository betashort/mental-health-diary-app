import React from 'react'
import {Tab, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';

function DiaryModalTab() {
  return (
    <>
    <Tab>
      <TabList>
        <Tab> 日記 </Tab>
        <Tab> コラム法 </Tab>
        <Tab> タスク </Tab>
      </TabList>
      <TabPanel>
        <h2>日記</h2>
      </TabPanel>
      <TabPanel>
        <h2>コラム法</h2>
      </TabPanel>
      <TabPanel>
        <h2>タスク</h2>
      </TabPanel>
    </Tab>
    </>
  )
}

export default DiaryModalTab