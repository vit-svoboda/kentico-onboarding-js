import React from 'react';
import assignment from './../../../assignment.gif';

class List extends React.Component {
  render() {
    return (
      <div className="row">
        {/* TODO: You can delete the assignment part once you do not need it */}
        <div className="row">
          <div className="col-sm-12">
            <p className="lead text-center">Desired functionality is captured on the gif image. </p>
            <p className="lead text-center"><b>Note: </b>Try to make solution generic enough so that more list items can be edited at once.</p>
            <img src={assignment} alt="assignment" className="img--assignment" />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <pre>
              // TODO: implement the list here :)
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
