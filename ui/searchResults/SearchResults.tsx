import { motion, AnimatePresence } from "framer-motion";
import bookCover from './bookCover.jpeg'
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAlltUnitStandards } from "@/actions/unit-standards/get-unit-standards";

export default function SearchResults({ search }:any) {
  const [coursesCopy, setCoursesCopy] = useState<any[]>([]);

  const getUnitStandards = async (courseId: string) => {

    try {
      const data = await getAlltUnitStandards(courseId);
      console.log("get data: ", data);
      setCoursesCopy(data);
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    const courseId = "668fcf681a1ce7b0635b61c6";
    getUnitStandards(courseId);
  }, []);

  useEffect(() => {
    const filteredCourses = coursesCopy.filter((course:any) => course.title.toLowerCase().includes(search.toLowerCase()));
    setCoursesCopy(filteredCourses);
  }, [search]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 1 }} // Transition duration set to 1 second
        layout layoutRoot
        className="row g-4 pt--30 p-6 rbt-hover rbt-card"
      >
        <div className="col-lg-12">
          <div className="section-title">
            <h4 className="ml-2">Search Results</h4>
          </div>
        </div>

        {coursesCopy.slice(0, 8).map((course:any) => (
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
            key={course?.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12"
            style={{cursor:'none'}}
          >
            <div className="rbt-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <a href={``}>
                  <Image
                    alt="Card image"
                    loading="lazy"
                    width={186}
                    height={128}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src={bookCover?.src}
                  />
                </a>
              </div>
              <div className="rbt-card-body">
                <h5 className="rbt-card-title">
                  <span >{course?.title}</span>
                </h5>
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price"><i className="bi bi-lock-fill"></i></span>
                    <span className="off-price"></span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
