export default function ActiveAssessment() {
  return (
    <table className="rbt-table table table-borderless">
      <thead>
        <tr>
          <th>Assessment Name</th>
          <th>Due Date</th>
          <th>Total Marks</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <span className="h6 mb--5">Introduction to Project Management</span>
            <p className="b3">
              Course:{" "}
              <a href="/instructor/instructor-assignments#">Fundamentals 101</a>
            </p>
          </th>
          <td>
            <p className="b3">2024-01-01</p>
          </td>
          <td>
            <p className="b3">50</p>
          </td>
          <td>
            <div className="rbt-button-group justify-content-end">
              <a
                className="rbt-btn btn-xs bg-primary-opacity radius-round"
                title="Edit"
                href="/take-assessment"
              >
               Start
              </a>
              {/* <a
                className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-success"
                title="Delete"
                href="/instructor/instructor-assignments#"
              > */}
              {/* <i className="bi bi-download pl--0" /> */}
              {/* </a> */}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
