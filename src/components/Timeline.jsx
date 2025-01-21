import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import WorkIcon from "@mui/icons-material/Work";
import Heading from "./Heading";
import { degrees } from "../data/Degrees";
import { jobs } from "../data/Jobs";

const Timeline = () => {
  return (
    <div className="pb-16 px-6">
      <div className="max-w-7xl mx-auto mt-16">
        <div className="">
          <VerticalTimeline>
            {degrees.map((degree) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: "#5b34b4",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #5b34b4",
                }}
                date={degree.doc}
                iconStyle={{ background: "#5b34b4", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="font-semibold text-xl">{degree.title}</h3>
                <h4 className="text-lg">{degree.institution}</h4>
                <p className="text-sm">{degree.gpa}</p>
              </VerticalTimelineElement>
            ))}

            {jobs.map((job) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f97316",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid #f97316",
                }}
                date={job.duration}
                iconStyle={{ background: "#f97316", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="font-semibold text-xl">{job.title}</h3>
                <p className="font-normal text-sm">{job.description}</p>
              </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
              iconStyle={{ background: "#10b981", color: "#fff" }}
              icon={<HourglassTopIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
