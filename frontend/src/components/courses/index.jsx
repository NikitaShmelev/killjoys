import React from 'react';


class CoursesComponent extends React.Component {
  render() {
    const { title, author, date, content } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>By {author} on {date}</p>
        <div>{content}</div>
      </div>
    );
  }
}

export default CoursesComponent;