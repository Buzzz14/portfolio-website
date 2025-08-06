import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import WorkIcon from "@mui/icons-material/Work";
import { degrees } from "../data/Degrees";
import { jobs } from "../data/Jobs";

const Timeline = () => {
  const timelineData = [...degrees, ...jobs].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="pb-16 px-6">
      <div className="max-w-7xl mx-auto mt-16">
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: item.type === "degree" ? "#5b34b4" : "#f97316",
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${
                  item.type === "degree" ? "#5b34b4" : "#f97316"
                }`,
              }}
              date={
                item.type === "degree" ? item.date.split("-")[0] : item.duration
              }
              iconStyle={{
                background: item.type === "degree" ? "#5b34b4" : "#f97316",
                color: "#fff",
              }}
              icon={item.type === "degree" ? <SchoolIcon /> : <WorkIcon />}
            >
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <h4 className="text-lg">{item.institution}</h4>
              {item.type === "degree" ? (
                item.gpa && <p className="text-sm">GPA: {item.gpa}</p>
              ) : (
                <p className="text-sm">{item.description}</p>
              )}
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "#10b981", color: "#fff" }}
            icon={<HourglassTopIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
