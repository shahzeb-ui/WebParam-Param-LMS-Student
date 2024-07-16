export default function Dashboard() {
  return (
    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
  <div className="content">
    <div className="section-title">
      <h4 className="rbt-title-style-3">Dashboard</h4>
    </div>
    <div className="row g-5">
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
          <div className="inner">
            <div className="rbt-round-icon bg-primary-opacity">
              <i className="feather-book-open" />
            </div>
            <div className="content">
              <h3 className="counter without-icon color-primary">
                <div className="odometer odometer-auto-theme">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">3</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">0</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </h3>
              <span className="rbt-title-style-2 d-block">
                Enrolled Courses
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-secondary-opacity">
          <div className="inner">
            <div className="rbt-round-icon bg-secondary-opacity">
              <i className="feather-monitor" />
            </div>
            <div className="content">
              <h3 className="counter without-icon color-secondary">
                <div className="odometer odometer-auto-theme">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">1</span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">0</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </h3>
              <span className="rbt-title-style-2 d-block">ACTIVE COURSES</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
        <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
          <div className="inner">
            <div className="rbt-round-icon bg-violet-opacity">
              <i className="feather-award" />
            </div>
            <div className="content">
              <h3 className="counter without-icon color-violet">
                <div className="odometer odometer-auto-theme">
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      <span className="odometer-digit-spacer">8</span>
                      <span className="odometer-digit-inner">
                        <span className="odometer-ribbon">
                          <span className="odometer-ribbon-inner">
                            <span className="odometer-value">7</span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              </h3>
              <span className="rbt-title-style-2 d-block">
                Completed Courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}