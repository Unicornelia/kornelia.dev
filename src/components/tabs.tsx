import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { jobTabs } from "../config"

const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    max-height: 600px;
    margin: auto;
    border: 1px solid var(--teal);
    border-radius: 2px;
    overflow: hidden;
`;

const TabList = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    background: var(--navy-shadow);
`;

const Tab = styled.button<{ active: boolean }>`
    flex: 1;
    padding: 12px;
    font-size: var(--fz-sm);
    background: ${({ active }) => (active ? "var(--dark-teal)" : "var(--green-tint)")};
    color: ${({ active }) => (active ? "var(--green)" : "var(--lightest-teal)")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-left: ${({ active }) => (active ? "2px solid #0073e6" : "none")};
    border-style: none;

    &:hover {
        background: var(--navy-shadow);
    }
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px;
    background: var(--dark-teal);
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fz-sm);
`;

const MotionContent = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer>
      <TabList>
        {jobTabs.map((tab, index) => (
          <Tab key={index} active={activeTab === index} onClick={() => setActiveTab(index)}>
            {tab.title}
            <h4>{tab.company}</h4>
          </Tab>
        ))}
      </TabList>
      <ContentWrapper>
        <AnimatePresence mode="wait">
          <MotionContent
            key={jobTabs[activeTab].title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {jobTabs[activeTab].content}
          </MotionContent>
        </AnimatePresence>
      </ContentWrapper>
    </TabsContainer>
  );
};

export default Tabs;
