'use client'
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import getNotifications from "@/app/api/notifications/notification";
import { notificationType } from "@/app/Utils/notificationInterface";
import Cookies from "universal-cookie";

export default function Notifications() {
  const [showNotification, setShowNotification] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [notifications, setNotifications] = useState<notificationType[]>([]);
  const [notification, setNotification] = useState<notificationType|null>(null);
  const cookies = new Cookies();

  const user = cookies.get("loggedInUser");


  async function fetchNotifications(userId:string) {
      const res = await getNotifications(userId);
      setNotifications(res.data.data);
      console.log('response: ',res.data.data);  
  }

  useEffect(() => {
    if (user) {
      console.log('user', String(user.data.id));
      fetchNotifications(user.data.id || user.data.userId);
    }

    console.log('response: ', notifications);
  }, [])

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
            Received: <span style={{fontWeight:'400'}}>{notification?.createdAt.split("T")[0]}</span>
          </h5>
          <button type="button" onClick={() => setShowNotification(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {notification?.message}
        </Modal.Body>
        <Modal.Footer>
          
          <div className="d-flex justify-content-between align-center w-100" style={{ width:'100%', alignItems:'center'}}>
              <p className="p-0 m-0">{currentIndex + 1}/{notifications?.length}</p> 
              <div className="d-flex justify-content-between align-center gap-2">
              <button type="button" onClick={handleNotificationPrev} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Prev
          </button>
          <button type="button" onClick={handleNotificationNext} className="btn btn-lg btn-dark text-light btn-outline-dark">
            Next
          </button>    
            </div>
          </div>
        </Modal.Footer>
      </Modal>


      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">Notifications</h4>
          </div>
          <div className="advance-tab-button mb--30">
            
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
                    {notifications.length > 0 ? notifications.map(alert => ( 
                      <tr key={alert.id} onClick={() => handleShowNotification(alert)}>
                        <td>{alert.createdAt.split('T')[0]}</td>
                        <td>
                          <p className="b2">{alert.message}</p>
                        </td>
                      </tr>
                    )):<tr> <div className="m-4">notifications will appear here</div></tr>}
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
