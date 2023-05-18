import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Option A', value: 3 },
  { name: 'Option B', value: 2 },
  { name: 'Option C', value: 1 },
];


const votes = [
    {
      option: 'Option A',
      votes: [
        { user: 'User 1' },
        { user: 'User 2' },
        { user: 'User 3' },
      ],
    },
    {
      option: 'Option B',
      votes: [
        { user: 'User 4' },
        { user: 'User 5' },
      ],
    },
    {
      option: 'Option C',
      votes: [
        { user: 'User 6' },
      ],
    },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Results = ({ votes }) => {
  // check if votes array is defined or null before reducing
  const totalVotes = votes ? votes.reduce((acc, vote) => acc + vote.votes.length, 0) : 0;
  const dataWithPercentage = data.map((option) => ({
    ...option,
    percentage: ((option.value / totalVotes) * 100).toFixed(2),
  }));

  return (
    <div>
      <h2>Results</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={dataWithPercentage}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            labelLine={false}
          >
            {dataWithPercentage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Choice</th>
          </tr>
        </thead>
        <tbody>
          {votes ? votes.map((vote) =>
            vote.votes.map((userVote) => (
              <tr key={userVote.user}>
                <td>{userVote.user}</td>
                <td>{vote.option}</td>
              </tr>
            ))
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
