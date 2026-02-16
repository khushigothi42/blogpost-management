import React from "react";
import Navbar from "../component/Navbar";
import "./Analytics.css"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Analytics = () => {
  const chartData = [
    { name: "Admin", posts: 5 },
    { name: "User", posts: 3 },
    { name: "Test", posts: 4 },
    { name: "Demo", posts: 2 },
  ];

const headers =[
  {label:'ID', key:'id'},
    {label:'Author', key:'author'},
  {label:'Titel', key:'titel'},
  {label:'date', key:'createdAt'}

];
const header2 =['ID','Author','Date','Titel']
  const COLORS = ["#0088fe", "#00d49f", "#ffbb28", "#ff8042"];
  return (
    <div className="analytics-page">
      <Navbar />
      <main className="analytics-main">
        <header className="analytics-header">
          <h1>Blog Analytics</h1>
          <p>Insights into your blog perfomance and activites</p>
        </header>
        <div className="charts-container">
          <div className="chart-card">
            <h3>Posts per Author</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="posts" fill="#8884d8" name="number of posts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="chart-card">
            <h3>Distributions</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="posts"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-$(index)`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div> 
          </div>
        </div>
        <div className="posts-table-section">
          <h3>All Posts</h3>
          <div className="table-wrapper">
            <table className="analytics-table">
              <thead>
              <tr>
                {headers.map((header,index)=>(
                  <th>header.label</th>
                  ))}
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>React Basic</td>
                  <td>Admin</td>
                  <td>16/02/2026</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>understading hooks</td>
                  <td>user</td>
                  <td>15/02/2026</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>javascript</td>
                  <td>test</td>
                  <td>14/02/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Naxt</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
