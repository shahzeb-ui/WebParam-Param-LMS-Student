'use client'
import { useState } from "react";
import { notifications, notificationType, notificationsForEveryone, notificationEveryoneType } from "./data";
import { Modal } from "react-bootstrap";

export default function Notifications() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notification, setNotification] = useState<notificationType | null>(null);

  const [showNotificationE, setShowNotificationE] = useState(false);
  const [currentIndexE, setCurrentIndexE] = useState(0);
  const [notificationE, setNotificationE] = useState<notificationEveryoneType | null>(null);

  function handleShowNotification(notif: notificationType) {
    const index = notifications.findIndex(alert => alert.id === notif.id);
    setCurrentIndex(index);
    setNotification(notif);
    setShowNotification(true);
  }

  function handleNotificationNext() {
    const nextIndex = (currentIndex + 1) % notifications.length;
    setCurrentIndex(nextIndex);
    setNotification(notifications[nextIndex]);
  }

  function handleNotificationPrev() {
    const prevIndex = (currentIndex - 1 + notifications.length) % notifications.length;
    setCurrentIndex(prevIndex);
    setNotification(notifications[prevIndex]);
  }

  function handleShowNotificationE(notif: notificationEveryoneType) {
    const index = notificationsForEveryone.findIndex(alert => alert.id === notif.id);
    setCurrentIndexE(index);
    setNotificationE(notif);
    setShowNotificationE(true);
  }

  function handleNotificationNextE() {
    const nextIndex = (currentIndexE + 1) % notificationsForEveryone.length;
    setCurrentIndexE(nextIndex);
    setNotificationE(notificationsForEveryone[nextIndex]);
  }

  function handleNotificationPrevE() {
    const prevIndex = (currentIndexE - 1 + notificationsForEveryone.length) % notificationsForEveryone.length;
    setCurrentIndexE(prevIndex);
    setNotificationE(notificationsForEveryone[prevIndex]);
  }

  return (
    <>
      <Modal
        className="modal fade"
        id="staticBackdrop"
        size="lg"
        show={showNotification}
        onHide={() => setShowNotification(false)}
        centered>
        <Modal.Header className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Received: <span style={{fontWeight:'400'}}>{notification?.date}</span>
          </h5>
          <button type="button" onClick={() => setShowNotification(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {notification?.message}
        </Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={handleNotificationPrev} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Prev
          </button>
          <button type="button" onClick={handleNotificationNext} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Next
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        className="modal fade"
        id="staticBackdropE"
        size="lg"
        show={showNotificationE}
        onHide={() => setShowNotificationE(false)}
        centered>
        <Modal.Header className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Course: <span style={{fontWeight:'400'}}>{notificationE?.course}</span>
          </h5>
          <button type="button" onClick={() => setShowNotificationE(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {notificationE?.message}
        </Modal.Body>
        <Modal.Footer>
          <button type="button" onClick={handleNotificationPrevE} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Prev
          </button>
          <button type="button" onClick={handleNotificationNextE} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Next
          </button>
        </Modal.Footer>
      </Modal>

      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Notifications</h4>
          </div>
          <div className="advance-tab-button mb--30">
            <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="reviewTab-4" role="tablist">
              <li role="presentation">
                <a className="tab-button active" id="received-tab" data-bs-toggle="tab" data-bs-target="#received" role="tab" aria-controls="received" aria-selected="true" href="/instructor/instructor-reviews#">
                  <span className="title">For Me</span>
                </a>
              </li>
              <li role="presentation">
                <a className="tab-button" id="given-tab" data-bs-toggle="tab" data-bs-target="#given" role="tab" aria-controls="given" aria-selected="false" href="/instructor/instructor-reviews#">
                  <span className="title">Everyone</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="received" role="tabpanel" aria-labelledby="received-tab">
              <div className="rbt-dashboard-table table-responsive mobile-table-750">
                <table className="rbt-table table table-borderless">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notifications.map(alert => (
                      <tr key={alert.id} onClick={() => handleShowNotification(alert)}>
                        <td>{alert.date}</td>
                        <td>
                          <p className="b2">{alert.message}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="given" role="tabpanel" aria-labelledby="given-tab">
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
                    {notificationsForEveryone.map(alert => (
                      <tr key={alert.id} onClick={() => handleShowNotificationE(alert)}>
                        <th>Course: {alert.course}</th>
                        <td>{alert.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
