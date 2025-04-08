import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>📝 To-Do List</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '24px',
  }
};

export default Header;
