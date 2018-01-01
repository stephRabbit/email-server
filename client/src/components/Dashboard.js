import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link
          className="btn-floating btn-large waves-effect waves-light red"
          to="/surveys/new"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;