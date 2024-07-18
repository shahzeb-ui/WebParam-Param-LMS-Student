import React from "react";
import styles from "@/styles/video/ResponsiveVideoComponent.module.css";
import { useVideo } from "@/context/video-context/video-context";

// Function to get the YouTube embed URL
const getEmbedUrl = (url: string): string => {
  const videoIdMatch = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  const videoId = videoIdMatch ? videoIdMatch[1] : null;
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`
    : "";
};

const ResponsiveVideoComponent: React.FC = () => {
  const { selectedVideoUrl } = useVideo();
  console.log("selected video: ", selectedVideoUrl);

  const embedUrl = selectedVideoUrl ? getEmbedUrl(selectedVideoUrl) : "";

  return (
    <div className={styles.jss8}>
      <figure className={`${styles.css1vl7155} ${styles.e1fj0tsm3}`}>
        <div className={styles.cssb98nv4}>
          <canvas className={styles.css1q19oq5}></canvas>
          <div className={styles.cssq6awd8}></div>
          <div
            className={styles.cssl7x8s3}
            style={{ width: "100%", height: "100%" }}
          >
            {embedUrl ? (
              <iframe
                src={embedUrl}
                style={{ width: "100%", height: "100%" }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className={styles.videoPlaceholder}>
                <i className="bi bi-play-fill"></i>
                <span></span>
              </div>
            )}
          </div>
        </div>
        <div
          className={`${styles.cssjemxbu} ${styles.played} ${styles.showOnlyTimelineWithoutControls}`}
        >
          <div className={styles.css5f7vge}>
            <div className={styles.css1k3btty}></div>
            <div className={styles.css9tskdo}>
              <div className={styles.css1n3scyi}>
                <div className={styles.css9g9i5v}>
                  <div className={styles.css859fep}></div>
                  <div className={styles.MuiBoxRoot}>
                    <div className={styles.MuiBoxRootTime}>
                      <span
                        className={`${styles.MuiTypographyRoot} ${styles.MuiTypographyBodyMedium2}`}
                      >
                        00:31
                      </span>
                    </div>
                    <div className={styles.cssux22lo}>
                      <div className={styles.csskuymjs}>
                        <div
                          className={styles.css1fxbdpm}
                          //   style={{ "--videoplayer-currenttime": "69.983%" }}
                        ></div>
                        <div className={styles.cssy3ngs}></div>
                        <div className={styles.cssg6ppkv}></div>
                      </div>
                    </div>
                    <div className={styles.MuiBoxRootDuration}>
                      <span
                        className={`${styles.MuiTypographyRoot} ${styles.MuiTypographyBodyMedium2}`}
                      >
                        00:45
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.MuiBoxRoot}>
                  <div className={styles.MuiBoxRoot}>
                    <div className={styles.cssrq27us}>
                      <svg
                        className={styles.MuiSvgIconRoot}
                        focusable="false"
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.24421 0.420799C3.24422 -0.150621 2 0.571431 2 1.72316V14.2768C2 15.4285 3.24422 16.1506 4.24421 15.5792L15.2286 9.30235C16.2364 8.72651 16.2364 7.27346 15.2286 6.69762L4.24421 0.420799Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className={styles.csskd7unw}>
                      <button
                        className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e12}`}
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                        >
                          <svg
                            className={styles.MuiSvgIconRoot}
                            focusable="false"
                            aria-hidden="true"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.79764 3.21057L2.14148 10.5254L9.45634 12.1816"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fill="none"
                              d="M25.1432 20.868C26.1962 18.6679 26.5057 16.1852 26.0251 13.794C25.5444 11.4028 24.2996 9.2325 22.4783 7.61023C20.6569 5.98795 18.3577 5.00154 15.927 4.79962C13.4963 4.59771 11.0658 5.19122 9.00176 6.49074L2.14146 10.5254"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M7.5 18L11 15.5L11 25"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                            <ellipse
                              cx="17.5"
                              cy="20"
                              rx="3.5"
                              ry="5"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            ></ellipse>
                          </svg>
                        </span>
                        <span className={styles.MuiTouchRippleRoot}></span>
                      </button>
                      <button
                        className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e12}`}
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                        >
                          <svg
                            className={styles.MuiSvgIconRoot}
                            focusable="false"
                            aria-hidden="true"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.6902 3.21057L27.3463 10.5254L20.0315 12.1816"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fill="none"
                              d="M4.34461 20.868C3.29159 18.6679 2.9821 16.1852 3.46276 13.794C3.94342 11.4028 5.1882 9.2325 7.00954 7.61022C8.83089 5.98795 11.1301 5.00154 13.5608 4.79962C15.9915 4.5977 18.422 5.19122 20.4861 6.49073L27.3464 10.5254"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M9 18L12.5 15.5L12.5 25"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            ></path>
                            <ellipse
                              cx="19"
                              cy="20"
                              rx="3.5"
                              ry="5"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            ></ellipse>
                          </svg>
                        </span>
                        <span className={styles.MuiTouchRippleRoot}></span>
                      </button>
                      <div className={styles.csszxonyc}>
                        <button
                          className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e14}`}
                          tabIndex={0}
                          type="button"
                        >
                          <span
                            className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                          >
                            <svg
                              className={styles.MuiSvgIconRoot}
                              focusable="false"
                              aria-hidden="true"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.19587 2.31988C8.94642 2.20072 8.66991 2.14958 8.39434 2.17162C8.11877 2.19367 7.8539 2.28811 7.62656 2.44541L3.47578 5.36133H2.03024C1.61404 5.36133 1.21488 5.52667 0.920577 5.82097C0.626275 6.11527 0.460938 6.51443 0.460938 6.93063V9.06925C0.460938 9.48546 0.626275 9.88461 0.920577 10.1789C1.21488 10.4732 1.61404 10.6386 2.03024 10.6386H3.47277L7.52298 13.5494L7.53033 13.5545C7.75767 13.7118 8.02253 13.8062 8.2981 13.8283C8.57171 13.8502 8.84625 13.7999 9.09431 13.6826C9.36256 13.5609 9.59118 13.3661 9.75398 13.1206C9.91785 12.8734 10.0084 12.5848 10.015 12.2883V3.72812C10.0205 3.44853 9.95121 3.17251 9.8142 2.92863C9.67612 2.68286 9.4744 2.47882 9.23022 2.33795C9.21901 2.33149 9.20755 2.32545 9.19587 2.31988ZM4.1342 9.88245L8.10243 12.7343C8.1842 12.7901 8.27913 12.8236 8.37785 12.8315C8.47782 12.8395 8.57813 12.8209 8.66862 12.7777L8.6792 12.7726C8.77734 12.7286 8.86104 12.6577 8.92049 12.568C8.97907 12.4796 9.0118 12.3767 9.01502 12.2708V3.71082C9.01746 3.60859 8.99245 3.50758 8.94236 3.41843C8.89545 3.33492 8.82828 3.2647 8.74718 3.21414C8.66139 3.17671 8.56759 3.16096 8.47408 3.16844C8.37461 3.1764 8.27899 3.21036 8.19679 3.26691L4.1342 6.12088V9.88245ZM1.62768 6.52807C1.73445 6.42131 1.87926 6.36133 2.03024 6.36133H3.1342V9.63856H2.03024C1.87926 9.63856 1.73445 9.57858 1.62768 9.47181C1.52092 9.36504 1.46094 9.22024 1.46094 9.06925V6.93063C1.46094 6.77965 1.52092 6.63484 1.62768 6.52807ZM13.4744 4.40685C13.6871 4.23084 14.0023 4.26066 14.1783 4.47344C14.9993 5.46594 15.4212 6.72844 15.3622 8.0149C15.3435 9.42168 14.9495 10.798 14.2208 12.0016C14.0777 12.2378 13.7703 12.3134 13.5341 12.1703C13.2979 12.0273 13.2223 11.7199 13.3653 11.4837C14.0032 10.4302 14.3474 9.22533 14.3624 7.99397C14.3625 7.98807 14.3626 7.98216 14.3629 7.97627C14.4125 6.9355 14.0719 5.91369 13.4078 5.11081C13.2318 4.89803 13.2616 4.58285 13.4744 4.40685ZM12.0386 6.07732C11.8626 5.86454 11.5474 5.83473 11.3346 6.01073C11.1219 6.18674 11.092 6.50191 11.2681 6.71469C11.5604 7.06816 11.7104 7.518 11.6886 7.97619C11.6878 7.99203 11.6878 8.00791 11.6886 8.02375C11.7104 8.48194 11.5604 8.93178 11.2681 9.28525C11.092 9.49803 11.1219 9.8132 11.3346 9.98921C11.5474 10.1652 11.8626 10.1354 12.0386 9.92262C12.4847 9.38336 12.7159 8.69871 12.6885 7.99997C12.7159 7.30124 12.4847 6.61658 12.0386 6.07732Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <span className={styles.MuiTouchRippleRoot}></span>
                        </button>
                        <div className={styles.cssnejomu}>
                          <span
                            className={`${styles.MuiSliderRoot} ${styles.MuiSliderColorPrimary} ${styles.MuiSliderSizeSmall}`}
                          >
                            <span className={styles.MuiSliderRail}></span>
                            <span
                              className={styles.MuiSliderTrack}
                              style={{ left: "0%", width: "100%" }}
                            ></span>
                            <span
                              data-index="0"
                              className={`${styles.MuiSliderThumb} ${styles.MuiSliderThumbSizeSmall} ${styles.MuiSliderThumbColorPrimary}`}
                              style={{ left: "100%" }}
                            >
                              {/* <input
                                data-index="0"
                                aria-label="Volume"
                                aria-valuenow="100"
                                aria-orientation="horizontal"
                                aria-valuemax="100"
                                aria-valuemin="0"
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value="100"
                                style={{
                                  border: "0px",
                                  clip: "rect(0px, 0px, 0px, 0px)",
                                  height: "100%",
                                  margin: "-1px",
                                  overflow: "hidden",
                                  padding: "0px",
                                  position: "absolute",
                                  whiteSpace: "nowrap",
                                  width: "100%",
                                  direction: "ltr",
                                }}
                              /> */}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.csskd7unw}>
                      <button
                        className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e10}`}
                        tabIndex={0}
                        type="button"
                        data-subtitles="off"
                      >
                        <span
                          className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                        >
                          <svg
                            className={styles.MuiSvgIconRoot}
                            focusable="false"
                            aria-hidden="true"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_13600_1067)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.2498 15.3255C11.4465 16.1119 11 17.2188 11 18.5C11 19.7812 11.4465 20.8881 12.2498 21.6745C13.0506 22.4584 14.2849 23 16 23C16.5523 23 17 23.4477 17 24C17 24.5523 16.5523 25 16 25C13.8492 25 12.0834 24.3104 10.8507 23.1037C9.62054 21.8995 9 20.2564 9 18.5C9 16.7436 9.62054 15.1005 10.8507 13.8963C12.0834 12.6896 13.8492 12 16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14C14.2849 14 13.0506 14.5416 12.2498 15.3255Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.2498 15.3255C21.4465 16.1119 21 17.2188 21 18.5C21 19.7812 21.4465 20.8881 22.2498 21.6745C23.0506 22.4584 24.2849 23 26 23C26.5523 23 27 23.4477 27 24C27 24.5523 26.5523 25 26 25C23.8492 25 22.0834 24.3104 20.8507 23.1037C19.6205 21.8995 19 20.2564 19 18.5C19 16.7436 19.6205 15.1005 20.8507 13.8963C22.0834 12.6896 23.8492 12 26 12C26.5523 12 27 12.4477 27 13C27 13.5523 26.5523 14 26 14C24.2849 14 23.0506 14.5416 22.2498 15.3255Z"
                                fill="currentColor"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M29 7H7C5.89543 7 5 7.89543 5 9V28C5 29.1046 5.89543 30 7 30H29C30.1046 30 31 29.1046 31 28V9C31 7.89543 30.1046 7 29 7ZM7 5C4.79086 5 3 6.79086 3 9V28C3 30.2091 4.79086 32 7 32H29C31.2091 32 33 30.2091 33 28V9C33 6.79086 31.2091 5 29 5H7Z"
                                fill="currentColor"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_13600_1067">
                                <rect
                                  x="3"
                                  y="5"
                                  width="30"
                                  height="27"
                                  rx="4"
                                  fill="currentColor"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span className={styles.MuiTouchRippleRoot}></span>
                      </button>
                      <div>
                        <button
                          className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e12}`}
                          tabIndex={0}
                          type="button"
                        >
                          <span
                            className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                          >
                            <svg
                              className={styles.MuiSvgIconRoot}
                              focusable="false"
                              aria-hidden="true"
                              width="40"
                              height="30"
                              viewBox="0 0 40 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.7048 14.8685L24.373 18.6842M24.373 18.6842L28.0411 22.5M24.373 18.6842L20.7048 22.5M24.373 18.6842L28.0411 14.8685M11 11.0526L16.1785 8V22.4999"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </span>
                          <span className={styles.MuiTouchRippleRoot}></span>
                        </button>
                      </div>
                      <button
                        className={`${styles.MuiButtonBaseRoot} ${styles.MuiButtonRoot} ${styles.MuiButtonText} ${styles.MuiButtonSizeLarge} ${styles.MuiButtonColorInherit} ${styles.e6pn0e14}`}
                        tabIndex={0}
                        type="button"
                      >
                        <span
                          className={`${styles.MuiButtonIcon} ${styles.MuiButtonStartIcon}`}
                        >
                          <svg
                            className={styles.MuiSvgIconRoot}
                            focusable="false"
                            aria-hidden="true"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6666 7C16.6666 6.44772 17.1143 6 17.6666 6H22.9999C23.5522 6 23.9999 6.44772 23.9999 7V12.3333C23.9999 12.8856 23.5522 13.3333 22.9999 13.3333C22.4477 13.3333 21.9999 12.8856 21.9999 12.3333V9.41409L17.4844 13.9293C17.0938 14.3198 16.4607 14.3198 16.0702 13.9293C15.6797 13.5387 15.6797 12.9056 16.0702 12.5151L20.5856 8H17.6666C17.1143 8 16.6666 7.55228 16.6666 7ZM13.9293 16.0707C14.3198 16.4612 14.3198 17.0944 13.9293 17.4849L9.41421 22H12.3333C12.8856 22 13.3333 22.4477 13.3333 23C13.3333 23.5523 12.8856 24 12.3333 24H7C6.44772 24 6 23.5523 6 23V17.6667C6 17.1144 6.44772 16.6667 7 16.6667C7.55228 16.6667 8 17.1144 8 17.6667V20.5858L12.5151 16.0707C12.9056 15.6801 13.5388 15.6801 13.9293 16.0707Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className={styles.MuiTouchRippleRoot}></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default ResponsiveVideoComponent;
