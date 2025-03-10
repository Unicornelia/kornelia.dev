import React, { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { jobTabs } from "../config"

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 600px;
  margin: auto;
  border: 1px solid var(--teal);
  border-radius: 2px;
  overflow: hidden;
`

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background: var(--navy-shadow);
`

const Tab = styled.button<{ active: boolean }>`
    position: relative;
    flex: 1;
    padding: 12px;
    font-size: var(--fz-xs);
    background: ${({ active }) =>
            active ? "var(--dark-teal)" : "var(--green-tint)"};
    color: ${({ active }) => (active ? "var(--green)" : "var(--lightest-teal)")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    border: none;
    text-align: left;
    display: flex;
    flex-direction: column;

    &:hover {
        background: var(--navy-shadow);
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 2px;
        height: 100%;
        background: #0073e6;
        opacity: ${({ active }) => (active ? 1 : 0)};
        transition: opacity 0.3s ease-in-out;
    }
`

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px;
    background: var(--dark-teal);
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fz-xs);
`

const MotionContent = styled(motion.div)`
    width: 100%;
    text-align: justify;
`

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <TabsContainer>
      <TabList role="tablist">
        {jobTabs.map((tab, index) => (
          <Tab
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
          >
            <p>{tab.company}</p>
            <span>{tab.time}</span>
          </Tab>
        ))}
      </TabList>
      <ContentWrapper role="tabpanel">
        <AnimatePresence mode="wait">
          <MotionContent
            key={jobTabs[activeTab].title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4>{jobTabs[activeTab].title}</h4>
            <p>{jobTabs[activeTab].content}</p>
          </MotionContent>
        </AnimatePresence>
      </ContentWrapper>
    </TabsContainer>
  )
}

export default Tabs
