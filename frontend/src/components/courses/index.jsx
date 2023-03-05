import React from 'react';


class CoursesComponent extends React.Component {
  constructor(props){  
    super(props);  
    this.state = {  
         data: this.props.courses,
    }
  }



  render() {
    console.log(this.state)
    const { title, author, date, content } = this.props;
    return (
      <div className="page_container">
        
      </div>
    );
  }
}

export default CoursesComponent;