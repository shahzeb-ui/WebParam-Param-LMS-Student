import './assignments.scss';

export default async function AssignmentsPage() {

  return (
  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
  <div className="content">
    <div className="section-title">
      <h4 className="rbt-title-style-3">Assignments</h4>
    </div>
    <div className="rbt-dashboard-filter-wrapper">
 
    <div className="col-lg-5 offset-lg-1">
        
    </div>

    </div>
    <hr className="mt--30" />
    <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
      <table className="rbt-table table table-borderless">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Total Marks</th>
            <th>Total Submit</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <span className="h6 mb--5">
                Write Link short essay on yourself using the 5
              </span>
              <p className="b3">
                Course:{" "}
                <a href="/instructor/instructor-assignments#">
                  Fundamentals 101
                </a>
              </p>
            </th>
            <td>
              <p className="b3">80</p>
            </td>
            <td>
              <p className="b3">2</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="Edit"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-edit pl--0" /> Edit
                </a>
                <a
                  className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                  title="Delete"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-trash-2 pl--0" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className="h6 mb--5">Speaking Korean for Beginners</span>
              <p className="b3">
                Course:{" "}
                <a href="/instructor/instructor-assignments#">Speaking 101</a>
              </p>
            </th>
            <td>
              <p className="b3">20</p>
            </td>
            <td>
              <p className="b3">3</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="Edit"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-edit pl--0" /> Edit
                </a>
                <a
                  className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                  title="Delete"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-trash-2 pl--0" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className="h6 mb--5">Song Writing Techniques 101</span>
              <p className="b3">
                Course:{" "}
                <a href="/instructor/instructor-assignments#">Song Writing</a>
              </p>
            </th>
            <td>
              <p className="b3">60</p>
            </td>
            <td>
              <p className="b3">10</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="Edit"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-edit pl--0" /> Edit
                </a>
                <a
                  className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                  title="Delete"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-trash-2 pl--0" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <span className="h6 mb--5">Arabic For Beginners</span>
              <p className="b3">
                Course:{" "}
                <a href="/instructor/instructor-assignments#">Arabic Writing</a>
              </p>
            </th>
            <td>
              <p className="b3">40</p>
            </td>
            <td>
              <p className="b3">15</p>
            </td>
            <td>
              <div className="rbt-button-group justify-content-end">
                <a
                  className="rbt-btn btn-xs bg-primary-opacity radius-round"
                  title="Edit"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-edit pl--0" /> Edit
                </a>
                <a
                  className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                  title="Delete"
                  href="/instructor/instructor-assignments#"
                >
                  <i className="feather-trash-2 pl--0" />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
  );
}