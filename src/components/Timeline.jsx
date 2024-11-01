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

const degrees = [
  {
    title: "Secondary Education Examination (SEE)",
    institution: "Nawartna Life School",
    doc: 2020,
    gpa: 3.95,
  },
  {
    title: "School Level Certificate (SLC)",
    institution: "Seabird International Higher Secondary School",
    doc: 2022,
    gpa: 3.41,
  },
  {
    title: "BSc (Hons) Computer Systems Engineering",
    institution: "ISMT College",
    doc: "2022 - now",
  },
];
const internships = [
  {
    title: "Digital Marketing Internship",
    institution: "Theme Nepal",
    description: "Managed and optimized Facebook and Instagram profiles, including creating and executing targeted ad campaigns. Developed engaging content for social media, blogs, and marketing materials, aligned with brand strategies. Effectively communicated with clients to understand their needs, provided updates, and adjusted marketing strategies accordingly. Assisted in SEO efforts and contributed to the execution of SMS and email marketing campaigns, enhancing online visibility and customer engagement.",
    duration:"February 2022 to August 2022 (6 months)",
  },
];

const Timeline = () => {
  return (
    <div className="pb-16 px-6">
      <Heading
        title={"Education and Work"}
        sTitle={"This is journey till now."}
      />
      <div className="max-w-7xl mx-auto mt-4 shadow-2xl shadow-violet-950 bg-slate-600 rounded-xl bg-opacity-40 overflow-hidden">
        <div className="bg-slate-100 bg-opacity-5">
          <VerticalTimeline>
            {degrees.map((degree) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={degree.doc}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="font-semibold text-xl">{degree.title}</h3>
                <h4 className="text-lg">{degree.institution}</h4>
                <p className="text-sm">GPA: {degree.gpa}</p>
              </VerticalTimelineElement>
            ))}

            {internships.map((internship) => (
              <VerticalTimelineElement
                contentStyle={{
                  background: "red",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  red",
                }}
                date={internship.duration}
                iconStyle={{ background: "red", color: "#fff" }}
                icon={<WorkIcon />}
              >
                <h3 className="font-semibold text-xl">{internship.title}</h3>
                <p className="font-norml text-sm">{internship.description}</p>
              </VerticalTimelineElement>
            ))}

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<HourglassTopIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
