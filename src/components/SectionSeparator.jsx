import { FaBolt } from "react-icons/fa";
import "../styles/sectionSeparator.css";

export default function SectionSeparator() {
    return (
        <div className="section-separator">
            <div className="separator-line"></div>
            <FaBolt className="separator-icon" />
            <div className="separator-line"></div>
        </div>
    );
}
