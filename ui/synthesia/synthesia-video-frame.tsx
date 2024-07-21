"use client";

import React, { useEffect } from "react";
import styles from "@/styles/video/ResponsiveVideoComponent.module.css";
import { useVideo } from "@/context/video-context/video-context";

const getDirectVideoUrl = (url: string): string => {
  return url;
};

const ResponsiveVideoComponent: React.FC = () => {
  const { selectedVideoUrl } = useVideo();
  // console.log("selected video: ", selectedVideoUrl);

  const videoUrl = selectedVideoUrl ? getDirectVideoUrl(selectedVideoUrl) : "";

  useEffect(() => {
    if (videoUrl) {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.onload = () => {
          try {
            iframe.contentWindow?.addEventListener("ended", () => {
              const event = new CustomEvent("videoWatched", {
                detail: videoUrl,
              });
              window.dispatchEvent(event);
            });
          } catch (error) {
            console.error(
              "Failed to add event listener to iframe content window",
              error
            );
          }
        };
      }
    }
  }, [videoUrl]);

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
            <iframe
              src={videoUrl}
              loading="lazy"
              title="Synthesia video player - KM01-KT0101 Project Management Overview"
              allowFullScreen
              allow="encrypted-media; fullscreen;"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
                overflow: "hidden",
              }}
            ></iframe>
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
                      <div className={styles.csszxonyc}>
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
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.csskd7unw}>
                      <div></div>
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
