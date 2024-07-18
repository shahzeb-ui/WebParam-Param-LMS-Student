export default function Notifications() {
    return (
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
  <div className="content">
    <div className="section-title">
      <h4 className="rbt-title-style-3">Notifications</h4>
    </div>
    <div className="advance-tab-button mb--30">
      <ul
        className="nav nav-tabs tab-button-style-2 justify-content-start"
        id="reviewTab-4"
        role="tablist"
      >
        <li role="presentation">
          <a
            className="tab-button active"
            id="received-tab"
            data-bs-toggle="tab"
            data-bs-target="#received"
            role="tab"
            aria-controls="received"
            aria-selected="true"
            href="/instructor/instructor-reviews#"
          >
            <span className="title">For Me</span>
          </a>
        </li>
        <li role="presentation">
          <a
            className="tab-button"
            id="given-tab"
            data-bs-toggle="tab"
            data-bs-target="#given"
            role="tab"
            aria-controls="given"
            aria-selected="false"
            href="/instructor/instructor-reviews#"
          >
            <span className="title">Everyone</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="tab-content">
      <div
        className="tab-pane fade active show"
        id="received"
        role="tabpanel"
        aria-labelledby="received-tab"
      >
        <div className="rbt-dashboard-table table-responsive mobile-table-750">
          <table className="rbt-table table table-borderless">
            <thead>
              <tr>
                {/* <th>Student</th> */}
                <th>Date</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th>John Due</th> */}
                <td>12:34pm July 13, 2024</td>
                <td>
                  <p className="b2">Get ready for your first class, keep an eye on your notifications to stay up to date</p>
                </td>
              </tr>
              <tr>
                {/* <th>John Due</th> */}
                <td>14:55pm July 11, 2024</td>
                <td>
                  <p className="b2">Please update your details and make sure they are always up to date</p>
                </td>
              </tr>
              <tr>
                {/* <th>John Due</th> */}
                <td>09:10am July 08, 2024</td>
                <td>
                  <p className="b2">Congratulations! you have been enrolled in the course</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="given"
        role="tabpanel"
        aria-labelledby="given-tab"
      >
        <div className="rbt-dashboard-table table-responsive mobile-table-750">
          <table className="rbt-table table table-borderless">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Course: Business Management</th>
                <td>
                    we would like to welcome you all and let you know classes will start next week
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}