
import React from 'react';
import styled from 'styled-components';

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const ScheduleRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const ScheduleDate = styled.td`
  font-weight: bold;
  padding: 10px;
`;

const ScheduleActivity = styled.td`
  padding: 10px;
`;

const ScheduleLocation = styled.td`
  padding: 10px;
`;

const Schedule = () => {
  return (
    <ScheduleWrapper>
      <Title>Tour Schedule</Title>
      <ScheduleTable>
        <thead>
          <ScheduleRow>
            <th>Date</th>
            <th>Activity</th>
            <th>Location</th>
          </ScheduleRow>
        </thead>
        <tbody>
          <ScheduleRow>
            <ScheduleDate>Day 1</ScheduleDate>
            <ScheduleActivity>Arrive in Paris</ScheduleActivity>
            <ScheduleLocation>Paris</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 2</ScheduleDate>
            <ScheduleActivity>Tour of Eiffel Tower</ScheduleActivity>
            <ScheduleLocation>Paris</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 3</ScheduleDate>
            <ScheduleActivity>Visit Louvre Museum</ScheduleActivity>
            <ScheduleLocation>Paris</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 4</ScheduleDate>
            <ScheduleActivity>Travel to Rome</ScheduleActivity>
            <ScheduleLocation>Rome</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 5</ScheduleDate>
            <ScheduleActivity>Tour of Colosseum</ScheduleActivity>
            <ScheduleLocation>Rome</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 6</ScheduleDate>
            <ScheduleActivity>Explore Vatican City</ScheduleActivity>
            <ScheduleLocation>Rome</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 7</ScheduleDate>
            <ScheduleActivity>Travel to Santorini</ScheduleActivity>
            <ScheduleLocation>Santorini</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 8</ScheduleDate>
            <ScheduleActivity>Relax on the Beach</ScheduleActivity>
            <ScheduleLocation>Santorini</ScheduleLocation>
          </ScheduleRow>
          <ScheduleRow>
            <ScheduleDate>Day 9</ScheduleDate>
            <ScheduleActivity>Fly back Home</ScheduleActivity>
            <ScheduleLocation>-</ScheduleLocation>
          </ScheduleRow>
        </tbody>
      </ScheduleTable>
    </ScheduleWrapper>
  );
};

export default Schedule;